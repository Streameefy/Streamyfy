
import React from 'react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieGridProps {
  movies: Movie[];
  suggestedMovieTitle: string | null;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, suggestedMovieTitle }) => {
  if (movies.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-800/50 rounded-lg">
        <p className="text-xl text-gray-400">No movies match your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} isSuggested={movie.title === suggestedMovieTitle} />
      ))}
    </div>
  );
};

export default MovieGrid;
