import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Dr Pepper Original",
    desc: "The legendary 23 flavors.",
    price: "$5.99",
    tag: "Best Seller",
    color: "from-[#5C0A0A] to-[#2A0404]"
  },
  {
    id: 2,
    name: "Dr Pepper Zero Sugar",
    desc: "Zero sugar. Infinite mystery.",
    price: "$5.99",
    tag: "Trending",
    color: "from-[#1A1A1A] to-[#000000]"
  },
  {
    id: 3,
    name: "Dr Pepper Cherry",
    desc: "A kiss of cherry.",
    price: "$6.49",
    tag: "Fan Favorite",
    color: "from-[#8B0000] to-[#4A0000]"
  }
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-4">Choose Your <br/><span className="text-drp-red text-stroke">Poison</span></h2>
            <p className="text-xl text-white/70">Stock your fridge with the essentials.</p>
          </div>
          <button className="mt-6 md:mt-0 text-drp-red font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
            View All Products <span className="text-xl">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${product.color} border border-white/10 group overflow-hidden`}
            >
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {product.tag}
              </div>
              
              <div className="h-64 flex items-center justify-center mb-8 relative">
                {/* Abstract Can Representation */}
                <motion.div 
                  className="w-24 h-48 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm relative z-10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="font-display text-2xl rotate-[-90deg] tracking-widest opacity-50 whitespace-nowrap">DR PEPPER</span>
                </motion.div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-drp-red/20 blur-3xl rounded-full group-hover:bg-drp-red/40 transition-colors"></div>
              </div>

              <h3 className="font-display text-3xl uppercase mb-2">{product.name}</h3>
              <p className="text-white/70 mb-6 h-12">{product.desc}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{product.price}</span>
                <button className="bg-white text-drp-black p-4 rounded-full hover:bg-drp-red hover:text-white transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
