import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Movie, Filters } from './types';
import { MOVIES, GENRES, LANGUAGES, SERVERS, CHANNELS, OTT_PLATFORMS, IPTV_PLANS, PLAYER_PLANS } from './constants';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import FilterSidebar from './components/FilterSidebar';
import MovieGrid from './components/MovieGrid';
import ChannelLineup from './components/ChannelLineup';
import HowItWorks from './components/HowItWorks';
import IptvPricing from './components/IptvPricing';
import PlayerPricing from './components/PlayerPricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { MenuIcon } from './components/icons';
import WarrantyFAB from './components/WarrantyFAB';
import PolicyModal from './components/PolicyModal';
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import ReactPlugin from '@stagewise-plugins/react';

const App: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    genre: 'all',
    language: 'all',
    server: 'all',
    price: 100,
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [suggestedMovieTitle, setSuggestedMovieTitle] = useState<string | null>(null);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  const filteredMovies = useMemo(() => {
    return MOVIES.filter(movie => {
      const searchLower = filters.search.toLowerCase();
      return (
        (movie.title.toLowerCase().includes(searchLower) ||
         movie.server.toLowerCase().includes(searchLower)) &&
        (filters.genre === 'all' || movie.genre === filters.genre) &&
        (filters.language === 'all' || movie.languages.includes(filters.language)) &&
        (filters.server === 'all' || movie.server === filters.server) &&
        (movie.price <= filters.price)
      );
    });
  }, [filters]);

  const handleSuggestion = useCallback((title: string) => {
    setSuggestedMovieTitle(title);
    const suggestedMovieElement = document.getElementById(`movie-${title.replace(/\s+/g, '-')}`);
    if (suggestedMovieElement) {
      suggestedMovieElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => setSuggestedMovieTitle(null), 5000); // Highlight for 5 seconds
  }, []);

  return (
    <>
      <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
      <div className="bg-black text-gray-100 min-h-screen font-sans">
        <Header />
        <HeroCarousel movies={MOVIES} />
        <main className="container mx-auto px-4 py-8">
          <section id="movies" className="relative flex flex-col lg:flex-row gap-8">
            {/* Sidebar Toggle Button for Mobile */}
            <div className="lg:hidden flex justify-end mb-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md bg-gray-900 hover:bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <MenuIcon />
                <span className="ml-2">Filters</span>
              </button>
            </div>

            {/* Sidebar Backdrop */}
            {sidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/60 z-30 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              ></div>
            )}

            {/* Sidebar */}
            <aside
              className={`fixed lg:relative top-0 left-0 h-full lg:h-auto z-40 lg:z-auto w-4/5 sm:w-64 lg:w-1/4 bg-black/95 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none transition-transform transform ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } lg:translate-x-0 lg:block`}
            >
               <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                genres={GENRES}
                languages={LANGUAGES}
                servers={SERVERS}
                onClose={() => setSidebarOpen(false)}
              />
            </aside>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
               <AIAssistant onSuggestion={handleSuggestion} />
               <MovieGrid movies={filteredMovies} suggestedMovieTitle={suggestedMovieTitle} />
            </div>
          </section>

          <ChannelLineup channels={CHANNELS} ottPlatforms={OTT_PLATFORMS} />
          <HowItWorks />
          <IptvPricing plans={IPTV_PLANS} />
          <PlayerPricing players={PLAYER_PLANS} />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
        <WarrantyFAB onOpen={() => setIsPolicyModalOpen(true)} />
        <PolicyModal isOpen={isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} />
      </div>
    </>
  );
};

export default App;