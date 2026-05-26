import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, BookOpen, Trophy, 
  Users, Settings, Bell, Search, 
  ChevronRight, Activity, Zap, Star
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: BookOpen, label: 'My Courses' },
  { icon: Trophy, label: 'Competitions' },
  { icon: Users, label: 'Community' },
  { icon: Settings, label: 'Settings' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="min-h-screen bg-dark-bg flex">
      {/* Sidebar - Desktop */}
      <aside className="w-64 hidden lg:flex flex-col border-r border-white/5 bg-dark-surface/50 backdrop-blur-xl">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white glow-text">SHARQ</span>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map(item => (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === item.label 
                    ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        {/* User Mini Profile */}
        <div className="mt-auto p-6 border-t border-white/5">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/150?u=current_user" alt="User" className="w-10 h-10 rounded-full border border-white/10" />
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-bold text-white truncate">Alex Developer</div>
              <div className="text-xs text-neon-blue truncate">Pro Plan</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-white/5 bg-dark-surface/30 backdrop-blur-md sticky top-0 z-10">
          <div className="relative w-full max-w-md hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search courses, members, competitions..." 
              className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all placeholder-gray-600"
            />
          </div>
          <h1 className="md:hidden text-xl font-bold text-white glow-text">Dashboard</h1>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-neon-purple rounded-full"></span>
            </button>
            <div className="md:hidden">
              <img src="https://i.pravatar.cc/150?u=current_user" alt="User" className="w-8 h-8 rounded-full border border-white/10" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto space-y-8">
            
            {/* Welcome Section & Profile Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center">
                <div className="absolute right-0 top-0 w-64 h-64 bg-neon-purple/20 blur-[80px] rounded-full pointer-events-none"></div>
                <h2 className="text-3xl font-bold text-white mb-2">Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-blue-500 to-neon-purple">Alex!</span></h2>
                <p className="text-gray-400 max-w-md mb-6">You're in the top 5% of learners this week. Keep up the momentum to reach Level 15.</p>
                <button className="w-max px-6 py-3 rounded-xl bg-neon-blue text-dark-bg font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                  Resume Advanced Deep Learning <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Profile XP Card */}
              <div className="glass-panel p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                <div className="relative mb-4">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="45" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5" />
                    <circle cx="48" cy="48" r="45" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="282.7" strokeDashoffset="56.5" strokeLinecap="round" className="text-neon-blue shadow-[0_0_10px_#00f0ff]" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl text-white">
                    14
                  </div>
                </div>
                <h3 className="font-bold text-white mb-1">Level 14</h3>
                <p className="text-xs text-gray-400 mb-4">1,250 / 8,000 XP to next level</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-medium bg-neon-blue/10 text-neon-blue border border-neon-blue/20">AI Track</span>
                  <span className="px-3 py-1 rounded-md text-xs font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/20">React</span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Total XP Earned', value: '34,250', icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' },
                { label: 'Courses Completed', value: '12', icon: BookOpen, color: 'text-neon-blue', bg: 'bg-neon-blue/10 border-neon-blue/20' },
                { label: 'Current Streak', value: '14 Days', icon: Zap, color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
              ].map(stat => (
                <div key={stat.label} className="glass-panel p-6 rounded-2xl flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.bg}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                    <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Charts Placeholder */}
              <div className="glass-panel p-6 rounded-3xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Activity Pulse</h3>
                  <select className="bg-white/5 border border-white/10 text-sm text-gray-300 rounded-lg px-3 py-1 focus:outline-none">
                    <option>This Week</option>
                    <option>This Month</option>
                  </select>
                </div>
                {/* Simulated Chart */}
                <div className="h-64 flex items-end justify-between gap-2 border-b pl-8 pb-4 relative border-white/10">
                  <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-xs text-gray-500 font-mono">
                    <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
                  </div>
                  {[40, 60, 30, 80, 50, 90, 70].map((height, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }} 
                      animate={{ height: `${height}%` }} 
                      transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                      className="w-full max-w-[40px] bg-gradient-to-t from-neon-blue/20 to-neon-blue/80 rounded-t-md relative group cursor-pointer border border-neon-blue/30 border-b-0 glow-text"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {height}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between pl-8 pt-2 text-xs text-gray-500 font-mono">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>

              {/* Notifications / Recent Activity */}
              <div className="glass-panel p-6 rounded-3xl flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Recent Activity</h3>
                  <button className="text-xs text-neon-blue hover:text-white transition-colors">Mark all read</button>
                </div>
                
                <div className="space-y-4 overflow-y-auto flex-1 pr-2">
                  {[
                    { title: 'Achievement Unlocked', desc: 'Completed "React Hooks Deep Dive" module.', time: '2h ago', icon: Trophy, color: 'text-yellow-400' },
                    { title: 'New Competition', desc: 'Web3 Hackathon registration is open.', time: '5h ago', icon: Zap, color: 'text-neon-purple' },
                    { title: 'Community Reply', desc: 'Sarah commented on your prompt strategy.', time: '1d ago', icon: Users, color: 'text-neon-blue' },
                    { title: 'System Update', desc: 'Platform maintenance scheduled for tomorrow.', time: '2d ago', icon: Settings, color: 'text-gray-400' },
                  ].map((notif, i) => (
                    <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                      <div className={`mt-1 bg-white/5 p-2 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors`}>
                        <notif.icon className={`w-4 h-4 ${notif.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white mb-0.5">{notif.title}</div>
                        <div className="text-xs text-gray-400 line-clamp-1">{notif.desc}</div>
                      </div>
                      <div className="text-[10px] text-gray-500 font-mono whitespace-nowrap">{notif.time}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
