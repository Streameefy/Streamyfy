import React from 'react';
import { XIcon, ShieldCheckIcon } from './icons';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 border border-orange-500/50 rounded-xl shadow-2xl shadow-orange-500/10 w-full max-w-lg mx-auto p-6 md:p-8 relative transform animate-fade-in-scale"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close policy modal"
        >
          <XIcon />
        </button>

        <div className="text-center">
            <div className="flex justify-center mb-4">
                <ShieldCheckIcon className="w-12 h-12 text-orange-400"/>
            </div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-4">
                Our Service Guarantee & Policy
            </h2>

            <div className="text-left space-y-4 text-gray-300 my-6">
                <p>We stand by the quality of our service. Here are our commitments to you:</p>
                <ul className="list-disc list-inside space-y-3 pl-2">
                    <li><strong className="text-white">24-Hour Service Availability:</strong> Our support tools and services are guaranteed to be available 24 hours a day.</li>
                    <li><strong className="text-white">Standard Warranty (26 Days):</strong> For most plans, we provide a 26-day service warranty from the date of purchase.</li>
                    <li><strong className="text-white">Extended Warranty (11 Months):</strong> If you purchase a larger, long-term plan, your warranty is extended to 11 months, ensuring peace of mind.</li>
                </ul>
                <p className="pt-2 text-sm text-gray-400 italic">This policy ensures that you receive a reliable and consistent streaming experience. For any issues, our support team is ready to assist.</p>
            </div>

            <button
                onClick={onClose}
                className="w-full sm:w-1/2 mx-auto py-3 px-6 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
                Understood
            </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
