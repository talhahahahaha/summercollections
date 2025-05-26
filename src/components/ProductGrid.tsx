import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import QuickView from './QuickView';
import { products } from '../data/products';

interface ProductGridProps {
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  title = "Summer Essentials", 
  subtitle = "Discover our latest arrivals for the perfect summer wardrobe" 
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProducts(products);
    } else if (activeFilter === 'featured') {
      setFilteredProducts(products.filter(product => product.isFeatured));
    } else if (activeFilter === 'new') {
      setFilteredProducts(products.filter(product => product.isNew));
    } else {
      setFilteredProducts(products.filter(product => product.category === activeFilter));
    }
  }, [activeFilter]);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
  };

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'featured', name: 'Featured' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'swimwear', name: 'Swimwear' },
    { id: 'accessories', name: 'Accessories' },
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={handleQuickView} 
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <QuickView 
          product={selectedProduct} 
          isOpen={isQuickViewOpen} 
          onClose={closeQuickView} 
        />
      )}
    </section>
  );
};

export default ProductGrid;