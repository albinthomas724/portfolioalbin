import React from 'react';

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: 'left' | 'right';
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses = '',
}) => {
  return (
    <button
      className={`w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 md:w-60 md:mt-10`}
      onClick={handleClick}
    >
      {/* Background spin animation */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      
      {/* Button content */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === 'left' && icon} {/* Render icon on the left */}
        {title} {/* Render button title */}
        {position === 'right' && icon} {/* Render icon on the right */}
      </span>
    </button>
  );
};

export default MagicButton;
