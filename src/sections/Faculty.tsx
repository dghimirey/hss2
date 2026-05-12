/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../lib/assets';
import { cn } from '../lib/utils';
import { Users, X, BookOpen, User as UserIcon, Award, SortAsc, LayoutGrid, Linkedin, Globe, Mail, Facebook, Instagram, Phone } from 'lucide-react';

type SortOption = 'name' | 'subject';
type CategoryOption = 'All' | 'Leadership' | 'Staff' | 'Teacher';

export default function Faculty() {
  const [selectedTeacher, setSelectedTeacher] = useState<typeof ASSETS.teachers[number] | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [filterCategory, setFilterCategory] = useState<CategoryOption>('All');

  const categories: CategoryOption[] = ['All', 'Leadership', 'Staff', 'Teacher'];

  const renderTeacherCard = (teacher: typeof ASSETS.teachers[number]) => (
    <motion.div
      key={teacher.name}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => setSelectedTeacher(teacher)}
    >
      <div className="card-premium p-4 md:p-6 flex flex-col items-center gap-4 text-center h-full hover:bg-white/[0.08] transition-all group">
        <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative bg-linear-to-br from-slate-900 to-slate-800 border border-white/10 flex items-center justify-center">
          {teacher.img ? (
            <img
              src={teacher.img}
              alt={teacher.name}
              className="w-full h-full object-cover object-center transition-all duration-700 scale-100 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-700">
              <UserIcon className="w-12 h-12 mb-2 opacity-30 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Photo Awaited</span>
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="inline-block px-3 py-1 bg-secondary text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg border border-white/20">
              View Profile
            </span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-col items-center gap-0.5 mb-1 text-[8px] font-black uppercase tracking-[0.2em]">
            <span className={cn(
              "px-2 py-0.5 rounded-full border",
              teacher.category === 'Leadership' ? "text-secondary border-secondary/30 bg-secondary/10" :
              teacher.category === 'Staff' ? "text-accent border-accent/30 bg-accent/10" :
              "text-slate-500 border-white/10"
            )}>
              {teacher.category}
            </span>
          </div>
          <h3 className="font-bold text-base md:text-lg group-hover:text-secondary transition-colors line-clamp-1">
            {teacher.name}
          </h3>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-black">
              {teacher.subject}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              {teacher.role}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="faculty" className="section-padding relative overflow-hidden bg-slate-950">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-secondary mb-6 shadow-lg border border-secondary/20"
          >
            <Users className="w-8 h-8" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter uppercase"
          >
            School <span className="text-secondary">Community</span> & Faculty
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl leading-relaxed"
          >
            Our dedicated team working together to provide an environment of academic excellence and holistic development.
          </motion.p>
        </div>

        {/* Filters and Sorting Bar */}
        <div className="flex flex-col gap-8 mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mr-2">Filter By:</span>
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                    filterCategory === cat
                      ? "bg-secondary text-white shadow-lg"
                      : "text-slate-500 hover:text-white hover:bg-white/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mr-2">Sort By:</span>
            <div className="flex items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <button
                onClick={() => setSortBy('name')}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                  sortBy === 'name'
                    ? "bg-secondary text-white shadow-lg"
                    : "text-slate-500 hover:text-white hover:bg-white/5"
                )}
              >
                <SortAsc className="w-4 h-4" />
                Name
              </button>
              <button
                onClick={() => setSortBy('subject')}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                  sortBy === 'subject'
                    ? "bg-secondary text-white shadow-lg"
                    : "text-slate-500 hover:text-white hover:bg-white/5"
                )}
              >
                <LayoutGrid className="w-4 h-4" />
                Subject
              </button>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Grid Sections */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="popLayout">
            {filterCategory === 'All' || filterCategory === 'Leadership' ? (
              <motion.div
                key="leadership-section"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-24"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent to-white/10" />
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-secondary">School Leadership</h3>
                  <div className="h-px flex-1 bg-linear-to-l from-transparent to-white/10" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {ASSETS.teachers.filter(t => t.category === 'Leadership').map(leader => renderTeacherCard(leader))}
                </div>
              </motion.div>
            ) : null}

            {filterCategory === 'All' || filterCategory === 'Teacher' ? (
              <motion.div
                key="teacher-section"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-24"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent to-white/10" />
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Teaching Faculty</h3>
                  <div className="h-px flex-1 bg-linear-to-l from-transparent to-white/10" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                  {ASSETS.teachers
                    .filter(t => t.category === 'Teacher')
                    .sort((a, b) => {
                      if (sortBy === 'name') return a.name.localeCompare(b.name);
                      const subComp = a.subject.localeCompare(b.subject);
                      return subComp !== 0 ? subComp : a.name.localeCompare(b.name);
                    })
                    .map(teacher => renderTeacherCard(teacher))
                  }
                </div>
              </motion.div>
            ) : null}

            {filterCategory === 'All' || filterCategory === 'Staff' ? (
              <motion.div
                key="staff-section"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent to-white/10" />
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-accent">Administrative Staff</h3>
                  <div className="h-px flex-1 bg-linear-to-l from-transparent to-white/10" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {ASSETS.teachers
                    .filter(t => t.category === 'Staff')
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(staff => renderTeacherCard(staff))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* Teacher Detail Modal (Mostly unchanged but checking for null img) */}
      <AnimatePresence>
        {selectedTeacher && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTeacher(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={`teacher-${selectedTeacher.name}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            >
              <button
                onClick={() => setSelectedTeacher(null)}
                className="absolute top-6 right-6 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-slate-950 transition-all border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-5/12 aspect-[4/5] md:aspect-auto relative bg-slate-800 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
                {selectedTeacher.img ? (
                  <img
                    src={selectedTeacher.img}
                    alt={selectedTeacher.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-700">
                    <UserIcon className="w-32 h-32 mb-4 opacity-10" />
                    <span className="text-xs uppercase tracking-[0.3em] font-black opacity-20">Portrait Pending</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-r from-slate-950/20 via-transparent to-transparent hidden md:block" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-linear-to-br from-slate-900 via-slate-900 to-slate-950">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-6 border border-secondary/20 uppercase tracking-[0.2em]">
                    {selectedTeacher.category} Member
                  </span>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h2 className="text-3xl md:text-4xl font-display font-black tracking-tighter">
                      {selectedTeacher.name}
                    </h2>
                    <div className="flex gap-2">
                       <a 
                        href="#" 
                        onClick={(e) => e.preventDefault()}
                        className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-secondary group/icon transition-all"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href="#" 
                        onClick={(e) => e.preventDefault()}
                        className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-accent group/icon transition-all"
                        title="Website"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Designation</p>
                        <p className="font-bold text-sm tracking-tight">{selectedTeacher.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Specialization</p>
                        <p className="font-bold text-sm tracking-tight">{selectedTeacher.subject} Department</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                        <UserIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Biography</p>
                        <p className="font-medium text-sm text-slate-400 leading-relaxed max-w-sm">
                          Dedicated to fostering an environment of academic excellence and supporting students' personal growth through innovative teaching methodologies.
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">Professional Connect</p>
                      <div className="flex flex-wrap gap-3">
                        <a 
                          href="#" 
                          onClick={(e) => e.preventDefault()}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition-all duration-300"
                          title="Facebook"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => e.preventDefault()}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 transition-all duration-300"
                          title="Instagram"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => e.preventDefault()}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => e.preventDefault()}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300"
                          title="WhatsApp"
                        >
                          <Phone className="w-5 h-5" />
                        </a>
                        <a 
                          href="#" 
                          onClick={(e) => e.preventDefault()}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                          title="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedTeacher(null)}
                    className="px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl shadow-xl hover:bg-slate-100 transition-all uppercase tracking-widest text-xs"
                  >
                    Return to Faculty
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

