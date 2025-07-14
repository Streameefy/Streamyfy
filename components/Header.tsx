import React, { useState } from 'react';
import { MenuIcon, XIcon, FilmIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '#movies', text: 'Movies' },
    { href: '#channels', text: 'Channels' },
    { href: '#how-it-works', text: 'How It Works' },
    { href: '#iptv-pricing', text: 'IPTV Prices' },
    { href: '#player-pricing', text: 'Player Prices' },
    { href: '#testimonials', text: 'Testimonials' },
    { href: '#contact', text: 'Contact' },
  ];

  const notificationText = "To purchase any movie, please contact us on WhatsApp. Premium 4K links available for the ultimate quality!";

  return (
    <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-black/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-2 text-2xl font-bold">
            <FilmIcon className="text-orange-500 h-8 w-8" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500">
              Streameefy
            </span>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                {link.text}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-orange-400">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black pb-4">
          <nav className="flex flex-col items-center space-y-4">
             {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Scrolling Notification Marquee */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-scroll-header py-2">
            <span className="mx-8">{notificationText}</span>
            <span className="mx-8">{notificationText}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;