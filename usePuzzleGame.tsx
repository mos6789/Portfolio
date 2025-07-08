import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { generatePuzzle, type Puzzle } from '../puzzleGenerator';
import { DifficultyManager } from '../difficultyManager';
import { PerformanceTracker } from '../performanceTracker';

export type GamePhase = 'menu' | 'tutorial' | 'playing' | 'ended';

interface PuzzleGameState {
  // Game state
  gamePhase: GamePhase;
  currentPuzzle: Puzzle | null;
  playerSequence: number[];
  isShowingPattern: boolean;
  
  // Progress tracking
  currentLevel: number;
  score: number;
  streak: number;
  bestStreak: number;
  totalPuzzlesSolved: number;
  averageTime: number;
  currentDifficulty: string;
  
  // Timing
  puzzleStartTime: number;
  
  // Managers
  difficultyManager: DifficultyManager;
  performanceTracker: PerformanceTracker;
  
  // Actions
  initializeGame: () => void;
  restartGame: () => void;
  nextPuzzle: () => void;
  addToSequence: (colorIndex: number) => void;
  checkSequence: () => boolean;
  showTutorial: () => void;
  hideTutorial: () => void;
}

export const usePuzzleGame = create<PuzzleGameState>()(
  subscribeWithSelector((set, get) => ({
    // Initial state
    gamePhase: 'menu',
    currentPuzzle: null,
    playerSequence: [],
    isShowingPattern: false,
    
    currentLevel: 1,
    score: 0,
    streak: 0,
    bestStreak: 0,
    totalPuzzlesSolved: 0,
    averageTime: 0,
    currentDifficulty: 'easy',
    
    puzzleStartTime: 0,
    
    difficultyManager: new DifficultyManager(),
    performanceTracker: new PerformanceTracker(),
    
    initializeGame: () => {
      const { difficultyManager } = get();
      const puzzle = generatePuzzle(difficultyManager.getCurrentDifficulty());
      
      set({
        gamePhase: 'playing',
        currentPuzzle: puzzle,
        playerSequence: [],
        isShowingPattern: true,
        puzzleStartTime: Date.now(),
        currentDifficulty: difficultyManager.getCurrentDifficulty().name
      });
      
      // Stop showing pattern after delay
      setTimeout(() => {
        set({ isShowingPattern: false });
      }, puzzle.pattern.length * 600 + 1000);
    },
    
    restartGame: () => {
      const difficultyManager = new DifficultyManager();
      const performanceTracker = new PerformanceTracker();
      
      set({
        gamePhase: 'menu',
        currentPuzzle: null,
        playerSequence: [],
        isShowingPattern: false,
        currentLevel: 1,
        score: 0,
        streak: 0,
        puzzleStartTime: 0,
        difficultyManager,
        performanceTracker,
        currentDifficulty: difficultyManager.getCurrentDifficulty().name
      });
      
      // Auto-start the game
      setTimeout(() => {
        get().initializeGame();
      }, 100);
    },
    
    nextPuzzle: () => {
      const { 
        difficultyManager, 
        performanceTracker, 
        currentLevel, 
        puzzleStartTime,
        totalPuzzlesSolved,
        bestStreak,
        streak
      } = get();
      
      // Record completion time
      const completionTime = (Date.now() - puzzleStartTime) / 1000;
      performanceTracker.recordCompletion(completionTime, true);
      
      // Update difficulty based on performance
      difficultyManager.updateDifficulty(performanceTracker.getPerformanceMetrics());
      
      // Generate next puzzle
      const puzzle = generatePuzzle(difficultyManager.getCurrentDifficulty());
      
      const newStreak = streak + 1;
      const newTotalSolved = totalPuzzlesSolved + 1;
      const newBestStreak = Math.max(bestStreak, newStreak);
      
      set({
        currentPuzzle: puzzle,
        playerSequence: [],
        isShowingPattern: true,
        currentLevel: currentLevel + 1,
        score: get().score + Math.floor(100 * (1 + newStreak * 0.1) / Math.max(completionTime, 1)),
        streak: newStreak,
        bestStreak: newBestStreak,
        totalPuzzlesSolved: newTotalSolved,
        averageTime: performanceTracker.getAverageTime(),
        puzzleStartTime: Date.now(),
        currentDifficulty: difficultyManager.getCurrentDifficulty().name
      });
      
      // Stop showing pattern after delay
      setTimeout(() => {
        set({ isShowingPattern: false });
      }, puzzle.pattern.length * 600 + 1000);
    },
    
    addToSequence: (colorIndex: number) => {
      const { playerSequence } = get();
      set({
        playerSequence: [...playerSequence, colorIndex]
      });
    },
    
    checkSequence: () => {
      const { currentPuzzle, playerSequence, performanceTracker, puzzleStartTime } = get();
      
      if (!currentPuzzle) return false;
      
      const isCorrect = playerSequence.length === currentPuzzle.pattern.length &&
        playerSequence.every((color, index) => color === currentPuzzle.pattern[index]);
      
      if (!isCorrect) {
        // Record failed attempt
        const completionTime = (Date.now() - puzzleStartTime) / 1000;
        performanceTracker.recordCompletion(completionTime, false);
        
        // Reset sequence and streak
        set({
          playerSequence: [],
          streak: 0
        });
      }
      
      return isCorrect;
    },
    
    showTutorial: () => {
      set({ gamePhase: 'tutorial' });
    },
    
    hideTutorial: () => {
      set({ gamePhase: 'playing' });
    }
  }))
);
