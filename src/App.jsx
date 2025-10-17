import React, { useState } from 'react';
import { WalletConnectionProvider } from './components/WalletConnectionProvider.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { AccountInfoDisplay } from './components/AccountInfoDisplay.jsx';
import { Navbar } from './components/Navbar.jsx';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  const [targetPublicKey, setTargetPublicKey] = useState(null);

  const handleSearch = (publicKey) => {
    setTargetPublicKey(publicKey);
  };

  return (
    <WalletConnectionProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
        
        {/* Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center sm:text-left">
            Solana Account Explorer
          </h1>

          {/* Search Section */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-300">Search by Public Key</h2>
            <SearchBar onSearch={handleSearch} />
          </section>

          {/* Account Info Section */}
          <section className="mb-12">
            {targetPublicKey ? (
              <AccountInfoDisplay publicKeyStr={targetPublicKey} />
            ) : (
              <div className="text-gray-400 text-center py-12 border-2 border-dashed border-gray-700 rounded-lg">
                Enter a public key above to view account details.
              </div>
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Made With ❤️ By Riddhi
          </div>
        </footer>
      </div>
    </WalletConnectionProvider>
  );
}

export default App;
