import { motion } from 'motion/react';
import { Trophy, Medal, Star } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'Alex Rivera', xp: '15,420', level: 42, avatar: 'https://i.pravatar.cc/150?u=alex' },
  { rank: 2, name: 'Sam Chen', xp: '14,200', level: 39, avatar: 'https://i.pravatar.cc/150?u=sam' },
  { rank: 3, name: 'Jordan Lee', xp: '13,850', level: 38, avatar: 'https://i.pravatar.cc/150?u=jordan' },
  { rank: 4, name: 'Casey Smith', xp: '12,900', level: 35, avatar: 'https://i.pravatar.cc/150?u=casey' },
  { rank: 5, name: 'Taylor Doe', xp: '11,400', level: 32, avatar: 'https://i.pravatar.cc/150?u=taylor' },
];

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 glow-text">Top Hackers</span>
        </h2>
        <p className="text-gray-400">Compete, level up, and earn your spot on the leaderboard.</p>
      </div>

      <div className="glass-panel rounded-3xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-12 mt-8">
          {/* Rank 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center order-2 md:order-1"
          >
            <div className="relative mb-4">
              <img src={leaderboardData[1].avatar} alt="" className="w-20 h-20 rounded-full border-4 border-gray-400" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-400 text-dark-bg text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Medal className="w-3 h-3" /> 2nd
              </div>
            </div>
            <h4 className="font-bold text-white">{leaderboardData[1].name}</h4>
            <div className="text-neon-blue font-mono text-sm">{leaderboardData[1].xp} XP</div>
            <div className="w-full h-32 bg-gradient-to-t from-gray-500/20 to-transparent mt-4 rounded-t-xl border-t border-x border-gray-500/30"></div>
          </motion.div>

          {/* Rank 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center order-1 md:order-2 z-10"
          >
            <div className="relative mb-4">
              <div className="absolute -inset-2 bg-yellow-400/30 rounded-full blur-xl"></div>
              <img src={leaderboardData[0].avatar} alt="" className="w-28 h-28 rounded-full border-4 border-yellow-400 relative z-10 shadow-[0_0_30px_rgba(250,204,21,0.4)]" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-dark-bg text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1 z-20">
                <Trophy className="w-4 h-4" /> 1st
              </div>
            </div>
            <h4 className="font-bold text-white text-xl mt-2">{leaderboardData[0].name}</h4>
            <div className="text-yellow-400 font-mono font-bold">{leaderboardData[0].xp} XP</div>
            <div className="w-full sm:w-32 h-40 bg-gradient-to-t from-yellow-500/20 to-transparent mt-4 rounded-t-xl border-t border-x border-yellow-500/50"></div>
          </motion.div>

          {/* Rank 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center order-3"
          >
            <div className="relative mb-4">
              <img src={leaderboardData[2].avatar} alt="" className="w-20 h-20 rounded-full border-4 border-orange-500" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 text-dark-bg text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" /> 3rd
              </div>
            </div>
            <h4 className="font-bold text-white">{leaderboardData[2].name}</h4>
            <div className="text-orange-400 font-mono text-sm">{leaderboardData[2].xp} XP</div>
            <div className="w-full sm:w-24 h-24 bg-gradient-to-t from-orange-500/20 to-transparent mt-4 rounded-t-xl border-t border-x border-orange-500/30"></div>
          </motion.div>
        </div>

        {/* List */}
        <div className="space-y-3">
          {leaderboardData.slice(3).map((user, idx) => (
            <div key={user.name} className="flex items-center justify-between p-4 glass-panel rounded-xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-8 text-center text-gray-500 font-bold">#{user.rank}</div>
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-medium text-white">{user.name}</div>
                  <div className="text-xs text-gray-400">Level {user.level}</div>
                </div>
              </div>
              <div className="font-mono text-neon-blue">{user.xp} XP</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
