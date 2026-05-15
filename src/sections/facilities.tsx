import { motion } from 'motion/react';
import { Library, FlaskConical, Laptop, Trophy, MonitorPlay, Users2, HeartPulse } from 'lucide-react';
import { classroom } from '../lib/assets';

const facilities = [
  { name: 'Library', icon: Library, color: 'text-blue-400' },
  { name: 'Computer Labs', icon: Laptop, color: 'text-cyan-400' },
  { name: 'Physics Chemistry and Biology Labs', icon: FlaskConical, color: 'text-sky-400' },
  { name: 'Sports', icon: Trophy, color: 'text-blue-500' },
  { name: 'SmartBoard and Projector', icon: MonitorPlay, color: 'text-cyan-500' },
  { name: 'ExtraCurricular Programs', icon: Users2, color: 'text-blue-400' },
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
            Haraiya Secondary School has well-equipped buildings with CCTV cameras and projector-connected classrooms. 
            The school also has a large playground and enough open space to support both quality learning and creative 
            activities for students.
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
              <h3 className="text-3xl font-display font-bold mb-6">Well equipped Classrooms</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Every classroom is designed to support modern and effective learning. Classrooms are equipped with 
                comfortable desk benches, a podium, CCTV for safety, whiteboards, and student-friendly furniture to 
                create an active and engaging learning environment.
              </p>
              <div className="space-y-4">
                {[
                  'CCTV-equipped classrooms and school premises',
                  'Quality whiteboards and projector-supported technical classes',
                  'Well-installed fans for a comfortable learning environment',
                  'Well-equipped computer, biology, physics, and chemistry laboratories'
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
                src={classroom}
                alt="classroom" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
