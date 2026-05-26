import { motion } from 'motion/react';
import { Timer, Users, ChevronRight } from 'lucide-react';

const competitions = [
  {
    title: 'Global AI Summit Hackathon',
    prize: '$50,000',
    participants: 1240,
    deadline: '2 days left',
    status: 'Open',
    color: 'from-blue-600 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'DefCon CTF Qualifiers',
    prize: 'Pro Licenses',
    participants: 856,
    deadline: '5 days left',
    status: 'Open',
    color: 'from-red-600 to-rose-500',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Web3 Next-Gen Apps',
    prize: '$20,000 + Funding',
    participants: 532,
    deadline: 'Starts in 1 week',
    status: 'Upcoming',
    color: 'from-purple-600 to-pink-500',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec8ae?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Competitions() {
  return (
    <section id="competitions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 glow-text">Competitions</span>
          </h2>
          <p className="text-gray-400 max-w-xl">Challenge yourself against the best minds in the industry.</p>
        </div>
        <button className="text-white hover:text-neon-blue flex items-center gap-2 transition-colors pb-2">
          View all <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {competitions.map((comp, i) => (
          <motion.div
            key={comp.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-dark-bg/60 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src={comp.image} alt={comp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${comp.color}`}>
                {comp.status}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors line-clamp-1">{comp.title}</h3>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Users className="w-4 h-4" /> {comp.participants} Joined
                </div>
                <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
                  <Timer className="w-4 h-4" /> {comp.deadline}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Prize Pool</div>
                  <div className="font-bold text-lg text-white">{comp.prize}</div>
                </div>
                <button className="px-6 py-2 rounded-xl bg-white/5 hover:bg-neon-blue hover:text-dark-bg text-white font-semibold transition-all duration-300">
                  Join Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
