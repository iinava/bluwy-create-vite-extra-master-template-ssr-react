import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setLoading(false);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasLoaded', 'true');
  };

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <main className={`relative min-h-screen flex flex-col ${location.pathname === '/' ? 'bg-brand-brown' : 'bg-brand-light'}`}>
        <div className="flex-grow">
          <PageTransition key={location.pathname}>
            <Navbar />
            <Suspense fallback={<div className="h-screen bg-brand-light"></div>}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </PageTransition>
        </div>
        <Footer />
        <WhatsAppWidget />
      </main>
    </>
  );
}

export default App;
