import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function LifestyleSection() {
  return (
    <section id="lifestyle" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-drp-black via-drp-black/80 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-6 leading-none">
              Fuel For The <br/>
              <span className="text-drp-red">Unconventional</span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Whether you're grinding ranks at 3 AM, dropping your next track, or just refusing to blend in. Dr Pepper is the official sponsor of doing things your way.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-drp-red text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-drp-red transition-all">
                Join The Cult
              </button>
              <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-drp-black transition-all">
                <Play className="w-5 h-5 ml-1" />
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="aspect-[4/5] rounded-2xl bg-zinc-900 overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop" alt="Gaming" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 font-display text-2xl uppercase">Gaming</div>
              </div>
              <div className="aspect-square rounded-2xl bg-drp-maroon p-6 flex flex-col justify-end">
                <div className="font-display text-4xl uppercase mb-2">2XP</div>
                <p className="text-sm opacity-80">Unlock double XP with every can.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-4 pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="aspect-square rounded-2xl bg-drp-red p-6 flex flex-col justify-end">
                <div className="font-display text-4xl uppercase mb-2">Drops</div>
                <p className="text-sm opacity-90">Exclusive merch for the real ones.</p>
              </div>
              <div className="aspect-[4/5] rounded-2xl bg-zinc-900 overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1493225457124-a1a2a5f529db?q=80&w=1000&auto=format&fit=crop" alt="Music" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 font-display text-2xl uppercase">Music</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
