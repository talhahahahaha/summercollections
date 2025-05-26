import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">SummerLux</h3>
            <p className="mb-4 leading-relaxed">
              Curated summer collections for the modern wardrobe. Designed with comfort, style, and sustainability in mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Find a Store</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-amber-400 flex-shrink-0" />
                <span>123 Fashion Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-amber-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-amber-400 flex-shrink-0" />
                <span>hello@summerlux.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {year} SummerLux. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;