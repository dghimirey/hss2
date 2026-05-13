import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Briefcase, Heart, BookText, FileDown, Monitor, X, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const programs = [
  {
    title: 'Secondary Education',
    level: 'Grade 9 - 10',
    desc: 'Comprehensive SEE preparation with focus on core subjects, science, and computer literacy.',
    icon: BookOpen,
    color: 'border-blue-500/20 group-hover:shadow-blue-500/20',
    curriculum: [
      'Compulsory English & Nepali',
      'Compulsory Mathematics',
      'Science & Technology',
      'Social Studies & Creative Arts',
      'Elective I: Optional Mathematics',
      'Elective II: Computer Science / Health'
    ]
  },
  {
    title: 'Computer Engineering',
    level: 'Grade 9 - 12',
    desc: 'Specialized technical stream focusing on software development, hardware, and networking.',
    icon: Monitor,
    color: 'border-purple-500/20 group-hover:shadow-purple-500/20',
    curriculum: [
      'Basic Electronics & Circuitry',
      'Computer Fundamentals',
      'Digital Logic Systems',
      'C & Python Programming',
      'Computer Networking & IoT',
      'Web Technology & Databases'
    ]
  },
  {
    title: '+2 Management',
    level: 'Grade 11 - 12',
    desc: 'Empowering future business leaders with Accountancy, Economics, and Business Studies.',
    icon: Briefcase,
    color: 'border-cyan-500/20 group-hover:shadow-cyan-500/20',
    curriculum: [
      'Compulsory English & Nepali',
      'Principles of Accounting',
      'Business Studies / Economics',
      'Computer Science',
      'Business Mathematics',
      'Marketing & Finance Concepts'
    ]
  },
  {
    title: '+2 Education',
    level: 'Grade 11 - 12',
    desc: 'Shaping future educators with English, Nepali, and Pedagogical excellence.',
    icon: BookText,
    color: 'border-cyan-500/20 group-hover:shadow-cyan-500/20',
    curriculum: [
      'Psychology & Human Development',
      'Instructional Pedagogy',
      'Nepali/English Specialization',
      'Education & Development',
      'Classroom Management',
      'Curriculum & Evaluation'
    ]
  }
];

export default function Academics() {
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[number] | null>(null);

  return (
    <section id="academics" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter"
            >
              Academic <span className="text-secondary">Programs</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-400"
            >
              We offer diverse streams designed to meet the evolving needs of the modern workforce, guided by experienced faculty members.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="px-6 py-3 rounded-2xl glass font-bold">NEB Affiliated</div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group p-8 rounded-[32px] glass border transition-all duration-500 cursor-default hover:shadow-2xl hover:border-secondary/50 ${program.color}`}
            >
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/5">
                <program.icon className="w-7 h-7 text-secondary" />
              </div>
              <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-2">
                {program.level}
              </span>
              <h3 className="text-xl font-bold mb-4">{program.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {program.desc}
              </p>
              <button 
                onClick={(e) => { e.preventDefault(); setSelectedProgram(program); }}
                className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-secondary group/btn"
              >
                View Curriculum 
                <FileDown className="w-4 h-4 text-secondary/70 group-hover/btn:text-secondary transition-colors" />
                <div className="w-8 h-[1px] bg-secondary/50 group-hover:w-12 transition-all" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Curriculum Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <selectedProgram.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black tracking-tighter">{selectedProgram.title}</h3>
                  <p className="text-xs font-bold text-secondary tracking-widest uppercase">{selectedProgram.level}</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-slate-400 text-sm leading-relaxed">
                  Below are the core modules and learning areas focused within the <span className="text-white font-bold">{selectedProgram.title}</span> stream.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProgram.curriculum.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-sm font-medium text-slate-300">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 text-center">
                    Detailed PDF Syllabus available soon for download
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
