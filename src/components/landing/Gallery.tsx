import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

const galleryItems = [
  { type: 'image', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', title: 'Hardware Lab' },
  { type: 'video', url: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop', title: 'Cyber Security Operations' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', title: 'Data Visualizations' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1620825937374-87fc7d6daf09?q=80&w=800&auto=format&fit=crop', title: 'AI Generation' },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
       <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 glow-text">Innovation</span>
        </h2>
        <p className="text-gray-400">Glimpse into the future being built at Sharq Tech.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedItem(item.url)}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer ${i === 0 || i === 3 ? 'md:col-span-1 aspect-square' : 'md:col-span-1 aspect-video md:aspect-square'}`}
          >
            <div className="absolute inset-0 bg-dark-bg/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-neon-blue/20 transition-all">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            )}
            
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-dark-surface to-transparent z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full max-h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.1)]"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedItem} alt="Gallery Preview" className="w-full h-auto object-contain bg-dark-bg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
