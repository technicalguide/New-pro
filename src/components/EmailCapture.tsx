import { motion } from 'motion/react';

export default function EmailCapture() {
  return (
    <section className="py-32 px-6 bg-drp-black relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-drp-red/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center glass-panel p-12 md:p-20 rounded-3xl border border-drp-red/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase mb-6">Unlock Secret <br/>Flavor Drops</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join the inner circle. Get early access to limited edition flavors, exclusive merch, and things we can't talk about publicly.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="flex-1 bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-drp-red transition-colors font-medium tracking-wide"
              required
            />
            <button type="submit" className="bg-drp-red text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-drp-red transition-all whitespace-nowrap">
              I'm In
            </button>
          </form>
          <p className="text-xs text-white/40 mt-6 uppercase tracking-wider">
            By joining, you agree to our mysterious terms and conditions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
