import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  { text: "The only soda that matters.", author: "@gamer_x" },
  { text: "23 flavors of pure genius.", author: "@sarah_styles" },
  { text: "Late night fuel.", author: "@dev_night" },
  { text: "Nothing else tastes like it.", author: "@music_junkie" },
  { text: "Misunderstood by many, loved by the right ones.", author: "@drp_fan" },
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-white/10 bg-drp-black overflow-hidden flex">
      <motion.div 
        className="flex space-x-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
          <div key={i} className="flex items-center space-x-4">
            <div className="flex text-drp-red">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-lg font-medium">"{review.text}"</p>
            <span className="text-white/50 text-sm">{review.author}</span>
            <div className="w-2 h-2 rounded-full bg-drp-red mx-4"></div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
