import React from 'react';
import { Movie } from '../types';
import { ServerIcon, TagIcon } from './icons';

interface MovieCardProps {
  movie: Movie;
  isSuggested: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isSuggested }) => {
  const cardId = `movie-${movie.title.replace(/\s+/g, '-')}`;

  return (
    <div
      id={cardId}
      className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg group transition-all duration-300 ease-in-out transform hover:-translate-y-2
      ${isSuggested ? 'ring-4 ring-orange-500 ring-offset-2 ring-offset-black shadow-orange-500/50' : 'hover:shadow-orange-500/30'}`}
    >
      <div className="relative">
        <img
          src={movie.posterUrl}
          alt={`Poster for ${movie.title}`}
          className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-2xl font-bold text-white tracking-wide">{movie.title}</h3>
          <span className="text-sm font-semibold text-orange-300 bg-orange-900/60 px-2 py-1 rounded">{movie.genre}</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center space-x-2">
            <ServerIcon />
            <span>{movie.server}</span>
          </div>
          <div className="flex items-center space-x-2">
            <TagIcon />
            <span className="font-bold text-lg text-white">${movie.price.toFixed(2)}</span>
            <span className="text-xs text-gray-400">/{movie.priceType}</span>
          </div>
        </div>
        <button className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
          Get Access
        </button>
      </div>
    </div>
  );
};

export default MovieCard;