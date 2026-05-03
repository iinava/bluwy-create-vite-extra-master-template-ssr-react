import React from 'react';
import Hero from '../components/Hero';
import ProductGallery from '../components/ProductGallery';
import { AboutWhyUs } from '../components/Whyus';
// import Features from '../components/Features';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGallery />
      <AboutWhyUs />
      {/* <Features /> */}
      <ContactCTA />
    </>
  );
};

export default Home;
