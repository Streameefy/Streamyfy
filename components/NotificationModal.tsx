import React from 'react';
import { WhatsAppIcon, XIcon } from './icons';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 border border-orange-500/50 rounded-xl shadow-2xl shadow-orange-500/10 w-full max-w-md mx-auto p-6 md:p-8 relative transform animate-fade-in-scale"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close notification"
        >
          <XIcon />
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-4">
            Welcome to Streameefy!
          </h2>

          <p className="text-gray-300 mb-4">
            To purchase any movie, please contact us directly on WhatsApp.
          </p>

          <p className="text-gray-300 mb-6 border-t border-gray-700 pt-4 mt-4">
            Looking for the ultimate quality? We also have <strong className="font-bold text-orange-400">Paid 4K Links</strong> available for most titles!
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/1234567890" // Replace with your actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105"
            >
              <WhatsAppIcon />
              Contact on WhatsApp
            </a>
            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};