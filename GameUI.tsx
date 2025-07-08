import React from 'react';
import { usePuzzleGame } from '../../lib/stores/usePuzzleGame';
import { useAudio } from '../../lib/stores/useAudio';
import { Button } from '../ui/button';
import { Volume2, VolumeX, RotateCcw, HelpCircle } from 'lucide-react';

export function GameUI() {
  const { 
    gamePhase, 
    currentLevel, 
    score, 
    streak,
    restartGame,
    showTutorial 
  } = usePuzzleGame();
  
  const { isMuted, toggleMute } = useAudio();

  if (gamePhase === 'menu') {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 right-0 p-4 bg-black/20 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {/* Left side - Game info */}
        <div className="flex items-center gap-6">
          <div className="text-white">
            <div className="text-sm opacity-80">Level</div>
            <div className="text-xl font-bold">{currentLevel}</div>
          </div>
          <div className="text-white">
            <div className="text-sm opacity-80">Score</div>
            <div className="text-xl font-bold">{score}</div>
          </div>
          <div className="text-white">
            <div className="text-sm opacity-80">Streak</div>
            <div className="text-xl font-bold">{streak}</div>
          </div>
        </div>
        
        {/* Right side - Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={showTutorial}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <HelpCircle className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMute}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={restartGame}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
