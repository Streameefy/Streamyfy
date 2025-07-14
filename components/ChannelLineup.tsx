import React from 'react';
import { TvIcon } from './icons';

interface ChannelLineupProps {
  channels: string[];
  ottPlatforms: { name: string; logoUrl: string; }[];
}

const ChannelLineup: React.FC<ChannelLineupProps> = ({ channels, ottPlatforms }) => {
  const duplicatedPlatforms = [...ottPlatforms, ...ottPlatforms];

  return (
    <section id="channels" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-white">
                <TvIcon className="w-8 h-8 text-orange-400" />
                <span>Extensive Channel Lineup</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Enjoy a wide variety of live TV channels. From news and sports to movies and kids' entertainment, we've got you covered.
            </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-center">
            {channels.map((channel, index) => (
                <div 
                    key={index} 
                    className="bg-gray-800 border border-gray-700 text-gray-300 font-medium py-2 px-4 rounded-full transition-all duration-300 hover:bg-orange-900/50 hover:text-orange-300 hover:border-orange-700 cursor-default"
                >
                    {channel}
                </div>
            ))}
        </div>

        {/* OTT Platforms Section */}
        <div className="text-center mt-20">
             <h3 className="text-3xl font-bold mb-4 text-white">Popular OTT Platforms Included</h3>
             <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                Access your favorite streaming services, all in one place.
             </p>
             <div className="relative w-full overflow-hidden group py-4">
                <div className="absolute inset-y-0 left-0 z-10 w-16 sm:w-24 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
                <div className="absolute inset-y-0 right-0 z-10 w-16 sm:w-24 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
                <div className="flex animate-scroll-fast group-hover:[animation-play-state:paused]">
                    {duplicatedPlatforms.map(({name, logoUrl}, index) => (
                        <div key={`${name}-${index}`} className="flex-shrink-0 mx-4 sm:mx-6" title={name}>
                            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center p-4 transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10">
                                <img src={logoUrl} alt={`${name} logo`} className="max-h-12 sm:max-h-16 w-auto object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelLineup;