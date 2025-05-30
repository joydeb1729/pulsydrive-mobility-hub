
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Compare from '../components/Compare';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <Compare />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
