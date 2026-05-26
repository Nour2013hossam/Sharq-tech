import { motion } from 'motion/react';
import { ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Floating Particles Placeholder */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-screen"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-neon-blue text-sm font-semibold tracking-wider uppercase mb-6 mx-auto">
            <Zap className="w-4 h-4" />
            <span>The Future of Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-blue-500 to-neon-purple glow-text">
              Sharq Tech
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            Elevate your skills in Artificial Intelligence, Cyber Security, and Software Engineering. Join the ultimate platform for next-generation tech pioneers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/dashboard"
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-dark-bg transition-all duration-200 bg-neon-blue border border-transparent rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] focus:outline-none"
            >
              Get Started Now
              <ChevronRight className="w-5 h-5 ml-2 -mr-1" />
            </Link>
            
            <a
              href="#fields"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 glass-panel hover:bg-white/10 rounded-xl"
            >
              Explore Fields
            </a>
          </div>
        </motion.div>

        {/* Animated Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {[
            { label: 'Active Members', value: '10K+' },
            { label: 'Pro Courses', value: '50+' },
            { label: 'Competitions', value: '120+' },
            { label: 'Technologies', value: '30+' },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white glow-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
