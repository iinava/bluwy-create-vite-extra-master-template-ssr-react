import React from 'react';
import Hero from '../components/Hero';
import { AboutWhyUs } from '../components/Whyus';
import Features from '../components/Features';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutWhyUs />
      <Features />
      <ContactCTA />
    </>
  );
};

export default Home;
