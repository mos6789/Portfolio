import React from 'react';
import { usePuzzleGame } from '../../lib/stores/usePuzzleGame';

export function StatsDisplay() {
  const { 
    gamePhase, 
    totalPuzzlesSolved,
    averageTime,
    bestStreak,
    currentDifficulty 
  } = usePuzzleGame();

  if (gamePhase === 'menu' || gamePhase === 'tutorial') {
    return null;
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/20 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-8 text-white text-sm">
        <div className="text-center">
          <div className="opacity-80">Puzzles Solved</div>
          <div className="font-semibold">{totalPuzzlesSolved}</div>
        </div>
        
        <div className="text-center">
          <div className="opacity-80">Avg Time</div>
          <div className="font-semibold">{averageTime.toFixed(1)}s</div>
        </div>
        
        <div className="text-center">
          <div className="opacity-80">Best Streak</div>
          <div className="font-semibold">{bestStreak}</div>
        </div>
        
        <div className="text-center">
          <div className="opacity-80">Difficulty</div>
          <div className="font-semibold capitalize">{currentDifficulty}</div>
        </div>
      </div>
    </div>
  );
}
