import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-drp-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="font-display text-3xl tracking-wider text-drp-red">DR PEPPER</div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
          <a href="#flavors" className="hover:text-drp-red transition-colors">23 Flavors</a>
          <a href="#products" className="hover:text-drp-red transition-colors">Shop</a>
          <a href="#lifestyle" className="hover:text-drp-red transition-colors">Culture</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center space-x-2 bg-drp-red hover:bg-white hover:text-drp-red transition-colors px-6 py-2 rounded-full font-bold uppercase text-sm tracking-wider">
            <span>Get It Now</span>
          </button>
          <button className="p-2 hover:text-drp-red transition-colors">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
