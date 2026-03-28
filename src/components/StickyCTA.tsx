import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="glass-panel p-2 rounded-full flex items-center shadow-2xl shadow-drp-red/20 border border-drp-red/30">
            <div className="px-6 hidden sm:block">
              <span className="text-sm font-bold uppercase tracking-widest text-drp-white">Limited Stock</span>
            </div>
            <button className="bg-drp-red text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-drp-red transition-all flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
