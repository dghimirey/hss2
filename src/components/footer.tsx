import { School, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 md:px-10 border-t border-white/5 bg-slate-950 text-slate-400 text-[10px] font-bold z-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-x-10 gap-y-4 uppercase tracking-[0.25em] text-center md:text-left">
          <span className="text-white/90">Kanchan -3, Rupandehi, Nepal</span>
          <span className="hover:text-secondary transition-all cursor-pointer">+977 9857024716</span>
          <span className="hover:text-secondary transition-all cursor-pointer">haraiyasecondary1@gmail.com</span>
        </div>
        
        <div className="flex gap-10 uppercase tracking-[0.4em]">
          {['Facebook'].map((social) => (
            <a 
              key={social} 
              href="https://www.facebook.com/haraiya.secondary" 
              className="hover:text-secondary transition-all hover:scale-110 active:scale-95"
            >
              {social}
            </a>
          ))}
        </div>

        <button 
          onClick={scrollToTop} 
          className="group flex items-center gap-3 text-secondary hover:text-white transition-all uppercase tracking-[0.3em] font-black"
        >
          <span className="">Back to top</span>
          <div className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all">
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </div>
        </button>
      </div>
      
      <div className="mt-16 text-center text-[9px] text-slate-600 uppercase tracking-[0.5em] font-medium border-t border-white/5 pt-8">
        © {new Date().getFullYear()} <span className="text-slate-500">Haraiya Secondary School.</span>
        <div className="mt-2 text-slate-400">
  Designed & Developed by{" "}
  <a 
    href="https://www.facebook.com/diamondghimire4" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Diamond Ghimire
  </a>
</div>
      </div>
    </footer>
  );
}
