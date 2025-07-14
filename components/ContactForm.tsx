import React from 'react';
import { WhatsAppIcon, EmailIcon, PayPalIcon, StripeIcon, BankIcon, MobileWalletIcon } from './icons';

const PaymentOption: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 text-gray-300 text-center" title={label}>
    <div className="text-orange-400">{icon}</div>
    <span className="text-xs sm:text-sm font-semibold">{label}</span>
  </div>
);


const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#111111] rounded-lg shadow-inner shadow-black/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 md:gap-12 items-start">
          <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-400 mb-8">
              Have questions or need support? Reach out to us. We're here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="https://wa.me/1234567890" // Replace with your WhatsApp number
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
              <a 
                href="mailto:support@streameefy.com" // Replace with your email
                className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                <EmailIcon />
                Send an Email
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center md:text-left mb-4">Secure Payments</h3>
            <p className="text-gray-400 mb-6 text-center md:text-left">
              We partner with industry leaders and support local methods to ensure your payments are safe and secure.
            </p>
            <div className="space-y-6">
                {/* International Payments */}
                <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <h4 className="text-lg font-semibold text-orange-400 mb-4 text-center">International</h4>
                    <div className="flex items-center justify-center gap-8">
                        <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors" aria-label="Pay with PayPal">
                            <PayPalIcon />
                            <span className="font-semibold text-lg">PayPal</span>
                        </button>
                        <div className="h-8 w-px bg-gray-600"></div>
                        <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors" aria-label="Pay with Stripe">
                            <StripeIcon />
                            <span className="font-semibold text-lg">Stripe</span>
                        </button>
                    </div>
                </div>

                {/* Local Pakistani Payments */}
                <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <h4 className="text-lg font-semibold text-orange-400 mb-4 text-center">Local (Pakistan)</h4>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 justify-items-center">
                        <PaymentOption icon={<MobileWalletIcon />} label="JazzCash" />
                        <PaymentOption icon={<MobileWalletIcon />} label="EasyPaisa" />
                        <PaymentOption icon={<BankIcon />} label="Meezan" />
                        <PaymentOption icon={<BankIcon />} label="HBL" />
                        <PaymentOption icon={<BankIcon />} label="MCB" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;