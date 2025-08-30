import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center py-12 px-6">
      <div className="flex items-center justify-center gap-3 mb-4">
        <GraduationCap className="w-12 h-12 text-blue-600" />
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 bg-clip-text text-transparent">
          Learn with Rav
        </h1>
      </div>
      <p className="text-xl md:text-2xl text-gray-600 font-medium">
        Your Personal AI Tutor for AI/ML Topics
      </p>
      <div className="mt-6 flex justify-center gap-8 opacity-60">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </header>
  );
}