import { motion } from 'motion/react';
import { Library, FlaskConical, Laptop, Trophy, MonitorPlay, Users2, HeartPulse } from 'lucide-react';

const facilities = [
  { name: 'Modern Library', icon: Library, color: 'text-blue-400' },
  { name: 'Science Labs', icon: FlaskConical, color: 'text-cyan-400' },
  { name: 'Computer Center', icon: Laptop, color: 'text-sky-400' },
  { name: 'Sports Complex', icon: Trophy, color: 'text-blue-500' },
  { name: 'Multimedia Rooms', icon: MonitorPlay, color: 'text-cyan-500' },
  { name: 'ECA Programs', icon: Users2, color: 'text-blue-400' },
  { name: 'Student Counseling', icon: HeartPulse, color: 'text-sky-500' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter"
          >
            World-Class <span className="text-secondary">Facilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Our campus is equipped with cutting-edge technology and modern spaces that facilitate both structured learning and creative exploration.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl glass text-center group cursor-pointer border border-white/5 hover:border-secondary/30 overflow-hidden relative shadow-lg"
            >
              <div className="absolute inset-0 bg-secondary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <facility.icon className={`w-10 h-10 mx-auto mb-4 relative z-10 ${facility.color}`} />
              <h3 className="text-xs font-bold tracking-[0.1em] uppercase relative z-10">{facility.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Feature showcase */}
        <div className="mt-20 glass rounded-[40px] p-8 md:p-16 border border-white/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">Innovative Learning Spaces</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Every classroom is a hub of innovation. We utilize high-speed internet, smart boards, and collaborative furniture to create a dynamic educational experience that far exceeds the standard curriculum.
              </p>
              <div className="space-y-4">
                {[
                  'Fiber Optic Campus-wide Wi-Fi',
                  'Interactive Digital Whiteboards',
                  'Air-Conditioned Multimedia Halls',
                  'Advanced Biotech and Physics Labs'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                       <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-96 rounded-[32px] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Hall" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
