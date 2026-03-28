import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, ArrowRight, X, Play, ChevronRight, Star } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import MysterySection from './components/MysterySection';
import ProductShowcase from './components/ProductShowcase';
import LifestyleSection from './components/LifestyleSection';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App() {
  return (
    <div className="min-h-screen bg-drp-black text-drp-white selection:bg-drp-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <MysterySection />
        <ProductShowcase />
        <LifestyleSection />
        <EmailCapture />
      </main>
      <Footer />
      <StickyCTA />
      <ExitIntentPopup />
    </div>
  );
}
