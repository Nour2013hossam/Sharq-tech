import { Github, Twitter, Linkedin, Send, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-dark-surface overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 glow-text">Sharq Tech.</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              The premium platform for developers, designers, and innovators to learn, compete, and build the future together.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue/50 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Home', 'Fields', 'Leaderboard', 'Competitions', 'Courses'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-neon-blue transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Stay Connected</h4>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all"
                />
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
              </div>
              <button type="submit" className="w-full h-12 rounded-xl bg-neon-blue text-dark-bg font-bold flex items-center justify-center gap-2 hover:bg-neon-blue/80 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                Subscribe <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Sharq Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
