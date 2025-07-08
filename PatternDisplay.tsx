import React, { useEffect, useState } from 'react';

interface PatternDisplayProps {
  pattern: number[];
  isShowing: boolean;
  playerSequence: number[];
}

export function PatternDisplay({ pattern, isShowing, playerSequence }: PatternDisplayProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];

  useEffect(() => {
    if (isShowing) {
      setCurrentStep(0);
      setHighlightedIndex(null);
      
      const showPattern = () => {
        let step = 0;
        const interval = setInterval(() => {
          if (step < pattern.length) {
            setHighlightedIndex(pattern[step]);
            setTimeout(() => setHighlightedIndex(null), 400);
            step++;
          } else {
            clearInterval(interval);
            setCurrentStep(pattern.length);
          }
        }, 600);
        
        return interval;
      };
      
      const timeout = setTimeout(showPattern, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isShowing, pattern]);

  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold text-white mb-4">
        Pattern Length: {pattern.length}
      </h3>
      
      {/* Pattern preview */}
      <div className="flex justify-center gap-2 mb-4">
        {pattern.map((colorIndex, index) => (
          <div
            key={index}
            className={`
              w-8 h-8 rounded-full border-2 transition-all duration-300
              ${highlightedIndex === colorIndex ? 'scale-125 border-white' : 'border-white/30'}
              ${index < playerSequence.length ? 'opacity-100' : 'opacity-40'}
            `}
            style={{ backgroundColor: colors[colorIndex] }}
          />
        ))}
      </div>
      
      {/* Progress indicator */}
      <div className="flex justify-center gap-1 mb-4">
        {pattern.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full
              ${index < playerSequence.length 
                ? (playerSequence[index] === pattern[index] ? 'bg-green-400' : 'bg-red-400')
                : 'bg-white/30'
              }
            `}
          />
        ))}
      </div>
      
      {/* Status text */}
      <div className="text-sm text-gray-300">
        {isShowing ? 'Memorize the pattern...' : `Progress: ${playerSequence.length}/${pattern.length}`}
      </div>
    </div>
  );
}
