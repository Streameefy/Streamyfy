import React from 'react';
import { PlayerPlan } from '../types';
import { CreditCardIcon } from './icons';

interface PlayerPricingProps {
  players: PlayerPlan[];
}

const PlayerPricing: React.FC<PlayerPricingProps> = ({ players }) => {
  return (
    <section id="player-pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get a Compatible Player</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our service works with many popular IPTV players. Here are some of our recommendations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 flex flex-col">
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{player.name}</h3>
                     <div className="flex items-center space-x-2 text-orange-400">
                        <CreditCardIcon className="w-6 h-6" />
                        <span className="font-bold text-lg text-white">
                            {player.price > 0 ? `$${player.price.toFixed(2)}` : 'Free'}
                        </span>
                    </div>
                </div>

                <p className="text-gray-400 mb-6">{player.description}</p>
                
                <div className="mb-6">
                    <h4 className="font-semibold text-gray-300 mb-2">Supported Devices:</h4>
                    <div className="flex flex-wrap gap-2">
                        {player.devices.map(device => (
                            <span key={device} className="bg-gray-700 text-orange-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                {device}
                            </span>
                        ))}
                    </div>
                </div>
              </div>

              <button className="w-full mt-auto py-2.5 px-4 bg-gray-700 text-white font-bold rounded-lg hover:bg-orange-900 hover:text-orange-200 transition-all duration-300 ease-in-out">
                {player.price > 0 ? 'Purchase Player' : 'Download Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayerPricing;
