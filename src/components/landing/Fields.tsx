import { motion } from 'motion/react';
import { Bot, TerminalSquare, Code2, Paintbrush, MonitorPlay, ShieldAlert } from 'lucide-react';

const fields = [
  {
    title: 'Artificial Intelligence',
    description: 'Master machine learning, neural networks, and generative AI models.',
    icon: <Bot className="w-8 h-8 text-neon-blue" />,
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Prompt Engineering',
    description: 'Learn to craft the perfect prompts to harness the full power of LLMs.',
    icon: <TerminalSquare className="w-8 h-8 text-neon-purple" />,
    color: 'from-purple-500/20 to-fuchsia-500/20'
  },
  {
    title: 'Programming',
    description: 'Full-stack development, algorithms, and scalable software architecture.',
    icon: <Code2 className="w-8 h-8 text-green-400" />,
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'Graphic Design',
    description: 'UI/UX, 3D modeling, and digital artwork creation for modern apps.',
    icon: <Paintbrush className="w-8 h-8 text-pink-400" />,
    color: 'from-pink-500/20 to-rose-500/20'
  },
  {
    title: 'Media & Editing',
    description: 'Cinematic video production, motion graphics, and visual effects.',
    icon: <MonitorPlay className="w-8 h-8 text-orange-400" />,
    color: 'from-orange-500/20 to-amber-500/20'
  },
  {
    title: 'Cyber Security',
    description: 'Ethical hacking, cryptography, and securing next-gen infrastructure.',
    icon: <ShieldAlert className="w-8 h-8 text-red-400" />,
    color: 'from-red-500/20 to-rose-600/20'
  }
];

export default function Fields() {
  return (
    <section id="fields" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Explore Our <span className="text-neon-blue glow-text">Fields</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose your path and master the skills required to build the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fields.map((field, i) => (
          <motion.div
            key={field.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${field.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl`}></div>
            <div className="glass-panel p-8 rounded-3xl h-full flex flex-col relative z-10 glass-panel-hover overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {field.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {field.title}
              </h3>
              <p className="text-gray-400 flex-grow">
                {field.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
