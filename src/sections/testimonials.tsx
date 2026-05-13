import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { ASSETS } from '../lib/assets';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter"
          >
            Community <span className="text-secondary">Voices</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-slate-400"
          >
            Hear from the students, alumni, and parents who make Haraiya Secondary School a family.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ASSETS.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[40px] glass border border-white/5 relative group hover:border-secondary/20 transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-secondary/10 transition-colors" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg transition-all">
                   <img 
                     src={t.img} 
                     alt={t.name} 
                     className="w-full h-full object-cover"
                     referrerPolicy="no-referrer"
                     loading="lazy"
                   />
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-secondary font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-400 italic leading-relaxed">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
