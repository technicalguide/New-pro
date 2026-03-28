import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShow(false)}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-drp-maroon rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl border border-drp-red/30"
          >
            <button 
              onClick={() => setShow(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 text-center">
              <h3 className="font-display text-4xl md:text-5xl uppercase mb-4 text-drp-white">Leaving so soon?</h3>
              <p className="text-white/80 mb-8">
                You're about to miss out on 15% off your first 12-pack. Don't let the mystery fade.
              </p>
              
              <button 
                onClick={() => setShow(false)}
                className="w-full bg-white text-drp-maroon px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-drp-black hover:text-white transition-all mb-4"
              >
                Claim 15% Off
              </button>
              
              <button 
                onClick={() => setShow(false)}
                className="text-sm text-white/50 hover:text-white uppercase tracking-wider underline underline-offset-4"
              >
                No thanks, I prefer boring soda
              </button>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-drp-red rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
