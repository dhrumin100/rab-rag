import React, { useState } from 'react';
import { Search, Lightbulb } from 'lucide-react';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export function SearchBox({ onSearch, isLoading }: SearchBoxProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto px-6 mb-12">
      <div className="relative">
        <Lightbulb className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-yellow-500 animate-pulse" />
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything about AI/ML... (e.g., What is gradient descent?)"
            className="w-full pl-16 pr-20 py-6 text-lg rounded-2xl border-2 border-blue-200 bg-white/80 backdrop-blur-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl placeholder-gray-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-xl hover:from-blue-600 hover:to-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <Search className={`w-6 h-6 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </form>
      </div>
      
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {['What is neural network?', 'Explain backpropagation', 'Types of machine learning'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => !isLoading && onSearch(suggestion)}
            className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 border border-gray-200 hover:border-blue-300"
            disabled={isLoading}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}