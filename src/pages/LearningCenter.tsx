import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Globe, Layers, Package, Vote, Users, Shield, ArrowRight, Clock, Zap, ChevronRight, BookOpen } from 'lucide-react';
import { pillars, featuredCourses } from '../data/mockData';
import { useUser } from '../context/UserContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Globe, Layers, Package, Vote, Users, Shield };

export function LearningCenter() {
  return (
    <div className="min-h-screen bg-edge-bg">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-edge-indigo/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-edge-text mb-2">Learning <span className="gradient-text">Center</span></h1>
          <p className="text-edge-text-secondary">Explore our comprehensive curriculum designed for the Web3 ecosystem</p>
        </motion.div>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <h2 className="text-xl font-semibold text-edge-text mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-edge-indigo" />
            Featured Courses
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1 }} className="glass-card glass-card-hover p-6 rounded-2xl group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`badge ${course.difficulty === 'Beginner' ? 'badge-teal' : course.difficulty === 'Familiar' ? 'badge-indigo' : 'badge-purple'}`}>{course.difficulty}</span>
                  <span className="flex items-center gap-1 text-xs text-edge-muted">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-edge-text mb-2 group-hover:text-edge-indigo transition-colors">{course.name}</h3>
                <p className="text-sm text-edge-text-secondary mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-sm text-edge-indigo">
                    <Zap className="w-4 h-4" />
                    {course.xpReward} XP
                  </span>
                  <Link to={`/course/${course.id}`} className="text-edge-text-secondary hover:text-edge-text transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-xl font-semibold text-edge-text mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-edge-teal" />
            Learning Pillars
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon] || Globe;
              const colorClass = pillar.color === 'indigo' ? 'from-edge-indigo to-edge-purple' : pillar.color === 'teal' ? 'from-edge-teal to-edge-indigo' : 'from-edge-purple to-edge-indigo';
              return (
                <motion.div key={pillar.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }} whileHover={{ y: -4 }} className="glass-card glass-card-hover rounded-2xl overflow-hidden group">
                  <Link to={`/learn/${pillar.id}`} className="block p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-edge-text mb-2">{pillar.name}</h3>
                    <p className="text-sm text-edge-text-secondary mb-4">{pillar.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-edge-muted">{pillar.courses} courses</span>
                      <ChevronRight className="w-5 h-5 text-edge-muted group-hover:text-edge-indigo group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-12 glass-card p-6 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">42</p>
              <p className="text-sm text-edge-muted">Total Courses</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">6</p>
              <p className="text-sm text-edge-muted">Learning Pillars</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">50K+</p>
              <p className="text-sm text-edge-muted">XP Available</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">100+</p>
              <p className="text-sm text-edge-muted">Hours of Content</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export function PillarDetail() {
  const { pillarId } = useParams();
  const pillar = pillars.find(p => p.id === pillarId);
  const { user } = useUser();

  if (!pillar) return <div className="min-h-screen flex items-center justify-center"><p className="text-edge-muted">Pillar not found</p></div>;

  const Icon = iconMap[pillar.icon] || Globe;

  return (
    <div className="min-h-screen bg-edge-bg">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-edge-indigo/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-edge-muted mb-6">
          <Link to="/learn" className="hover:text-edge-text transition-colors">Learning Center</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-edge-text">{pillar.name}</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color === 'indigo' ? 'from-edge-indigo to-edge-purple' : pillar.color === 'teal' ? 'from-edge-teal to-edge-indigo' : 'from-edge-purple to-edge-indigo'} flex items-center justify-center shadow-lg`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-edge-text mb-2">{pillar.name}</h1>
              <p className="text-edge-text-secondary mb-4">{pillar.description}</p>
              <div className="flex items-center gap-4">
                <span className="badge badge-indigo">{pillar.courses} courses</span>
                <span className="badge badge-teal">Self-paced</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-xl font-semibold text-edge-text mb-4">Available Courses</h2>
          <div className="space-y-4">
            {featuredCourses
              .filter(c => c.pillar === pillarId)
              .concat(featuredCourses.filter(c => c.pillar !== pillarId).slice(0, 2))
              .map((course, index) => {
                const isCompleted = user?.completedCourses.includes(course.id);
                return (
                  <motion.div key={course.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.1 }} className="glass-card glass-card-hover p-5 rounded-xl">
                    <Link to={`/course/${course.id}`} className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-medium text-edge-text">{course.name}</h3>
                          {isCompleted && <span className="badge badge-teal">Completed</span>}
                        </div>
                        <p className="text-sm text-edge-text-secondary">{course.description}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 text-sm text-edge-muted">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Zap className="w-4 h-4 text-edge-indigo" />
                            {course.xpReward} XP
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-edge-muted" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
