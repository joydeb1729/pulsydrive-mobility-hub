
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Affordable Smart Mobility for Everyone",
      subtitle: "Empowering independence with innovative wheelchair technology",
      image: "photo-1581091226825-a6a2a5aee158",
      cta: "Explore Products"
    },
    {
      title: "PulsyGo - Your Smart Companion",
      subtitle: "Fully motorized with joystick, voice & app control",
      image: "photo-1518495973542-4542c06a5843",
      cta: "Learn More"
    },
    {
      title: "Solar Powered Innovation",
      subtitle: "Sustainable mobility with solar charging technology",
      image: "photo-1581090464777-f3220bbe1b8b",
      cta: "Discover Features"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 transition-all duration-1000">
        <img
          src={`https://images.unsplash.com/${slides[currentSlide].image}?auto=format&fit=crop&w=1920&q=80`}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          {slides[currentSlide].subtitle}
        </p>
        <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button 
            size="lg" 
            className="bg-pulsy-blue hover:bg-pulsy-blue-light text-white px-8 py-3 text-lg"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {slides[currentSlide].cta}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pulsy-blue-light transition-colors z-20"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pulsy-blue-light transition-colors z-20"
      >
        <ChevronRight size={40} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
