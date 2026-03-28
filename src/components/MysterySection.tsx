import { motion } from 'motion/react';
import { useState } from 'react';

export default function MysterySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 23 abstract representations
  const flavors = Array.from({ length: 23 }, (_, i) => i + 1);

  return (
    <section id="flavors" className="py-32 px-6 relative bg-drp-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-7xl uppercase mb-6">The <span className="text-drp-red">23</span> Enigma</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Amaretto? Cherry? Licorice? We're not telling. Hover to explore the complexity of our legendary blend.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor}
              className="aspect-square glass-panel rounded-xl flex items-center justify-center cursor-crosshair relative overflow-hidden group"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(211, 47, 47, 0.2)' }}
            >
              <span className={`font-display text-3xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-50'}`}>
                {flavor < 10 ? `0${flavor}` : flavor}
              </span>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-drp-red text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              >
                ?
              </motion.div>
            </motion.div>
          ))}
          {/* Fill the last spot to make 24 grid items for symmetry */}
          <motion.div className="aspect-square rounded-xl flex items-center justify-center bg-drp-red text-white font-display text-2xl uppercase text-center p-2 leading-tight">
            Top Secret
          </motion.div>
        </div>
      </div>
    </section>
  );
}
