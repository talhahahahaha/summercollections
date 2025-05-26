import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsSubmitted(true);
        setIsAnimating(false);
      }, 1500);
    }
  };

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Join Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Subscribe to our newsletter for early access to new collections, seasonal styling tips, and exclusive offers.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You for Subscribing!</h3>
              <p className="text-gray-600">
                You're now part of our community. Watch your inbox for summer style inspiration and exclusive offers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
              </div>
              <div className="md:self-end">
                <button
                  type="submit"
                  className={`w-full md:w-auto px-6 py-3 bg-amber-500 text-white rounded-lg font-medium flex items-center justify-center hover:bg-amber-600 transition-all ${
                    isAnimating ? 'animate-pulse' : ''
                  }`}
                  disabled={isAnimating}
                >
                  <span className="mr-2">Subscribe</span>
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;