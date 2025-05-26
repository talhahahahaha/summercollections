import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.pexels.com/photos/1854691/pexels-photo-1854691.jpeg",
    title: "Summer 2025",
    subtitle: "Embrace the season with our new collection",
    description: "Discover lightweight fabrics, vibrant colors, and effortless styles perfect for warm days and balmy nights."
  },
  {
    image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg",
    title: "Coastal Breeze",
    subtitle: "Inspired by Mediterranean summers",
    description: "Light linens and flowing silhouettes that capture the essence of seaside living."
  },
  {
    image: "https://images.pexels.com/photos/1374552/pexels-photo-1374552.jpeg",
    title: "Urban Resort",
    subtitle: "City style meets beach comfort",
    description: "Versatile pieces that transition seamlessly from city streets to beachside retreats."
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="relative h-screen-90 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl text-white">
                <h1 className={`text-5xl md:text-7xl font-serif font-light mb-4 opacity-0 animate-slideIn ${
                  currentSlide === index ? 'opacity-100' : ''
                }`}>
                  {slide.title.split(' ').map((word, i) => (
                    <span key={i} className={i === 1 ? 'font-medium' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-2xl md:text-3xl font-serif font-light mb-6 leading-relaxed text-shadow-md">
                  {slide.subtitle}
                </p>
                <p className="mb-8 text-gray-200 leading-relaxed max-w-lg text-balance">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">
                    Shop Women
                  </button>
                  <button className="btn-outline">
                    Shop Men
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-amber-500' : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;