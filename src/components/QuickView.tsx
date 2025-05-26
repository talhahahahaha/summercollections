import React, { useState, useEffect } from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface QuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const QuickView: React.FC<QuickViewProps> = ({ product, isOpen, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex">
          {/* Product Image */}
          <div className="w-full md:w-1/2 p-4">
            <div className="relative aspect-h-4 aspect-w-3 rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="w-full md:w-1/2 p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-medium text-gray-900">{product.name}</h2>
                <p className="text-xl text-gray-600 mt-1">${product.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`relative w-8 h-8 rounded-full border ${
                      selectedColor === color 
                        ? 'border-amber-500 ring-2 ring-amber-500 ring-opacity-50' 
                        : 'border-gray-300'
                    }`}
                    title={color}
                  >
                    <span className="sr-only">{color}</span>
                    <span 
                      className="absolute inset-1 rounded-full"
                      style={{
                        backgroundColor: 
                          color.toLowerCase() === 'natural' ? '#e5d3b3' :
                          color.toLowerCase() === 'multicolor' ? 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)' :
                          color.toLowerCase()
                      }}
                    ></span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <button className="text-sm text-amber-600 hover:text-amber-500">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size 
                        ? 'border-amber-500 bg-amber-50 text-amber-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="flex space-x-4">
                <button
                  className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  <span>Add to Bag</span>
                </button>
                <button
                  onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id)}
                  className={`px-4 py-3 rounded-lg border transition-colors ${
                    inWishlist 
                      ? 'bg-gray-100 text-amber-600 border-gray-200' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart className="h-5 w-5" fill={inWishlist ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;