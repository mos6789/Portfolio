import React, { useState } from 'react';
import { usePuzzleGame } from '../../lib/stores/usePuzzleGame';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

export function TutorialOverlay() {
  const { hideTutorial } = usePuzzleGame();
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Welcome to Pattern Master!",
      content: "This is an adaptive puzzle game that adjusts to your skill level. Let's learn how to play!"
    },
    {
      title: "Watch the Pattern",
      content: "First, you'll see a sequence of colors light up. Pay attention to the order - you'll need to remember it!"
    },
    {
      title: "Repeat the Pattern",
      content: "After the pattern is shown, click the colored buttons in the same order to complete the puzzle."
    },
    {
      title: "Adaptive Difficulty",
      content: "The game tracks your performance and adjusts the difficulty. Do well and patterns get longer and more complex!"
    },
    {
      title: "Scoring System",
      content: "Earn points for correct patterns and build streaks for bonus points. The faster you complete patterns, the more points you get!"
    },
    {
      title: "Ready to Play?",
      content: "That's all you need to know! The game will start easy and gradually challenge you more. Good luck!"
    }
  ];

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      hideTutorial();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-4 text-white border border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Tutorial</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={hideTutorial}
            className="text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            {tutorialSteps[currentStep].title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {tutorialSteps[currentStep].content}
          </p>
        </div>
        
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {tutorialSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
          >
            Previous
          </Button>
          
          <Button
            onClick={nextStep}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {currentStep === tutorialSteps.length - 1 ? 'Start Game' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}
