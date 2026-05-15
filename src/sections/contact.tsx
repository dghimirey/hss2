import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const mailtoLink = `mailto:haraiyasecondary1@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setStatus({ 
        type: 'success', 
        message: '✓ Email client opened! Please send the message to complete.' 
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: '✗ Failed to open email client. Please try again.' 
      });
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    { 
      icon: MapPin, 
      title: 'Our Location', 
      detail: 'Kanchan-3, Rupandehi, Nepal',
      action: null,
      linkText: 'View on Map'
    },
    { 
      icon: Phone, 
      title: 'Direct Line', 
      detail: '+977-9857024716',
      action: 'tel:+9779857024716',
      linkText: 'Call Now'
    },
    { 
      icon: Mail, 
      title: 'Official Email', 
      detail: 'haraiyasecondary1@gmail.com',
      action: 'mailto:haraiyasecondary1@gmail.com',
      linkText: 'Send Email'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-500">Connect</span>
            </h2>
            <p className="text-slate-400 mb-12 leading-relaxed max-w-lg">
              Have questions or want to visit our school? Reach out to us through any of these channels.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="group">
                  <div className="flex items-start gap-5">
                    {/* Icon Container - Fixed width for alignment */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-secondary group-hover:bg-gradient-to-br group-hover:from-secondary group-hover:to-yellow-500 group-hover:text-black transition-all shadow-lg border border-secondary/20">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>
                    
                    {/* Content Container - Takes remaining space */}
                    <div className="flex-1 pt-1">
                      <h4 className="font-bold text-xs text-slate-500 uppercase tracking-[0.2em] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-lg font-bold tracking-tight text-white mb-2">
                        {item.detail}
                      </p>
                      {item.action && (
                        <a 
                          href={item.action}
                          className="text-sm text-secondary hover:text-yellow-500 transition-colors inline-flex items-center gap-1 group/link"
                        >
                          <span>{item.linkText}</span>
                          <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                        </a>
                      )}
                      {!item.action && (
                        <button 
                          onClick={() => {
                            const mapSection = document.getElementById('map');
                            if (mapSection) mapSection.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-sm text-secondary hover:text-yellow-500 transition-colors inline-flex items-center gap-1 group/link"
                        >
                          <span>{item.linkText}</span>
                          <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="font-bold text-xs text-slate-500 uppercase tracking-[0.2em] mb-6">Digital Presence</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.facebook.com/haraiya.secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:from-secondary hover:to-yellow-500 hover:text-black transition-all border border-white/5"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-[48px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <h3 className="text-2xl font-black mb-10 tracking-tight text-white">Direct Messaging</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/20 text-white placeholder:text-slate-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/20 text-white placeholder:text-slate-500 transition-all"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/20 text-white placeholder:text-slate-500 transition-all"
                  placeholder="e.g., Admission Query"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Message *</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/20 text-white placeholder:text-slate-500 transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              
              {status.message && (
                <div className={`text-sm text-center p-3 rounded-xl ${
                  status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {status.message}
                </div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-white to-gray-200 text-slate-950 rounded-2xl font-black shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl transition-all"
              >
                {isSending ? 'Sending...' : 'Dispatch Message'} 
                <Send className="w-4 h-4" />
              </motion.button>
              
              <p className="text-xs text-center text-slate-500 mt-4">
                By submitting, you agree to our privacy policy. We'll respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          id="map"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 h-[450px] rounded-[48px] overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl p-3"
        >
          <div className="w-full h-full rounded-[38px] overflow-hidden hover:opacity-100 transition-opacity duration-300 border border-white/10 shadow-inner">
            <iframe 
              title="School Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.892054228845!2d83.24642837524968!3d27.596876076246055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996f2ca9e15d0cd%3A0xad7656cde60505bc!2sShree%20Haraiya%20Higher%20Secondary%20School!5e0!3m2!1sne!2snp!4v1778806146272!5m2!1sne!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
