import { School, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 md:px-10 border-t border-white/5 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-400 font-sans z-20 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-x-10 gap-y-4 text-center md:text-left"
        >
          <div className="flex items-center gap-3 group">
            <MapPin className="w-4 h-4 text-secondary/60 group-hover:text-secondary transition-colors" />
            <span className="text-white/80 font-light tracking-wide text-sm hover:text-secondary transition-colors cursor-pointer">
              Kanchan -3, Rupandehi, Nepal
            </span>
          </div>
          
          <div className="flex items-center gap-3 group">
            <Phone className="w-4 h-4 text-secondary/60 group-hover:text-secondary transition-colors" />
            <span className="hover:text-secondary transition-all cursor-pointer font-light text-sm">
              +977 9857024716
            </span>
          </div>
          
          <div className="flex items-center gap-3 group">
            <Mail className="w-4 h-4 text-secondary/60 group-hover:text-secondary transition-colors" />
            <span className="hover:text-secondary transition-all cursor-pointer font-light text-sm">
              haraiyasecondary1@gmail.com
            </span>
          </div>
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-6"
        >
          {[
            { name: 'Facebook', icon: Facebook, color: 'hover:bg-[#1877f2]', link: 'https://www.facebook.com/haraiya.secondary' },
            { name: 'Instagram', icon: Instagram, color: 'hover:bg-gradient-to-br from-[#f09433] to-[#bc1888]', link: 'https://instagram.com' },
            { name: 'Youtube', icon: Youtube, color: 'hover:bg-[#ff0000]', link: 'https://youtube.com' },
            { name: 'Twitter', icon: Twitter, color: 'hover:bg-[#1da1f2]', link: 'https://twitter.com' }
          ].map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white group`}
            >
              <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Back to Top Button */}
        <motion.button 
          onClick={scrollToTop} 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 text-secondary hover:text-white transition-all font-semibold tracking-wide"
        >
          <span className="text-sm">Back to top</span>
          <div className="w-10 h-10 rounded-full border-2 border-secondary/30 flex items-center justify-center group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300 shadow-lg group-hover:shadow-secondary/25">
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </motion.button>
      </div>
      
      {/* Copyright Section with Enhanced Diamond Ghimire Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16 text-center border-t border-white/5 pt-8"
      >
        <p className="text-[11px] text-slate-500 tracking-wider font-light">
          © {new Date().getFullYear()} <span className="text-slate-400 font-medium">Haraiya Secondary School.</span>
          <span className="mx-2 text-slate-600">•</span>
          <span className="text-slate-500">All rights reserved.</span>
        </p>
        
        <motion.div 
          className="mt-3 text-slate-500 text-sm font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Designed & Developed
          by{" "}
          <motion.a 
            href="https://www.facebook.com/diamondghimire4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-block font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent hover:from-primary hover:to-secondary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Diamond Ghimire
            {/* Animated underline effect */}
            <motion.span 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
            {/* Glow effect on hover */}
            <span className="absolute inset-0 blur-md bg-gradient-to-r from-secondary/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.a>
          
          {/* Additional hover effects container */}
          <motion.div 
            className="inline-block ml-1"
            whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}
          >
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
