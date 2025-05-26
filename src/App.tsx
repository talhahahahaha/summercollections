import React from 'react';
import { WishlistProvider } from './context/WishlistContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <WishlistProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Categories />
          <ProductGrid />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </WishlistProvider>
  );
}

export default App;