import React from 'react';
import { BookOpen, Calculator, Lightbulb, ExternalLink, Clock } from 'lucide-react';

interface ResponseData {
  query: string;
  theory: string;
  math: string;
  insights: string;
  sources: Array<{ title: string; url: string; description: string; }>;
  timestamp: string;
}

interface ResponseDisplayProps {
  response: ResponseData | null;
}

export function ResponseDisplay({ response }: ResponseDisplayProps) {
  if (!response) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 animate-fadeIn">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 px-8 py-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {response.query}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Answered at {response.timestamp}</span>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Theory Section */}
          <section className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-200">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Theory & Concepts</h3>
            </div>
            <div className="pl-12">
              <p className="text-gray-700 leading-relaxed text-lg">{response.theory}</p>
            </div>
          </section>

          {/* Math Section */}
          <section className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-200">
                <Calculator className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Mathematical Foundation</h3>
            </div>
            <div className="pl-12">
              <p className="text-gray-700 leading-relaxed text-lg">{response.math}</p>
            </div>
          </section>

          {/* Insights Section */}
          <section className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-100 rounded-xl group-hover:bg-yellow-200 transition-colors duration-200">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Key Insights</h3>
            </div>
            <div className="pl-12">
              <p className="text-gray-700 leading-relaxed text-lg">{response.insights}</p>
            </div>
          </section>

          {/* Sources Section */}
          <section className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-200">
                <ExternalLink className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Further Reading</h3>
            </div>
            <div className="pl-12 grid md:grid-cols-2 gap-4">
              {response.sources.map((source, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group/source"
                >
                  <h4 className="font-semibold text-gray-800 mb-2 group-hover/source:text-blue-700 transition-colors">
                    {source.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{source.description}</p>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    Visit Source
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}