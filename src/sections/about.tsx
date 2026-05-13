import { motion } from 'motion/react';
import { Target, Eye, Landmark } from 'lucide-react';
import { ASSETS } from '../lib/assets';

const values = [
  {
    title: 'History',
    desc: 'Haraiya Secondary School has been providing quality education to students for many years.',
    icon: Landmark,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Mission',
    desc: 'Our mission is to help students learn, grow, and build a bright future.',
    icon: Target,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Vision',
    desc: 'We want to create skilled, confident, and responsible students for the future.',
    icon: Eye,
    color: 'from-cyan-600 to-blue-400'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tighter"
          >
            About <span className="text-secondary uppercase">HSS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Haraiya Secondary School is focused on quality education, discipline, and overall student development.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] glass hover:translate-y-[-10px] transition-transform duration-500 group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {value.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-[40px] blur-3xl opacity-50" />

            <img
              src={ASSETS.about.excellence}
              alt="School"
              className="relative rounded-[40px] shadow-2xl z-10 w-full border border-white/5"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-display font-black mb-10 tracking-tight">
              Why Choose <br />
              <span className="text-secondary">Haraiya Secondary?</span>
            </h3>

            <div className="space-y-8">
              {[
                {
                  title: 'Academics',
                  desc: 'Teachers use simple, practical, and modern teaching methods that make learning easier, more interactive, and engaging for every student.'
                },
                {
                  title: 'ExtraCurricular Activities',
                  desc: 'Students are encouraged to excel not only in academics but also in sports and a wide range of extracurricular activities.'
                },
                {
                  title: 'Safe Environment',
                  desc: 'The school provides a safe, friendly, and supportive learning environment where students feel comfortable, respected, and motivated to grow academically and personally.'
                }
              ].map((item, i) => (
                <div key={item.title} className="flex gap-6 group">

                  <div className="w-12 h-12 shrink-0 rounded-xl glass flex items-center justify-center text-secondary font-bold border border-secondary/20 group-hover:bg-secondary group-hover:text-slate-950 transition-all">
                    0{i + 1}
                  </div>

                  <div>
                    <h4 className="font-bold mb-1 text-lg">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
