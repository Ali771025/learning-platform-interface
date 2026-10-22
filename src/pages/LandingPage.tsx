import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

const features = [
  { icon: BookOpen, title: 'Learn', description: 'Structured courses designed by ecosystem experts', color: 'indigo' },
  { icon: Award, title: 'Validate', description: 'Earn verifiable credentials on-chain', color: 'teal' },
  { icon: Users, title: 'Lead', description: 'Grow your influence in the ecosystem', color: 'purple' },
];

const stats = [
  { label: 'Active Learners', value: '50K+' },
  { label: 'Courses', value: '42' },
  { label: 'Credentials Issued', value: '125K+' },
  { label: 'Partner DAOs', value: '30+' },
];

const benefits = [
  'Personalized learning paths based on your experience',
  'Interactive scenario-based assessments',
  'Blockchain-verified certificates and badges',
  'Real-time progress tracking with XP rewards',
  'AI-powered learning assistant',
  'Community-driven curriculum',
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-edge-bg overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-edge-indigo/10 via-transparent to-transparent opacity-60" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-edge-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-edge-purple/5 rounded-full blur-3xl" />
      </div>

      <nav className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-edge-indigo to-edge-teal flex items-center justify-center shadow-glow-indigo">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">EDGE</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4">
              <Link to="/learn" className="hidden sm:block px-5 py-2.5 text-edge-text-secondary hover:text-edge-text transition-colors font-medium">
                Explore Courses
              </Link>
              <Link to="/placement" className="btn-primary">
                Start Placement Test
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      <section className="relative z-10 pt-12 sm:pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edge-indigo/10 border border-edge-indigo/20 mb-6">
              <Zap className="w-4 h-4 text-edge-indigo" />
              <span className="text-sm font-medium text-edge-indigo">Powered by Web3 Technology</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-edge-text">Learning, Validating,</span>
              <br />
              <span className="gradient-text">and Leading in Web3</span>
            </h1>

            <p className="text-lg sm:text-xl text-edge-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              EDGE is your gateway to mastering the decentralized ecosystem. Learn at your own pace,
              earn verifiable credentials, and grow your influence in the Web3 community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/placement" className="btn-primary text-lg px-8 py-4">
                Start Placement Test
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link to="/learn" className="btn-secondary text-lg px-8 py-4">
                Browse Courses
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-edge-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="max-w-6xl mx-auto px-4 mt-16">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-edge-bg-card to-edge-bg-elevated p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-edge-indigo/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-5 h-5 text-edge-indigo" />
                  </div>
                  <div className="text-2xl font-bold text-edge-text mb-1">Level 4</div>
                  <div className="text-sm text-edge-muted">Current Rank</div>
                </div>
                <div className="glass-card p-6 rounded-xl md:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-edge-muted">Progress to Next Level</span>
                    <span className="text-sm font-medium text-edge-teal">68%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '68%' }} />
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    {['Web3', 'Governance', 'Security'].map(skill => (
                      <span key={skill} className="badge badge-indigo">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 py-20 bg-edge-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-edge-text mb-4">
              Your Journey, <span className="gradient-text">Accelerated</span>
            </h2>
            <p className="text-edge-text-secondary max-w-2xl mx-auto">
              A comprehensive platform designed to take you from curious to confident in the Web3 ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClass = feature.color === 'indigo' ? 'text-edge-indigo bg-edge-indigo/20 border-edge-indigo/30' : feature.color === 'teal' ? 'text-edge-teal bg-edge-teal/20 border-edge-teal/30' : 'text-edge-purple bg-edge-purple/20 border-edge-purple/30';
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card glass-card-hover p-8 rounded-2xl text-center">
                  <div className={`w-16 h-16 rounded-2xl border ${colorClass} flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-edge-text mb-3">{feature.title}</h3>
                  <p className="text-edge-text-secondary">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-edge-text mb-6">
                Everything You Need to <span className="gradient-text">Succeed</span>
              </h2>
              <p className="text-edge-text-secondary mb-8 text-lg leading-relaxed">
                Our platform combines cutting-edge technology with proven educational methodologies
                to deliver an unparalleled learning experience.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-edge-teal flex-shrink-0" />
                    <span className="text-edge-text">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="glass-card rounded-2xl p-1">
                <div className="bg-edge-bg-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-edge-teal" />
                    <span className="font-semibold text-edge-text">On-Chain Verification</span>
                  </div>
                  <div className="glass-card p-6 rounded-xl mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-edge-indigo to-edge-teal flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-edge-muted mb-1">Certificate #12345</div>
                        <div className="text-sm font-medium text-edge-text">Web3 Fundamentals</div>
                        <div className="text-xs text-edge-teal mt-1">Verified on Chain</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-edge-muted bg-edge-bg p-3 rounded-lg overflow-x-auto">
                    0x7f8e...3a2b | Verified: 2024-02-01
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 bg-gradient-to-b from-edge-bg-elevated to-edge-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-edge-text mb-4">
              Ready to Start Your <span className="gradient-text">Journey</span>?
            </h2>
            <p className="text-edge-text-secondary mb-8 text-lg">
              Take our 5-minute placement test to discover your personalized learning path
            </p>
            <Link to="/placement" className="btn-primary text-lg px-10 py-4">
              Begin Placement Test
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 py-8 border-t border-edge-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-edge-indigo" />
              <span className="font-semibold text-edge-text">EDGE</span>
            </div>
            <p className="text-sm text-edge-muted">Educational & Decentralized Growth Engine</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
