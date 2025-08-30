import React, { useState, useEffect } from 'react';
import { Search, Lightbulb } from 'lucide-react';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export function SearchBox({ onSearch, isLoading }: SearchBoxProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Set authorization token for the search widget
    const searchWidget = document.querySelector('gen-search-widget');
    if (searchWidget) {
      // Note: Replace with actual JWT or OAuth token from your backend
      (searchWidget as any).authToken = "<JWT or OAuth token provided by your backend>";
    }
  }, []);

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
        
        {/* Vertex AI Search Widget */}
        <gen-search-widget
          configId="573c0dc5-a32a-4a6c-b7b4-948379f4402d"
          triggerId="searchWidgetTrigger">
        </gen-search-widget>
        
        {/* Styled trigger input that opens the widget */}
        <div className="relative">
          <input
            id="searchWidgetTrigger"
            type="text"
            placeholder="Ask me anything about AI/ML... (e.g., What is gradient descent?)"
            className="w-full pl-16 pr-20 py-6 text-lg rounded-2xl border-2 border-blue-200 bg-white/80 backdrop-blur-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl placeholder-gray-500 cursor-pointer"
            readOnly
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 pointer-events-none">
            <Search className="w-6 h-6" />
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {['What is neural network?', 'Explain backpropagation', 'Types of machine learning'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              const triggerInput = document.getElementById('searchWidgetTrigger') as HTMLInputElement;
              if (triggerInput) {
                triggerInput.value = suggestion;
                triggerInput.click();
              }
            }}
            className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 border border-gray-200 hover:border-blue-300"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}