import React from 'react';
import { Brain, Atom, Cpu, Lightbulb, BookOpen, Target } from 'lucide-react';

export function DecorativeElements() {
  return (
    <>
      {/* Top decorative elements */}
      <div className="fixed top-20 left-10 opacity-20 animate-float">
        <Brain className="w-8 h-8 text-blue-400" />
      </div>
      <div className="fixed top-32 right-16 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Atom className="w-6 h-6 text-green-400" />
      </div>
      <div className="fixed top-60 left-20 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Cpu className="w-7 h-7 text-purple-400" />
      </div>

      {/* Bottom decorative elements */}
      <div className="fixed bottom-40 right-10 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <Lightbulb className="w-8 h-8 text-yellow-400" />
      </div>
      <div className="fixed bottom-60 left-16 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
        <BookOpen className="w-6 h-6 text-blue-400" />
      </div>
      <div className="fixed bottom-20 left-1/4 opacity-20 animate-float" style={{ animationDelay: '2.5s' }}>
        <Target className="w-7 h-7 text-green-400" />
      </div>
    </>
  );
}