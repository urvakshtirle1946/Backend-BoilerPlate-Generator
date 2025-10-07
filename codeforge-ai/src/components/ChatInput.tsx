import React, { useState } from 'react';

interface ChatInputProps {
  projectDescription: string;
  onDescriptionChange: (description: string) => void;
  onGenerate: () => void;
  isDisabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  projectDescription,
  onDescriptionChange,
  onGenerate,
  isDisabled,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isDisabled && projectDescription.trim()) {
        onGenerate();
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className={`relative transition-all duration-200 ${
            isFocused ? 'scale-105' : 'scale-100'
          }`}>
            <textarea
              value={projectDescription}
              onChange={(e) => onDescriptionChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyPress={handleKeyPress}
              placeholder="Describe your project idea... (e.g., 'A social media app for pet owners with photo sharing and matching features')"
              className="w-full p-4 pr-12 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
              rows={3}
              disabled={isDisabled}
            />
            <div className="absolute right-3 top-3 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>
          
          {isDisabled && (
            <p className="text-sm text-gray-500 mt-2 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Please select a project type and template first
            </p>
          )}
        </div>
        
        <button
          onClick={onGenerate}
          disabled={isDisabled || !projectDescription.trim()}
          className={`px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center min-w-[140px] ${
            isDisabled || !projectDescription.trim()
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105 shadow-lg hover:shadow-xl'
          }`}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Generate
        </button>
      </div>
      
      <div className="mt-3 text-center">
        <p className="text-sm text-gray-500">
          Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to generate or click the button
        </p>
      </div>
    </div>
  );
};

export default ChatInput;