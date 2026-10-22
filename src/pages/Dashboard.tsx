import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Award, BookOpen, Target, ArrowRight, Zap, Trophy, Clock, ChevronRight, Star } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { learningPaths } from '../data/mockData';

const quickActions = [
  { label: 'Continue Learning', path: '/learn', icon: BookOpen, color: 'indigo' },
  { label: 'View Credentials', path: '/credentials', icon: Award, color: 'teal' },
  { label: 'Placement Test', path: '/placement', icon: Target, color: 'purple' },
];

export function Dashboard() {
  const { user } = useUser();
  if (!user) return <div className="min-h-screen flex items-center justify-center"><p className="text-edge-muted">Loading...</p></div>;

  const xpPercentage = (user.xp / user.xpToNextLevel) * 100;

  return (
    <div className="min-h-screen bg-edge-bg pb-20">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-edge-indigo/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-edge-text mb-2">Welcome back, <span className="gradient-text">Explorer</span></h1>
          <p className="text-edge-text-secondary">Continue your journey to Web3 mastery</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="glass-card glass-card-hover p-6 rounded-2xl sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-edge-indigo to-edge-teal flex items-center justify-center shadow-glow-indigo">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-edge-muted">Current Level</p>
                <p className="text-2xl font-bold text-edge-text">{user.level}</p>
              </div>
            </div>
          </div>

          <div className="glass-card glass-card-hover p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-edge-indigo" />
              <span className="text-sm text-edge-muted">Total XP</span>
            </div>
            <p className="text-2xl font-bold text-edge-text">{user.xp.toLocaleString()}</p>
            <p className="text-xs text-edge-muted mt-1">{user.xpToNextLevel - user.xp} XP to next level</p>
          </div>

          <div className="glass-card glass-card-hover p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-edge-teal" />
              <span className="text-sm text-edge-muted">Completed</span>
            </div>
            <p className="text-2xl font-bold text-edge-text">{user.completedCourses.length}</p>
            <p className="text-xs text-edge-muted mt-1">Courses finished</p>
          </div>

          <div className="glass-card glass-card-hover p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="w-5 h-5 text-edge-purple" />
              <span className="text-sm text-edge-muted">Credentials</span>
            </div>
            <p className="text-2xl font-bold text-edge-text">{user.certificates.length}</p>
            <p className="text-xs text-edge-muted mt-1">Verified on chain</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-edge-text flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-edge-indigo" />
                  Level Progress
                </h2>
                <span className="text-sm text-edge-indigo font-medium">{Math.round(xpPercentage)}%</span>
              </div>
              <div className="progress-bar h-3 mb-2">
                <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: `${xpPercentage}%` }} transition={{ duration: 1, ease: 'easeOut' }} />
              </div>
              <div className="flex justify-between text-xs text-edge-muted">
                <span>{user.xp.toLocaleString()} XP</span>
                <span>{user.xpToNextLevel.toLocaleString()} XP</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-edge-text">Active Path</h2>
                <Link to="/learn" className="text-sm text-edge-indigo hover:text-edge-indigo-glow flex items-center gap-1">
                  View all <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {user.activePath ? (
                <div className="space-y-4">
                  <div className="glass p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-edge-text">{user.activePath.name}</h3>
                      <span className="text-sm text-edge-teal">{user.activePath.progress}%</span>
                    </div>
                    <p className="text-sm text-edge-text-secondary mb-4">{user.activePath.description}</p>
                    <div className="progress-bar h-2 mb-4">
                      <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: `${user.activePath.progress}%` }} transition={{ duration: 0.8, delay: 0.5 }} />
                    </div>
                    <Link to={`/course/${user.activePath.id}`} className="btn-primary w-full flex items-center justify-center">
                      Continue Learning
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 rounded-lg bg-edge-bg-elevated">
                      <p className="text-lg font-bold text-edge-teal">{user.activePath.courses.length}</p>
                      <p className="text-xs text-edge-muted">Courses</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-edge-bg-elevated">
                      <p className="text-lg font-bold text-edge-indigo">{user.activePath.totalXp}</p>
                      <p className="text-xs text-edge-muted">XP Available</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Target className="w-12 h-12 text-edge-muted mx-auto mb-3" />
                  <p className="text-edge-text-secondary mb-4">No active learning path yet</p>
                  <Link to="/placement" className="btn-primary">Start Placement Test</Link>
                </div>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-edge-text flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-edge-purple" />
                AI Recommendation
              </h2>
              <div className="glass p-4 rounded-xl border-l-4 border-edge-purple">
                <p className="text-sm text-edge-text-secondary mb-3">
                  Based on your progress, I recommend focusing on <strong className="text-edge-text">Governance & DAO</strong> fundamentals. This will help you understand decision-making processes in the ecosystem.
                </p>
                <Link to="/learn" className="text-sm text-edge-purple hover:text-edge-purple-glow flex items-center gap-1">
                  Explore Governance Courses <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-edge-text">Recent Badges</h2>
                <Link to="/credentials" className="text-sm text-edge-indigo hover:text-edge-indigo-glow">View all</Link>
              </div>
              <div className="space-y-3">
                {user.badges.slice(0, 3).map((badge, index) => (
                  <motion.div key={badge.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="flex items-center gap-3 p-3 rounded-lg bg-edge-bg-elevated hover:bg-edge-bg transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-edge-indigo/30 to-edge-teal/30 flex items-center justify-center">
                      <Award className="w-5 h-5 text-edge-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-edge-text">{badge.name}</p>
                      <p className="text-xs text-edge-muted">{badge.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="glass-card p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-edge-text mb-4">Quick Actions</h2>
              <div className="space-y-2">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  const colorStyle = action.color === 'indigo' ? 'bg-edge-indigo/20 text-edge-indigo hover:bg-edge-indigo hover:text-white' : action.color === 'teal' ? 'bg-edge-teal/20 text-edge-teal hover:bg-edge-teal hover:text-white' : 'bg-edge-purple/20 text-edge-purple hover:bg-edge-purple hover:text-white';
                  return (
                    <Link key={index} to={action.path} className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${colorStyle}`}>
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{action.label}</span>
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="glass-card p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-edge-text mb-4">Other Paths</h2>
              <div className="space-y-3">
                {learningPaths.filter(p => p.id !== user.activePath?.id).slice(0, 2).map(path => (
                  <Link key={path.id} to={`/learn/${path.id}`} className="block p-3 rounded-lg bg-edge-bg-elevated hover:bg-edge-bg transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-edge-text">{path.name}</span>
                      <Clock className="w-4 h-4 text-edge-muted" />
                    </div>
                    <p className="text-xs text-edge-muted mt-1">{path.courses.length} courses</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
