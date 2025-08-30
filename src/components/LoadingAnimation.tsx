import React from 'react';
import { Brain, Zap, BookOpen } from 'lucide-react';

export function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="flex space-x-4 mb-6">
          <Brain className="w-8 h-8 text-blue-500 animate-bounce" />
          <Zap className="w-8 h-8 text-green-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
          <BookOpen className="w-8 h-8 text-blue-600 animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
      <p className="text-lg text-gray-600 animate-pulse">Rav is thinking...</p>
      <div className="mt-4 flex space-x-2">
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
      </div>
    </div>
  );
}