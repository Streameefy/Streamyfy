import React from 'react';
import { ShieldCheckIcon } from './icons';

interface WarrantyFABProps {
  onOpen: () => void;
}

const WarrantyFAB: React.FC<WarrantyFABProps> = ({ onOpen }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={onOpen}
        className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-black/50 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-500/50"
        aria-label="View Our Guarantee"
      >
        <ShieldCheckIcon className="w-8 h-8 text-white" />
      </button>
      <div className="absolute bottom-1/2 translate-y-1/2 right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Our Guarantee
      </div>
    </div>
  );
};

export default WarrantyFAB;
