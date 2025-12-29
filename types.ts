
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  category?: string;
  explanation?: string;
  bgKeyword?: string; // Search term for thematic background
}

export enum GameStatus {
  START = 'START',
  PLAYING = 'PLAYING',
  FEEDBACK = 'FEEDBACK',
  FINISH = 'FINISH'
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  status: GameStatus;
  questions: Question[];
  lastAnswerCorrect: boolean | null;
  timeLeft: number;
}
