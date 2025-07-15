
import React, { useState, useCallback } from 'react';
import { suggestMovie } from '../services/geminiService';
import { MOVIES } from '../constants';
import { LightBulbIcon } from './icons';

interface AIAssistantProps {
  onSuggestion: (title: string) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onSuggestion }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Filter movie titles as user types
  const filteredMovies = prompt.trim()
    ? MOVIES.filter(m => m.title.toLowerCase().includes(prompt.toLowerCase()))
    : [];

  const handleSuggestion = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please describe a movie you want to watch.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuggestion(null);
    try {
      const movieTitles = MOVIES.map(m => m.title);
      const suggestedTitle = await suggestMovie(prompt, movieTitles);
      setSuggestion(suggestedTitle);
      if (suggestedTitle && suggestedTitle !== 'No Match Found') {
        onSuggestion(suggestedTitle);
        // setPrompt(''); // Don't clear prompt so user can see what they typed
      } else if (suggestedTitle === 'No Match Found') {
        setError("Sorry, I couldn't find a matching movie in our catalog.");
      }
    } catch (e) {
      console.error(e);
      setError('An error occurred while getting a suggestion. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, onSuggestion]);

  // Handle dropdown selection
  const handleDropdownSelect = (title: string) => {
    setPrompt(title);
    setShowDropdown(false);
  };

  return (
    <div className="mb-8 p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-700 shadow-lg relative">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 text-orange-400 mt-1">
          <LightBulbIcon />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Can't Decide? Let AI Help!</h3>
          <p className="text-gray-400 mt-1">Describe a movie you're in the mood for, or start typing a movie name. Our AI will find the best match from our catalog.</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row gap-2 relative">
        <div className="w-full relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
              setShowDropdown(true);
            }}
            placeholder="e.g., a funny space movie with robots or type a movie name"
            disabled={isLoading}
            className="flex-grow w-full bg-gray-700 border border-gray-600 rounded-md p-2.5 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition disabled:opacity-50"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setShowDropdown(false);
                handleSuggestion();
              }
            }}
            onFocus={() => setShowDropdown(true)}
            autoComplete="off"
          />
          {/* Dropdown for movie name suggestions */}
          {showDropdown && filteredMovies.length > 0 && (
            <ul className="absolute z-10 left-0 right-0 bg-gray-800 border border-gray-700 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
              {filteredMovies.map((movie) => (
                <li
                  key={movie.id}
                  className="px-4 py-2 cursor-pointer hover:bg-orange-500/20 text-white"
                  onClick={() => handleDropdownSelect(movie.title)}
                >
                  {movie.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={() => {
            setShowDropdown(false);
            handleSuggestion();
          }}
          disabled={isLoading}
          className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto"></div>
          ) : (
            'Suggest'
          )}
        </button>
      </div>
      {/* Show AI suggestion below input */}
      {suggestion && !error && (
        <div className="mt-4 p-3 bg-gray-800 border border-orange-500 rounded text-orange-300 text-center">
          <span className="font-semibold">AI Suggestion:</span> {suggestion}
        </div>
      )}
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default AIAssistant;