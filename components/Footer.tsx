import React from 'react';
import { FilmIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <div className="flex justify-center items-center space-x-2 mb-2">
            <FilmIcon className="text-orange-500 h-6 w-6" />
            <span className="text-xl font-semibold text-gray-300">Streameefy</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Streameefy IPTV. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;