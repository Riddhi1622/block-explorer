import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

export const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Left: App title */}
        <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">
          Solana Explorer
        </h1>

        {/* Right: Wallet button */}
        <div className="flex items-center space-x-4">
          {/* Optional: Add navigation links */}
          <a 
            href="#explore" 
            className="hidden md:inline-block text-white hover:text-gray-200 font-medium transition-colors"
          >
            Explore
          </a>
          <a 
            href="#about" 
            className="hidden md:inline-block text-white hover:text-gray-200 font-medium transition-colors"
          >
            About
          </a>

          {/* Wallet Button */}
          <WalletMultiButton className="!bg-white !text-gray-800 !px-4 !py-2 !rounded-xl !shadow-md !hover:!bg-gray-100 transition-all" />
        </div>
      </div>
    </nav>
  );
};

