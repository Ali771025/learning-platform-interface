import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, ExternalLink, Shield, CheckCircle2, Calendar, Link2, Star, Filter } from 'lucide-react';
import { useUser } from '../context/UserContext';

const filterOptions = ['All', 'Certificates', 'Badges', 'Achievements'];

export function CredentialsVault() {
  const { user } = useUser();
  const [activeFilter, setActiveFilter] = useState('All');

  if (!user) return <div className="min-h-screen flex items-center justify-center"><p className="text-edge-muted">Loading...</p></div>;

  return (
    <div className="min-h-screen bg-edge-bg">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-edge-indigo/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-edge-text mb-2">Credentials <span className="gradient-text">Vault</span></h1>
          <p className="text-edge-text-secondary">Your verified achievements and on-chain credentials</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-5 rounded-xl text-center">
            <Trophy className="w-8 h-8 text-edge-indigo mx-auto mb-2" />
            <p className="text-2xl font-bold text-edge-text">{user.certificates.length}</p>
            <p className="text-xs text-edge-muted">Certificates</p>
          </div>
          <div className="glass-card p-5 rounded-xl text-center">
            <Award className="w-8 h-8 text-edge-teal mx-auto mb-2" />
            <p className="text-2xl font-bold text-edge-text">{user.badges.length}</p>
            <p className="text-xs text-edge-muted">Badges</p>
          </div>
          <div className="glass-card p-5 rounded-xl text-center">
            <Shield className="w-8 h-8 text-edge-purple mx-auto mb-2" />
            <p className="text-2xl font-bold text-edge-text">{user.certificates.filter(c => c.verified).length}</p>
            <p className="text-xs text-edge-muted">Verified</p>
          </div>
          <div className="glass-card p-5 rounded-xl text-center">
            <Star className="w-8 h-8 text-edge-warning mx-auto mb-2" />
            <p className="text-2xl font-bold text-edge-text">{user.certificates.length + user.badges.length}</p>
            <p className="text-xs text-edge-muted">Total</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-edge-muted flex-shrink-0" />
          {filterOptions.map(filter => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeFilter === filter ? 'bg-edge-indigo text-white' : 'glass text-edge-text-secondary hover:text-edge-text'}`}>
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-xl font-semibold text-edge-text mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-edge-indigo" />
            Certificates
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {user.certificates.map((cert, index) => (
              <motion.div key={cert.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + index * 0.1 }} className="glass-card p-6 rounded-2xl">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-edge-indigo/20 via-edge-bg-elevated to-edge-teal/20 border border-edge-border p-4 flex flex-col items-center justify-center mb-4 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-radial from-edge-indigo/10 to-transparent" />
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-edge-indigo to-edge-teal flex items-center justify-center mx-auto mb-3 shadow-glow-indigo">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-sm font-semibold text-edge-text mb-1">{cert.name}</h4>
                      <p className="text-xs text-edge-muted">EDGE Certificate</p>
                    </div>
                  </div>
                  {cert.verified && (
                    <div className="absolute top-2 right-2">
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-edge-success/20 border border-edge-success/30">
                        <CheckCircle2 className="w-3 h-3 text-edge-success" />
                        <span className="text-xs text-edge-success">Verified</span>
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-edge-text mb-2">{cert.name}</h3>
                <div className="flex items-center gap-2 text-xs text-edge-muted mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>Issued {new Date(cert.issuedAt).toLocaleDateString()}</span>
                </div>

                {cert.transactionHash && (
                  <div className="p-3 rounded-lg bg-edge-bg-elevated flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-edge-indigo" />
                    <span className="text-xs font-mono text-edge-muted truncate flex-1">{cert.transactionHash}</span>
                    <button className="text-edge-indigo hover:text-edge-indigo-glow">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="text-xl font-semibold text-edge-text mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-edge-teal" />
            Badges
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {user.badges.map((badge, index) => (
              <motion.div key={badge.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + index * 0.05 }} whileHover={{ scale: 1.05 }} className="glass-card p-4 rounded-xl text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-edge-indigo/30 to-edge-teal/30 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-7 h-7 text-edge-teal" />
                </div>
                <h4 className="text-sm font-medium text-edge-text mb-1 truncate">{badge.name}</h4>
                <p className="text-xs text-edge-muted">{new Date(badge.earnedAt).toLocaleDateString()}</p>
              </motion.div>
            ))}

            {[...Array(Math.max(0, 6 - user.badges.length))].map((_, index) => (
              <motion.div key={`locked-${index}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + index * 0.05 }} className="glass-card p-4 rounded-xl text-center opacity-50">
                <div className="w-14 h-14 rounded-xl bg-edge-bg-elevated border border-edge-border border-dashed flex items-center justify-center mx-auto mb-3">
                  <Award className="w-7 h-7 text-edge-muted" />
                </div>
                <p className="text-xs text-edge-muted">Locked Badge</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-12 glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-edge-text mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-edge-warning" />
            Achievement Progress
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Courses', current: user.completedCourses.length, total: 42 },
              { label: 'Quizzes', current: 12, total: 35 },
              { label: 'Certificates', current: user.certificates.length, total: 10 },
              { label: 'Badges', current: user.badges.length, total: 15 },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-xl bg-edge-bg-elevated">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-edge-text-secondary">{item.label}</span>
                  <span className="text-sm font-medium text-edge-indigo">{item.current}/{item.total}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${(item.current / item.total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
