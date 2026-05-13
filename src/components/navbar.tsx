import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { ASSETS } from '../lib/assets';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Faculty', href: '#faculty' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Notice', href: '#notice' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 h-20 flex items-center',
        isScrolled
          ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent border-b border-white/0'
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
           tabIndex={0}
           role="button"
           aria-label="Go to home"
           onKeyDown={(e) => { if (e.key === 'Enter') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="flex items-center gap-4 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4 focus:ring-offset-slate-950 rounded-xl"
           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
         >
           <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-secondary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/20">
             <img src={ASSETS.logo} alt="Logo" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
           </div>

           <div className="flex flex-col">
             <span className="font-display font-black text-2xl tracking-tighter uppercase leading-none group-hover:text-secondary transition-colors">
               HSS
             </span>
           </div>
         </motion.div>

         {/* Desktop Navigation */}
         <div className="hidden lg:flex items-center gap-8">
           {navLinks.map((link, i) => (
             <motion.a
               key={link.name}
               href={link.href}
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white focus:outline-none focus:text-white focus:ring-1 focus:ring-secondary/50 rounded-lg px-2 py-1 transition-all duration-300 group"
             >
               {link.name}

               <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
             </motion.a>
           ))}

           {/* Explore Button */}
           <div className="flex items-center gap-4 border-l border-white/10 pl-8">
             <a
               href="#contact"
               className="inline-flex items-center justify-center px-6 py-2 bg-secondary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300"
             >
               Enroll Now
             </a>
           </div>
         </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-6 right-6 lg:hidden glass-darker rounded-[32px] border border-white/10 overflow-hidden shadow-2xl z-50 p-8"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-bold text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-secondary focus:outline-none focus:text-secondary focus:ring-1 focus:ring-secondary/50 rounded-lg px-2 py-1 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full mt-4 py-4 bg-secondary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg text-center inline-flex items-center justify-center hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
