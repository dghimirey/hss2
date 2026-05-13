import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  GraduationCap,
  Users,
  Star,
  Bell,
  Calendar,
  MapPin,
  ExternalLink,
} from 'lucide-react';

import { ASSETS } from '../lib/assets';

const stats = [
  {
    label: 'Years of Excellence',
    value: '25+',
    icon: Star,
  },
  {
    label: 'Students',
    value: '1200+',
    icon: Users,
  },
  {
    label: 'Expert Teachers',
    value: '45+',
    icon: GraduationCap,
  },
];

const notices = [
  {
    title: 'Grade 11 Admission Open for Management',
    date: 'Aug 24, 2026',
    tag: 'Admission',
  },
  {
    title: 'Annual Sports Week Schedule Published',
    date: 'Aug 22, 2026',
    tag: 'Event',
  },
  {
    title: 'Scholarship Examination Results Out',
    date: 'Aug 20, 2026',
    tag: 'Result',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-28 pb-20 px-6 flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.hero.bg}
          alt="School"
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-slate-950/85" />

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-14 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />

            <span className="text-xs tracking-wider uppercase text-slate-300 font-medium">
              Established 2024 BS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              हरैया माध्यमिक
            </span>

            <br />

            <span className="text-cyan-400">
              विद्यालय
            </span>
          </h1>

          {/* Location */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 mb-6">
            <MapPin className="w-4 h-4 text-cyan-400" />

            <span className="text-base md:text-lg">
              कञ्चन -३, रुपन्देही, नेपाल
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
            Empowering students through quality education, discipline,
            innovation, and holistic academic development in a modern
            learning environment.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-7 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-7 py-4 rounded-xl border border-white/15 hover:border-cyan-400/50 hover:bg-white/5 text-white font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Virtual Tour
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Notice Panel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-xl p-6 md:p-8 shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">
                  <Bell className="w-5 h-5 text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    Latest Notices
                  </h3>

                  <p className="text-sm text-slate-500">
                    School announcements
                  </p>
                </div>
              </div>

              <button className="text-sm text-cyan-400 hover:text-cyan-300 transition">
                View All
              </button>
            </div>

            {/* Notice List */}
            <div className="space-y-4">
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-wider px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300">
                      {notice.tag}
                    </span>

                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar className="w-3 h-3" />
                      {notice.date}
                    </div>
                  </div>

                  <p className="text-slate-200 font-medium leading-relaxed">
                    {notice.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
