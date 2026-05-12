import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Star, GraduationCap, Users, Trophy, Bell, MapPin, Calendar, Sparkles, Award, ChevronDown, ExternalLink } from 'lucide-react';
import Particles from '../components/Particles';

const stats = [
  { label: 'Academic Excellence', value: '25+', icon: Star, color: 'text-secondary', description: 'Years of Legacy' },
  { label: 'Enrolled Students', value: '1200+', icon: Users, color: 'text-accent', description: 'Active Learners' },
  { label: 'Expert Faculty', value: '45+', icon: GraduationCap, color: 'text-cyan-400', description: 'Qualified Teachers' },
];

const notices = [
  { title: 'Grade 11 Admission Open for Management', date: 'Aug 24, 2026', tag: 'Admission', hot: true },
  { title: 'Annual Sports Week - Phase 1 Schedule', date: 'Aug 22, 2026', tag: 'Event', hot: false },
  { title: 'Scholarship Examination Results Out', date: 'Aug 20, 2026', tag: 'Result', hot: false },
  { title: 'Parent-Teacher Meeting Schedule', date: 'Aug 28, 2026', tag: 'Meeting', hot: true }
];

export default function Hero() {
  // For interactive mouse follow effect on cards
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden z-10"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Particles Background */}
      <Particles count={60} />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[150px] pointer-events-none"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[180px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] bg-repeat" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content (Main) - Enhanced */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-xl hover:border-secondary/50 transition-all duration-300 relative overflow-hidden group/badge"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full duration-1000 transition-transform"
            />
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary shadow-[0_0_12px_#00d2ff]"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300">
              Established 2024 BS
            </span>
            <Sparkles className="w-3 h-3 text-secondary ml-1" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-nepali font-bold leading-[1.2] lg:leading-[1.15] mb-6 tracking-tight relative group"
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-white to-secondary bg-clip-text text-transparent drop-shadow-2xl relative z-10">
                हरैया माध्यमिक
              </span>
              <motion.span 
                className="absolute inset-x-0 bottom-0 h-[20%] bg-secondary/10 -z-0 blur-lg"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
            <br />
            <span className="text-secondary inline-block relative overflow-hidden">
              विद्यालय
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 mb-4"
          >
            <MapPin className="w-4 h-4 text-secondary" />
            <p className="text-base md:text-xl font-medium tracking-wide">
              कञ्चन -३, रुपन्देही, नेपाल
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="group relative mb-8 flex justify-center lg:justify-start"
           >
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 210, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-secondary to-cyan-500 text-white font-black rounded-2xl shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-[10px] md:text-xs group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-secondary/20 blur-2xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 group-hover:w-full" />
              <span className="relative z-10">Enroll Now</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 md:px-10 py-4 md:py-5 border border-white/20 rounded-2xl font-black text-white backdrop-blur-md hover:bg-white/10 hover:border-secondary/40 transition-all duration-300 uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-2 group"
            >
              Virtual Tour
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Enhanced Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 w-full border-t border-white/10 pt-10 md:pt-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                whileHover={{ y: -5 }}
                className="relative group text-center lg:text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col gap-1 md:gap-2 relative">
                  <span className={`text-2xl md:text-4xl font-black ${stat.color} tracking-tighter flex items-baseline justify-center lg:justify-start gap-0.5 md:gap-1`}>
                    {stat.value}
                    <span className="text-xs md:text-sm font-normal text-slate-500">+</span>
                  </span>
                  <span className="text-[8px] md:text-[10px] text-slate-400 md:text-slate-500 font-bold uppercase tracking-widest leading-none">
                    {stat.label}
                  </span>
                  <span className="text-[7px] md:text-[8px] text-slate-600 uppercase tracking-wider hidden sm:block">
                    {stat.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Panel - Enhanced with 3D Tilt & Better Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0] 
          }}
          transition={{ 
            opacity: { delay: 0.3, duration: 0.5 },
            scale: { delay: 0.3, type: "spring" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="lg:col-span-5 w-full flex flex-col gap-6"
          style={{
            rotateX: useTransform(springY, [-0.5, 0.5], [8, -8]),
            rotateY: useTransform(springX, [-0.5, 0.5], [-8, 8]),
            transformStyle: "preserve-3d",
          }}
        >
          {/* Featured Notice Card with Glassmorphism */}
          <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-[30px] md:rounded-[40px] p-6 md:p-10 backdrop-blur-2xl relative overflow-hidden group hover:border-secondary/30 transition-all duration-500 shadow-2xl">
            <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-32 md:w-40 h-32 md:h-40 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="flex items-center justify-between mb-6 md:mb-8 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center text-secondary shadow-lg">
                  <Bell className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-xs md:text-sm uppercase tracking-widest text-white">Latest Notices</h3>
                  <p className="text-[8px] md:text-[9px] text-slate-500">Stay updated with school announcements</p>
                </div>
              </div>
              <motion.button
                whileHover={{ x: 3 }}
                className="text-[9px] md:text-[10px] font-bold text-slate-400 hover:text-secondary transition-colors uppercase tracking-widest flex items-center gap-1"
              >
                View All
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            </div>

            <div className="space-y-4 relative">
              {notices.map((notice, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-all duration-300 cursor-pointer group/notice"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${notice.hot ? 'bg-secondary/30 text-secondary animate-pulse' : 'bg-white/10 text-slate-400'} uppercase tracking-widest`}>
                        {notice.tag}
                      </span>
                      {notice.hot && (
                        <span className="text-[6px] font-black text-secondary uppercase tracking-wider">HOT</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-slate-500">
                      <Calendar className="w-2.5 h-2.5" />
                      <span>{notice.date}</span>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-200 group-hover/notice:text-secondary transition-colors line-clamp-1">
                    {notice.title}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span>📢 Last updated: Today</span>
              <span className="flex items-center gap-1">🔔 New: 2 unread</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-secondary transition-colors">
          Explore More
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2 backdrop-blur-sm group-hover:border-secondary/50 transition-colors"
        >
          <div className="w-0.5 h-2 rounded-full bg-secondary/70 group-hover:bg-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}