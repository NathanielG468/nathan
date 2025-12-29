
import React from 'react';
import { THEME_COLORS } from '../constants';

interface AnswerButtonProps {
  text: string;
  index: number;
  onClick: (index: number) => void;
  disabled?: boolean;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ text, index, onClick, disabled }) => {
  const colorClass = THEME_COLORS[index % THEME_COLORS.length];
  
  return (
    <button
      onClick={() => onClick(index)}
      disabled={disabled}
      className={`${colorClass} w-full py-5 px-6 rounded-2xl shadow-[0_8px_0_rgb(0,0,0,0.2)] transition-all transform hover:-translate-y-1 active:translate-y-1 disabled:opacity-50 text-left flex items-center gap-4 border border-white/10 group`}
    >
      <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center font-black text-xl group-hover:bg-white group-hover:text-indigo-900 transition-colors">
        {String.fromCharCode(65 + index)}
      </div>
      <span className="text-xl font-extrabold tracking-tight drop-shadow-sm">{text}</span>
    </button>
  );
};

export default AnswerButton;
