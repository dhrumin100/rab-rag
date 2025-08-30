import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBox } from './components/SearchBox';
import { ResponseDisplay } from './components/ResponseDisplay';
import { LoadingAnimation } from './components/LoadingAnimation';
import { DecorativeElements } from './components/DecorativeElements';
import { getMockResponse, type ResponseData } from './data/mockResponses';

function App() {
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setResponse(null);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));

    const mockResponse = getMockResponse(query);
    setResponse(mockResponse);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-x-hidden">
      {/* Decorative background elements */}
      <DecorativeElements />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        
        <main className="pb-20">
          <SearchBox onSearch={handleSearch} isLoading={isLoading} />
          
          {isLoading && <LoadingAnimation />}
          
          {response && !isLoading && (
            <ResponseDisplay response={response} />
          )}
          
          {!response && !isLoading && (
            <div className="text-center px-6">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Ready to explore AI/ML together?
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ask me anything about artificial intelligence, machine learning, deep learning, 
                  or related topics. I'll provide structured explanations with theory, mathematics, 
                  key insights, and curated sources to deepen your understanding.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-6 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <p className="text-gray-500">
          Built with curiosity and powered by AI • Learn, explore, discover
        </p>
      </footer>
    </div>
  );
}

export default App;