import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('');

    // Using EmailJS or a backend service to send email
    // For demo purposes, here's how to use mailto: link
    const mailtoLink = `mailto:haraiyasecondary1@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    setStatus('Email client opened. Please send the message.');
    
    // Optional: Clear form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSending(false);
    
    // Clear status after 5 seconds
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 tracking-tighter">
              Let's <span className="text-secondary">Connect</span>
            </h2>
            <p className="text-slate-400 mb-12 leading-relaxed max-w-lg">
              Have questions or want to visit our school?
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Our Location', detail: 'Kanchan-3, Rupandehi, Nepal' },
                { icon: Phone, title: 'Direct Line', detail: '+977-9857024716' },
                { icon: Mail, title: 'Official Email', detail: 'haraiyasecondary1@gmail.com' }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all shadow-lg border border-secondary/20">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-500 uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                    <p className="text-lg font-bold tracking-tight">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-xs text-slate-500 uppercase tracking-[0.2em] mb-6">Digital Presence</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.facebook.com/haraiya.secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-secondary hover:text-white transition-all border border-white/5"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[48px] glass-darker border border-white/10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-black mb-10 tracking-tight">Direct Messaging</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-secondary/50 text-sm transition-all"
                    placeholder="your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-secondary/50 text-sm transition-all"
                    placeholder="your email address"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-secondary/50 text-sm transition-all"
                  placeholder="Admission Query"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-secondary/50 text-sm transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              {status && (
                <div className="text-sm text-green-400 text-center">
                  {status}
                </div>
              )}
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black shadow-xl shadow-white/5 flex items-center justify-center gap-3 uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Dispatch Message'} <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 h-[450px] rounded-[48px] overflow-hidden glass border border-white/5 shadow-2xl p-3"
        >
          <div className="w-full h-full rounded-[38px] overflow-hidden opacity-80 hover:opacity-100 transition-opacity border border-white/10 shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.41320349887!2d83.3134371!3d27.6534947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399691ab1a1a1a1b%3A0x1a1a1a1a1a1a1a!2sHaraiya%2C%20Kanchan%204!5e0!3m2!1sen!2snp!4v1715478423456!5m2!1sen!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
