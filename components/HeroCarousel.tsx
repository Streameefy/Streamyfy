import React from 'react';
import { Movie } from '../types';

interface HeroCarouselProps {
  movies: Movie[];
}

// Add this movie at the top of the carousel data
const goldenBoyMovie = {
  id: 'golden-boy',
  title: 'Golden Boy',
  posterUrl: 'https://www.themoviedb.org/t/p/original/6tEJQquT0F6Fz1dL2b7l9yQqviA.jpg', // Use the actual image URL if available
  genre: 'Drama',
  languages: ['Turkish'],
  server: 'Alpha-S1',
  price: 0,
  priceType: 'monthly',
};

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
              <div className="mt-2 text-center text-lg font-semibold text-white drop-shadow">{movie.title}</div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default HeroCarousel;