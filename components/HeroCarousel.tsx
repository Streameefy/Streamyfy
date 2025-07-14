import React from 'react';
import { Movie } from '../types';

interface HeroCarouselProps {
  movies: Movie[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ movies }) => {
  // Duplicate movies for a seamless loop
  const duplicatedMovies = [...movies, ...movies];

  return (
    <section className="relative w-full group overflow-hidden py-12 bg-black/50" aria-label="Trending Movies">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black"></div>
        <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
          {duplicatedMovies.map((movie, index) => (
            <div key={`${movie.id}-${index}`} className="flex-shrink-0 mx-2 sm:mx-4">
              <img
                src={movie.posterUrl}
                alt={`Poster for ${movie.title}`}
                className="w-40 h-64 sm:w-48 sm:h-72 object-cover rounded-lg shadow-lg shadow-black/40 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-orange-500/30"
              />
            </div>
          ))}
        </div>
    </section>
  );
};

export default HeroCarousel;