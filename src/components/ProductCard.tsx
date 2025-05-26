import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div 
      className="group relative card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded-full shadow-lg">
            New
          </div>
        )}
        <div 
          className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        <div 
          className={`absolute bottom-0 left-0 right-0 flex justify-center p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="flex space-x-3">
            <button 
              onClick={() => onQuickView(product)}
              className="p-3 bg-white rounded-full text-gray-800 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Quick view"
            >
              <Eye className="h-5 w-5" />
            </button>
            <button 
              onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id)}
              className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                inWishlist 
                  ? 'bg-amber-500 text-white hover:bg-amber-600' 
                  : 'bg-white text-gray-800 hover:bg-amber-500 hover:text-white'
              }`}
              aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart className="h-5 w-5" fill={inWishlist ? 'currentColor' : 'none'} />
            </button>
            <button 
              className="p-3 bg-white rounded-full text-gray-800 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Add to bag"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 px-2">
        <h3 className="text-lg font-medium text-gray-900 hover:text-amber-600 transition-colors cursor-pointer">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-medium text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex space-x-1">
            {product.colors.map((color) => (
              <div
                key={color}
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{
                  backgroundColor: 
                    color.toLowerCase() === 'natural' ? '#e5d3b3' :
                    color.toLowerCase() === 'multicolor' ? 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)' :
                    color.toLowerCase()
                }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;