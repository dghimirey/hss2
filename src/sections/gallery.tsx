import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus } from 'lucide-react';
import { ASSETS } from '../lib/assets';

const categories = ['All', 'Events', 'Sports', 'Academics', 'School'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = ASSETS.gallery.filter(item => 
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter"
          >
            Memories in <span className="text-secondary">Motion</span>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeCategory === cat 
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/20' 
                  : 'glass-button'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[300px] rounded-[32px] overflow-hidden cursor-pointer border border-white/5"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white">
                    <Plus className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button flex items-center gap-2 mx-auto"
          >
            <Search className="w-5 h-5" /> Explore Full Archive
          </motion.button>
        </div>
      </div>
    </section>
  );
}
