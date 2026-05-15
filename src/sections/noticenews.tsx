import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Calendar, Bell, ArrowRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { ASSETS } from '../lib/assets';

export default function NoticeNews() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllNotices, setShowAllNotices] = useState(false);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        // Same CSV link from hero section
        const response = await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQijhk20HEzkeNuvhGcj6kuXxpABwBE4slhR7uRVZk9VkjaErDKBcDPSJ1jR0BfgsENMNCK5gBUtCZw/pub?output=csv'
        );
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const csvText = await response.text();
        const rows = csvText.trim().split('\n');
        
        // Parse CSV - same structure as hero section
        const formattedNotices = rows.slice(1)
          .map(row => {
            const columns = row.split(',');
            return {
              id: Math.random(),
              title: columns[0]?.replace(/^"|"$/g, '').trim() || '',
              date: columns[1]?.replace(/^"|"$/g, '').trim() || '',
              category: columns[2]?.replace(/^"|"$/g, '').trim() || '',
              desc: columns[3]?.replace(/^"|"$/g, '').trim() || `Important notice regarding ${columns[0]?.replace(/^"|"$/g, '').trim()}. Please check with the administration for more details.`,
            };
          })
          .filter(notice => notice.title);
        
        setNotices(formattedNotices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notices:', error);
        setLoading(false);
      }
    };
    
    fetchNotices();
    
    // Refresh notices every 5 minutes (same as hero section)
    const interval = setInterval(fetchNotices, 300000);
    return () => clearInterval(interval);
  }, []);

  // Get notices to display
  const displayedNotices = showAllNotices ? notices : notices.slice(0, 3);
  const hasMoreNotices = notices.length > 3;

  return (
    <section id="notice" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Recent Notices */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-display font-black tracking-tighter">
                Latest <span className="text-secondary">Notices</span>
              </h2>
              <button 
                onClick={() => setShowAllNotices(!showAllNotices)}
                className="text-xs font-bold text-secondary hover:underline flex items-center gap-1 uppercase tracking-widest"
              >
                {showAllNotices ? 'Show Less' : 'View All Archives'} 
                {showAllNotices ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="space-y-4">
              {loading ? (
                // Loading skeletons
                [...Array(3)].map((_, i) => (
                  <div key={i} className="p-6 rounded-3xl glass border border-white/5 animate-pulse">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-24 h-6 bg-white/10 rounded-full"></div>
                          <div className="w-32 h-3 bg-white/10 rounded"></div>
                        </div>
                        <div className="h-6 bg-white/10 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-white/10 rounded w-full"></div>
                      </div>
                      <div className="w-12 h-12 bg-white/10 rounded-2xl"></div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {displayedNotices.map((notice, i) => (
                    <motion.div
                      key={notice.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-3xl glass border border-white/5 hover:border-secondary/30 transition-all group"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider">
                              {notice.category || 'Notice'}
                            </span>
                            <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                              <Calendar className="w-3 h-3" /> {notice.date}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                            {notice.title}
                          </h3>
                          <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                            {notice.desc}
                          </p>
                        </div>
                        <button className="p-4 rounded-2xl glass-darker hover:bg-secondary hover:text-white transition-all shadow-xl group-hover:scale-110">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}

                  {/* Show More/Less Button for remaining notices */}
                  {hasMoreNotices && !showAllNotices && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => setShowAllNotices(true)}
                      className="w-full mt-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-cyan-400 text-sm font-medium"
                    >
                      <ChevronDown className="w-4 h-4" />
                      Load More ({notices.length - 3} more)
                    </motion.button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* School News/Blog */}
          <div>
            <h2 className="text-4xl font-display font-black mb-8 tracking-tighter">
              School <span className="text-secondary">Highlights</span>
            </h2>
            <div className="space-y-6">
              {ASSETS.news?.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-3xl glass overflow-hidden border border-white/5 group cursor-pointer"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
              
              <div className="p-8 rounded-[32px] glass-darker border border-secondary/20 text-white relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/20 transition-all" />
                <Bell className="w-12 h-12 absolute -top-2 -right-2 opacity-10 rotate-12" />
                <h3 className="text-xl font-bold mb-2 tracking-tight">Stay Informed</h3>
                <p className="text-sm text-slate-400 mb-6">Receive critical updates directly to your inbox.</p>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-secondary/50 placeholder:text-slate-500 transition-all"
                  />
                  <button className="absolute right-2 top-2 p-2 rounded-xl bg-white text-slate-950 hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-white/10">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
