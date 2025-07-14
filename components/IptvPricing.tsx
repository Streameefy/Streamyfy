
import React from 'react';
import { IptvPlan } from '../types';
import { CheckCircleIcon, CrownIcon } from './icons';

interface IptvPricingProps {
  plans: IptvPlan[];
}

const IptvPricing: React.FC<IptvPricingProps> = ({ plans }) => {
  return (
    <section id="iptv-pricing" className="py-20 bg-[#111111] rounded-lg shadow-inner shadow-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Choose Your IPTV Plan</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Simple, transparent pricing. Pick the plan that's right for you and start streaming today.
          </p>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mb-16 p-8 bg-gray-900/50 border border-gray-700 rounded-xl">
          <h3 className="text-2xl font-bold text-center text-orange-400 mb-8">Features Included in All Plans</h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-gray-300">
            {/* Column 1: Channel & Service Features */}
            <div className="space-y-3">
              <p>1️⃣ Television & 24Hours Channel</p>
              <p>2️⃣ Children & Sports Channel</p>
              <p>3️⃣ Movie & Series Channel</p>
              <p>4️⃣ Documentary & Religion Channel</p>
              <p>5️⃣ News & 🔞 Adult channel</p>
              <p>6️⃣ Much More Category's Channel Available</p>
              <p>7️⃣ All Over The world Available</p>
              <p>8️⃣ 24K Live Channels & 150k Vod</p>
            </div>
            {/* Column 2: Device Compatibility & Quality */}
            <div className="space-y-3">
              <p className="font-semibold text-white">We can Run Our Service On Any Device:</p>
              <p>1️⃣ Android TV & Box & Mobile</p>
              <p>2️⃣ Smart TV & Meg Box & STB</p>
              <p>3️⃣ Fire stick & Fire TV & Fire Cube</p>
              <p>4️⃣ iPhone & iPad & PC & Laptop</p>
              <div className="pt-4 space-y-2">
                <p className="font-bold text-white">♦𝗡𝗼 𝗰𝘂𝘁𝘁𝗶𝗻𝗴</p>
                <p className="font-bold text-white">♦𝗡𝗼 𝗳𝗿𝗲𝗲𝘇𝗶𝗻𝗴</p>
                <p className="italic text-orange-300">Having 𝐀𝐦𝐚𝐳𝐢𝐧𝐠 𝐒𝐞𝐫𝐯𝐞𝐫𝐬</p>
                <p className="italic text-orange-300">𝗘𝘃𝗲𝗿𝘆𝘁𝗵𝗶𝗻𝗴 Add at the Demand of Precious customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 flex flex-col transition-all duration-300 transform hover:-translate-y-2 relative ${
                plan.bestValue ? 'border-2 border-orange-500 shadow-orange-500/20' : 'border border-gray-700'
              }`}
            >
              {plan.bestValue && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase flex items-center gap-2">
                        <CrownIcon className="w-4 h-4" />
                        Best Value
                    </div>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
              <p className="text-center text-gray-400 mb-6">{plan.duration}</p>
              
              <div className="text-center mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">${plan.price.toFixed(2)}</span>
                <span className="text-gray-400">/{plan.duration.split(' ')[1]}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-auto py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                Get Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IptvPricing;
