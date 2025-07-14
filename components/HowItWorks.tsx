
import React from 'react';
import { SearchIcon, CreditCardIcon, PlayIcon } from './icons';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <SearchIcon />,
      title: "1. Find Your Movie",
      description: "Browse our extensive library or use the filters to find the perfect movie for your mood. Our collection is updated weekly."
    },
    {
      icon: <CreditCardIcon />,
      title: "2. Choose a Plan",
      description: "Select a flexible monthly subscription or a one-time purchase. We offer secure payment options through Stripe and PayPal."
    },
    {
      icon: <PlayIcon />,
      title: "3. Instant Access",
      description: "After payment, you'll receive your secure IPTV access details instantly. Start watching on any compatible device right away."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 mt-16 bg-[#111111] rounded-lg shadow-inner shadow-black/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Getting started with Streameefy is simple. Follow these three easy steps to unlock a world of entertainment.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-orange-500/10 text-orange-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;