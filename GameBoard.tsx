import React, { useEffect, useRef, useState } from 'react';
import { usePuzzleGame } from '../../lib/stores/usePuzzleGame';
import { useAudio } from '../../lib/stores/useAudio';
import { PatternDisplay } from './PatternDisplay';
import { Button } from '../ui/button';

export function GameBoard() {
  const {
    gamePhase,
    currentPuzzle,
    playerSequence,
    isShowingPattern,
    addToSequence,
    checkSequence,
    nextPuzzle,
    restartGame
  } = usePuzzleGame();
  
  const { playHit, playSuccess } = useAudio();
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout>();

  const handleColorClick = (colorIndex: number) => {
    if (gamePhase !== 'playing' || isShowingPattern) return;
    
    playHit();
    addToSequence(colorIndex);
    
    // Check if sequence is complete
    const newSequence = [...playerSequence, colorIndex];
    if (newSequence.length === currentPuzzle.pattern.length) {
      const isCorrect = checkSequence();
      setFeedback(isCorrect ? 'correct' : 'incorrect');
      
      if (isCorrect) {
        playSuccess();
        // Auto-advance to next puzzle after success
        setTimeout(() => {
          nextPuzzle();
          setFeedback(null);
        }, 1500);
      } else {
        // Show incorrect feedback then reset
        setTimeout(() => {
          setFeedback(null);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  if (gamePhase === 'menu') {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Pattern Master</h1>
        <p className="text-lg text-gray-300 mb-8">
          Test your memory with adaptive pattern puzzles
        </p>
        <Button 
          onClick={restartGame}
          className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          Start Game
        </Button>
      </div>
    );
  }

  if (gamePhase === 'ended') {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Game Over</h2>
        <p className="text-lg text-gray-300 mb-8">
          Great job! You've completed the puzzle sequence.
        </p>
        <Button 
          onClick={restartGame}
          className="px-8 py-4 text-lg bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
        >
          Play Again
        </Button>
      </div>
    );
  }

  if (!currentPuzzle) {
    return (
      <div className="text-center">
        <div className="text-white text-lg">Loading puzzle...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Pattern display area */}
      <PatternDisplay 
        pattern={currentPuzzle.pattern}
        isShowing={isShowingPattern}
        playerSequence={playerSequence}
      />
      
      {/* Color grid */}
      <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
        {currentPuzzle.colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorClick(index)}
            disabled={isShowingPattern}
            className={`
              w-20 h-20 rounded-xl border-4 border-white/20 
              transition-all duration-200 active:scale-95
              ${isShowingPattern ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}
              ${feedback === 'correct' ? 'ring-4 ring-green-400' : ''}
              ${feedback === 'incorrect' ? 'ring-4 ring-red-400' : ''}
            `}
            style={{ backgroundColor: color }}
            aria-label={`Color ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Feedback display */}
      {feedback && (
        <div className={`
          mt-6 text-center text-xl font-bold
          ${feedback === 'correct' ? 'text-green-400' : 'text-red-400'}
        `}>
          {feedback === 'correct' ? '✓ Correct!' : '✗ Try Again'}
        </div>
      )}
      
      {/* Instructions */}
      <div className="mt-6 text-center text-gray-300">
        {isShowingPattern ? (
          <p>Watch the pattern...</p>
        ) : (
          <p>Repeat the pattern by clicking the colors</p>
        )}
      </div>
    </div>
  );
}
