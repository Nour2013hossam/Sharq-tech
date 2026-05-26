import { motion } from 'motion/react';
import { PlayCircle, Award, BookOpen } from 'lucide-react';

const courses = [
  {
    title: 'Advanced AI & Deep Learning',
    level: 'Advanced',
    duration: '12 Weeks',
    modules: 48,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Modern Frontend Architecture',
    level: 'Intermediate',
    duration: '8 Weeks',
    modules: 32,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Cyber Security Essentials',
    level: 'Beginner',
    duration: '6 Weeks',
    modules: 24,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Featured <span className="text-neon-blue glow-text">Courses</span>
        </h2>
        <p className="text-gray-400">Level up your skills with industry-leading curriculums.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col rounded-3xl overflow-hidden glass-panel hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-56 overflow-hidden relative">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-white/10 backdrop-blur-md border border-white/20`}>
                  {course.level}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-dark-bg/50 backdrop-blur-md border border-white/10 flex items-center gap-1">
                  <PlayCircle className="w-3 h-3" /> {course.duration}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">{course.title}</h3>
              
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
                <div className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-neon-blue" /> {course.modules} Modules</div>
                <div className="flex items-center gap-1"><Award className="w-4 h-4 text-yellow-400" /> Certificate</div>
              </div>

              <button className="mt-auto w-full py-3 rounded-xl border border-white/10 hover:border-neon-blue text-white font-medium hover:bg-neon-blue/10 transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                Start Learning <PlayCircle className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
