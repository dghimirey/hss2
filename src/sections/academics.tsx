import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Briefcase,
  BookText,
  Monitor,
  FileDown,
  X,
  CheckCircle2,
} from 'lucide-react';

const programs = [
  {
    title: 'Secondary Education',
    level: 'ECD - Grade 12',
    desc: 'Strong academic foundation with practical and extra activities.',
    icon: BookOpen,
    curriculum: [
      'English & Nepali',
      'Mathematics',
      'Science & Technology',
      'Social Studies',
      'Computer Science',
      'Health & Physical Education',
      'Optional Mathematics',
      'Project-Based Learning',
      'Sports & Extra Activities',
    ],
  },
  {
    title: 'Computer Engineering',
    level: 'Grade 9 - 12',
    desc: 'Technical education focused on programming and networking.',
    icon: Monitor,
    curriculum: [
      'Computer Fundamentals',
      'Programming',
      'Digital Logic',
      'Networking',
      'Web Development',
      'Database Systems',
    ],
  },
  {
    title: '+2 Management',
    level: 'Grade 11 - 12',
    desc: 'Business and management education for future leaders.',
    icon: Briefcase,
    curriculum: [
      'Accounting',
      'Economics',
      'Business Studies',
      'Computer Science',
      'Business Mathematics',
      'Marketing & Finance',
    ],
  },
  {
    title: '+2 Education',
    level: 'Grade 11 - 12',
    desc: 'Training future teachers and education professionals.',
    icon: BookText,
    curriculum: [
      'Psychology',
      'Pedagogy',
      'English & Nepali',
      'Classroom Management',
      'Curriculum Design',
      'Teaching Practice',
    ],
  },
];

export default function Academics() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section id="academics" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Programs
          </h2>

          <p className="text-slate-400 max-w-2xl">
            Explore our academic streams and curriculum designed for quality education and student growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-5">
                <program.icon className="w-7 h-7 text-cyan-400" />
              </div>

              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                {program.level}
              </span>

              <h3 className="text-2xl font-bold mt-2 mb-3">
                {program.title}
              </h3>

              <p className="text-slate-400 text-sm mb-6">
                {program.desc}
              </p>

              <button
                onClick={() => setSelectedProgram(program)}
                className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:gap-3 transition-all"
              >
                View Curriculum
                <FileDown className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-2xl bg-slate-900 rounded-3xl p-8 border border-white/10 relative"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  <selectedProgram.icon className="w-7 h-7 text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold">
                    {selectedProgram.title}
                  </h3>

                  <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                    {selectedProgram.level}
                  </p>
                </div>
              </div>

              {/* Curriculum */}
              <div className="grid md:grid-cols-2 gap-4">
                {selectedProgram.curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
