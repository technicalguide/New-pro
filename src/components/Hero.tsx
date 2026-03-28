import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-liquid pt-20">
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-drp-black/40 via-transparent to-drp-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-7xl md:text-9xl uppercase leading-[0.85] mb-6">
            Not everyone <br />
            <span className="text-drp-red">gets it.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 opacity-90">
            That's the point. 23 mysterious flavors. One unmistakable identity. Are you in?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-drp-red text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-drp-red transition-all flex items-center justify-center gap-2 group">
              Stock Up Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto glass-panel px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Explore The Mystery
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Can Animation */}
      <motion.div 
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[300px] h-[600px] opacity-50 blur-sm pointer-events-none"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-drp-red to-drp-maroon rounded-full mix-blend-overlay" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}></div>
      </motion.div>
    </section>
  );
}
