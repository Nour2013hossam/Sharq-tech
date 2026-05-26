import { motion } from 'motion/react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const members = [
  {
    name: 'Sarah Drasner',
    role: 'AI Researcher',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    xp: 24500,
    skills: ['PyTorch', 'Transformers', 'Python'],
  },
  {
    name: 'David Guetta',
    role: 'Cyber Security Expert',
    avatar: 'https://i.pravatar.cc/150?u=david',
    xp: 19200,
    skills: ['Pen Testing', 'Network', 'Rust'],
  },
  {
    name: 'Elena Rostova',
    role: 'Senior Prompt Engineer',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    xp: 18400,
    skills: ['LLMs', 'GPT-4', 'LangChain'],
  },
  {
    name: 'Marcus Bell',
    role: 'Full Stack Developer',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    xp: 16500,
    skills: ['React', 'Node.js', 'PostgreSQL'],
  }
];

export default function Members() {
  return (
    <section id="members" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Meet Our <span className="text-neon-purple glow-text text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-pink-500">Community</span>
        </h2>
        <p className="text-gray-400">Connect with top-tier talent around the globe.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6 rounded-2xl text-center group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-neon-purple/20 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full border-2 border-white/10 relative z-10 group-hover:border-neon-purple/50 transition-colors" />
            </div>
            
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-neon-purple text-sm mb-4">{member.role}</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {member.skills.map(skill => (
                <span key={skill} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div className="text-sm font-mono text-gray-400">
                <span className="text-white font-bold">{member.xp.toLocaleString()}</span> XP
              </div>
              <div className="flex gap-2">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors"><Github className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] text-gray-400 transition-colors"><Twitter className="w-4 h-4" /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
