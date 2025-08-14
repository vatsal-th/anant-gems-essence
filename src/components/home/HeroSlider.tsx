import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import heroJewelry1 from '@/assets/hero-jewelry-1.jpg';
import heroJewelry2 from '@/assets/hero-jewelry-2.jpg';
import heroJewelry3 from '@/assets/hero-jewelry-3.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: heroJewelry1,
      title: "Crafted to Last",
      subtitle: "Designed to Dazzle",
      description: "Discover our signature collection of timeless elegance",
      cta: "Explore Collection"
    },
    {
      id: 2,
      image: heroJewelry2,
      title: "Infinite Elegance",
      subtitle: "Timeless Beauty",
      description: "Each piece tells a story of exceptional craftsmanship",
      cta: "View Craftsmanship"
    },
    {
      id: 3,
      image: heroJewelry3,
      title: "Exceptional Moments",
      subtitle: "Extraordinary Jewelry",
      description: "Celebrate life's precious moments with our exquisite designs",
      cta: "Book Consultation"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl mx-auto">
              {/* Sparkle Effect */}
              <div className="relative mb-8">
                <Sparkles className="absolute -top-4 -left-4 h-6 w-6 text-white/60 animate-sparkle" />
                <Sparkles className="absolute -top-2 right-8 h-4 w-4 text-white/40 animate-sparkle" style={{ animationDelay: '1s' }} />
                <Sparkles className="absolute top-6 -right-6 h-5 w-5 text-white/50 animate-sparkle" style={{ animationDelay: '2s' }} />
                
                <div className="tagline text-white/90 mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  Infinite Elegance
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <span className="block">{slide.title}</span>
                <span className="block text-white/80">{slide.subtitle}</span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                {slide.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                <Button 
                  variant="default"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto"
                >
                  {slide.cta}
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default HeroSlider;