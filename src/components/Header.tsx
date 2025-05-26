import React, { useState, useEffect } from 'react';
import { Sun, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { wishlist } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-xl font-serif font-medium">SummerLux</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-amber-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#categories"
              className="font-medium text-gray-800 hover:text-amber-500 transition-colors"
            >
              Categories
            </a>
            <a
              href="#products"
              className="font-medium text-gray-800 hover:text-amber-500 transition-colors"
            >
              Shop
            </a>
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-amber-500 transition-colors"
            >
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="relative p-2 text-gray-800 hover:text-amber-500 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button
              className="p-2 text-gray-800 hover:text-amber-500 transition-colors"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button
              className="md:hidden p-2 text-gray-800"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <Sun className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-serif font-medium">SummerLux</span>
            </div>
            <button onClick={toggleMenu} aria-label="Close Menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <a
              href="#"
              className="font-medium text-xl text-gray-800 hover:text-amber-500 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#categories"
              className="font-medium text-xl text-gray-800 hover:text-amber-500 transition-colors"
              onClick={toggleMenu}
            >
              Categories
            </a>
            <a
              href="#products"
              className="font-medium text-xl text-gray-800 hover:text-amber-500 transition-colors"
              onClick={toggleMenu}
            >
              Shop
            </a>
            <a
              href="#"
              className="font-medium text-xl text-gray-800 hover:text-amber-500 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;