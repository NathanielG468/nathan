
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from './components/Layout';
import AnswerButton from './components/AnswerButton';
import { Question, GameStatus, GameState } from './types';
import { INITIAL_QUESTIONS, CATEGORY_ICONS } from './constants';
import { generateBibleQuestions } from './services/geminiService';

const TOTAL_GAME_TIME = 30; // 30 seconds for the entire game
const DEDUCTION_INCORRECT = -500;
const DEDUCTION_TIMEOUT = -250;

const App: React.FC = () => {
  const [state, setState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    status: GameStatus.START,
    questions: INITIAL_QUESTIONS,
    lastAnswerCorrect: null,
    timeLeft: TOTAL_GAME_TIME,
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [lastScoreChange, setLastScoreChange] = useState<number>(0);
  const timerRef = useRef<any>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    
    timerRef.current = setInterval(() => {
      setState(prev => {
        if (prev.timeLeft <= 1) {
          stopTimer();
          // If time runs out during PLAYING, trigger final screen
          if (prev.status === GameStatus.PLAYING) {
            return { ...prev, timeLeft: 0, status: GameStatus.FINISH };
          }
          return { ...prev, timeLeft: 0 };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
  }, [stopTimer]);

  const startGame = async (useAI = false) => {
    let questions = INITIAL_QUESTIONS;
    if (useAI) {
      setIsGenerating(true);
      const aiQuestions = await generateBibleQuestions();
      if (aiQuestions.length > 0) questions = aiQuestions;
      setIsGenerating(false);
    }
    
    setState({
      currentQuestionIndex: 0,
      score: 0,
      status: GameStatus.PLAYING,
      questions,
      lastAnswerCorrect: null,
      timeLeft: TOTAL_GAME_TIME,
    });
    setLastScoreChange(0);
    startTimer();
  };

  const handleAnswer = (index: number) => {
    stopTimer();
    
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = index === currentQuestion.correctAnswer;
    const isTimeout = index === -1;
    
    let points = 0;
    if (isCorrect) {
      // Points based on remaining global time percentage
      points = Math.round(1000 * (state.timeLeft / TOTAL_GAME_TIME)) + 500;
    } else if (isTimeout) {
      points = DEDUCTION_TIMEOUT;
    } else {
      points = DEDUCTION_INCORRECT;
    }

    setLastScoreChange(points);

    setState(prev => ({
      ...prev,
      score: Math.max(0, prev.score + points),
      lastAnswerCorrect: isTimeout ? null : isCorrect,
      status: GameStatus.FEEDBACK,
    }));
  };

  const nextQuestion = () => {
    // If time ran out during feedback, go to finish
    if (state.timeLeft <= 0) {
      setState(prev => ({ ...prev, status: GameStatus.FINISH }));
      return;
    }

    const isLast = state.currentQuestionIndex === state.questions.length - 1;
    if (isLast) {
      setState(prev => ({ ...prev, status: GameStatus.FINISH }));
    } else {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        status: GameStatus.PLAYING,
        lastAnswerCorrect: null,
      }));
      setLastScoreChange(0);
      startTimer();
    }
  };

  const currentQuestion = state.questions[state.currentQuestionIndex];

  // Render Start Screen
  if (state.status === GameStatus.START) {
    return (
      <Layout bgKeyword="sacred mountain light">
        <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="inline-block p-1 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-[3rem] shadow-[0_0_50px_rgba(251,191,36,0.2)]">
            <div className="p-10 bg-indigo-950/80 rounded-[2.8rem] backdrop-blur-xl border border-white/10">
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-[0.8]">
                SCRIPTURE<br/><span className="text-transparent bg-clip-text bg-gradient-to-t from-amber-400 to-yellow-200">QUEST</span>
              </h1>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-2xl font-bold text-white/90 max-w-lg mx-auto leading-relaxed">
              Unlock the secrets of the ancient word.<br/>
              <span className="text-lg font-medium opacity-60">You have 30 seconds for the entire 30-trial pilgrimage.</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => startGame(false)}
              className="group relative w-full md:w-64 py-5 bg-white text-indigo-900 rounded-2xl text-2xl font-black shadow-[0_10px_0_#d1d5db] hover:shadow-[0_5px_0_#d1d5db] hover:translate-y-1 transition-all active:translate-y-2 active:shadow-none"
            >
              Classic Trial
            </button>
            <button
              onClick={() => startGame(true)}
              disabled={isGenerating}
              className="group relative w-full md:w-64 py-5 bg-gradient-to-b from-amber-400 to-yellow-600 text-indigo-950 rounded-2xl text-2xl font-black shadow-[0_10px_0_#92400e] hover:shadow-[0_5px_0_#92400e] hover:translate-y-1 transition-all active:translate-y-2 active:shadow-none disabled:opacity-50"
            >
              {isGenerating ? 'Summoning AI...' : 'Divine Insight'}
            </button>
          </div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-40">Illuminating truth through the ages</p>
        </div>
      </Layout>
    );
  }

  // Render Playing Screen
  if (state.status === GameStatus.PLAYING) {
    return (
      <Layout bgKeyword={currentQuestion?.bgKeyword || currentQuestion?.category}>
        <div className="w-full max-w-4xl space-y-6">
          <div className="flex justify-between items-center bg-black/40 p-4 rounded-3xl backdrop-blur-md border border-white/5">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 px-4 py-2 rounded-2xl font-bold text-sm tracking-widest uppercase">
                Challenge {state.currentQuestionIndex + 1} of {state.questions.length}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`w-20 h-14 rounded-2xl border-2 flex flex-col items-center justify-center font-black transition-colors ${state.timeLeft < 10 ? 'border-red-500 bg-red-500/20 animate-pulse' : 'border-white/20 bg-white/5'}`}>
                <span className="text-[10px] uppercase opacity-60 leading-none">Total Time</span>
                <span className="text-2xl leading-tight">{state.timeLeft}s</span>
              </div>
              <div className="bg-gradient-to-b from-yellow-300 to-amber-500 text-indigo-950 px-6 py-2 rounded-2xl font-black text-2xl shadow-lg border-b-4 border-amber-700">
                {state.score}
              </div>
            </div>
          </div>

          <div className="bg-white/95 text-slate-900 p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative min-h-[250px] flex items-center justify-center overflow-hidden border-4 border-white">
             {/* Subtle Parchment Texture Overlay */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]"></div>
             
             <div className="absolute top-6 right-8 text-6xl opacity-[0.05] rotate-12 select-none">
                {CATEGORY_ICONS[currentQuestion.category || ''] || '📖'}
             </div>
             
             <div className="relative z-10 text-center space-y-4">
               <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600/50 block mb-2">{currentQuestion.category}</span>
               <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                 {currentQuestion.text}
               </h2>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
            {currentQuestion.options.map((option, idx) => (
              <AnswerButton
                key={idx}
                index={idx}
                text={option}
                onClick={handleAnswer}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  // Render Feedback Screen
  if (state.status === GameStatus.FEEDBACK) {
    const isCorrect = state.lastAnswerCorrect;
    const isTimeout = state.lastAnswerCorrect === null && lastScoreChange === DEDUCTION_TIMEOUT;
    
    let feedbackColor = 'bg-red-600';
    let feedbackTitle = 'Incorrect';
    let feedbackEmoji = '🕊️';
    
    if (isCorrect) {
      feedbackColor = 'bg-emerald-600';
      feedbackTitle = 'Wonderful!';
      feedbackEmoji = '✨';
    } else if (isTimeout) {
      feedbackColor = 'bg-amber-600';
      feedbackTitle = 'Time Expired';
      feedbackEmoji = '⏳';
    }

    return (
      <Layout bgKeyword={currentQuestion?.bgKeyword || currentQuestion?.category}>
        <div className={`w-full max-w-2xl mx-auto rounded-[3rem] p-10 text-center space-y-8 animate-in slide-in-from-bottom-20 duration-500 ${feedbackColor} shadow-[0_0_100px_rgba(0,0,0,0.4)] border-4 border-white/20 backdrop-blur-lg`}>
          <div className="text-8xl filter drop-shadow-xl animate-bounce-subtle">
            {feedbackEmoji}
          </div>
          
          <div className="space-y-3">
            <h3 className="text-5xl font-black tracking-tight">{feedbackTitle}</h3>
            <div className={`text-2xl font-black px-8 py-2 rounded-full inline-block shadow-inner ${lastScoreChange > 0 ? 'bg-white/20 text-white' : 'bg-black/20 text-white/90'}`}>
              {lastScoreChange > 0 ? `+${lastScoreChange}` : lastScoreChange} Wisdom
            </div>
          </div>

          <div className="bg-black/10 p-8 rounded-[2rem] text-xl font-bold leading-relaxed border border-white/5">
            <p className="mb-4 opacity-60 uppercase text-xs tracking-widest font-black">Sacred Insight</p>
            {currentQuestion.explanation}
          </div>
          
          <button
            onClick={nextQuestion}
            className="w-full py-6 bg-white text-indigo-950 rounded-2xl text-2xl font-black shadow-xl hover:bg-slate-100 transition-all active:scale-95 border-b-4 border-slate-300"
          >
            {state.timeLeft <= 0 ? 'Final Reckoning' : 'Continue the Journey'}
          </button>
        </div>
      </Layout>
    );
  }

  // Render Finish Screen
  if (state.status === GameStatus.FINISH) {
    const timeRanOut = state.timeLeft <= 0;
    return (
      <Layout bgKeyword="sacred light heavens">
        <div className="text-center space-y-10 animate-in zoom-in duration-700">
          <div className="relative inline-block">
             <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-8xl animate-bounce-subtle drop-shadow-2xl">
               {timeRanOut ? '⏳' : '✨'}
             </div>
             <div className="bg-white/10 p-16 rounded-full border-4 border-yellow-400/50 backdrop-blur-2xl shadow-[0_0_80px_rgba(251,191,36,0.2)]">
               <h2 className="text-xl font-black uppercase tracking-[0.4em] opacity-60 mb-2">Wisdom Accumulated</h2>
               <div className="text-9xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-t from-amber-500 via-yellow-200 to-white drop-shadow-2xl leading-none">
                 {state.score}
               </div>
             </div>
          </div>
          
          <div className="space-y-4">
             <h3 className="text-5xl font-black tracking-tighter">
               {timeRanOut ? 'Time Overcome You' : 'Pilgrimage Complete'}
             </h3>
             <p className="text-2xl font-medium opacity-70">
               {timeRanOut ? '"Redeeming the time, because the days are evil."' : '"Thy word is a lamp unto my feet."'}
             </p>
          </div>

          <div className="flex flex-col gap-5 max-w-xs mx-auto">
            <button
              onClick={() => setState(prev => ({ ...prev, status: GameStatus.START, timeLeft: TOTAL_GAME_TIME }))}
              className="py-5 bg-white text-indigo-900 rounded-2xl text-2xl font-black shadow-2xl hover:bg-slate-50 transition-all border-b-8 border-slate-300 active:translate-y-2 active:border-b-0"
            >
              Restart Trial
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return null;
};

export default App;
