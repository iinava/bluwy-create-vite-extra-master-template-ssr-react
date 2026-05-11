import React from 'react';
import Hero from '../components/Hero';
import ProductGallery from '../components/ProductGallery';
import TechnicalFeatures from '../components/TechnicalFeatures';
import ContactCTA from '../components/ContactCTA';
import { DetailedStats } from '../components/StatsSection';

const Home = () => {
  return (
    <>
      <Hero />
      <DetailedStats />
      <ProductGallery />
      <TechnicalFeatures />
      <ContactCTA />
    </>
  );
};

export default Home;
