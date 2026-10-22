import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, LayoutDashboard, BookOpen, Award, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useUser } from '../context/UserContext';

export function Header() {
  const { user } = useUser();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/learn', label: 'Learn', icon: BookOpen },
    { path: '/credentials', label: 'Credentials', icon: Award },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="w-10 h-10 rounded-lg bg-gradient-to-br from-edge-indigo to-edge-teal flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">EDGE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-edge-indigo/20 text-edge-indigo border border-edge-indigo/30' : 'text-edge-text-secondary hover:text-edge-text hover:bg-edge-bg-elevated'}`}>
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-edge-bg-elevated border border-edge-border">
                <div className="text-right">
                  <p className="text-sm font-medium text-edge-text">{user.level}</p>
                  <p className="text-xs text-edge-muted">{user.xp.toLocaleString()} XP</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-edge-indigo to-edge-teal flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{user.level.charAt(0)}</span>
                </div>
              </div>
            ) : (
              <Link to="/placement" className="btn-primary">Get Started</Link>
            )}
          </div>

          <button className="md:hidden p-2 text-edge-text-secondary hover:text-edge-text" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden glass border-t border-edge-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg text-edge-text-secondary hover:text-edge-text hover:bg-edge-bg-elevated">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            {!user && (
              <Link to="/placement" onClick={() => setMobileMenuOpen(false)} className="block text-center btn-primary mt-4">
                Get Started
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-edge-bg">
      {!isLandingPage && <Header />}
      <main className={isLandingPage ? '' : 'pt-16'}>{children}</main>
      <AIAgent isOpen={isAgentOpen} setIsOpen={setIsAgentOpen} />
    </div>
  );
}

function AIAgent({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) {
  return (
    <motion.div className="fixed bottom-6 right-6 z-50" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: 'spring' }}>
      {isOpen ? (
        <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="w-80 sm:w-96 glass-card rounded-2xl overflow-hidden shadow-glow-indigo">
          <div className="p-4 bg-gradient-to-r from-edge-indigo to-edge-teal flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Ecosystem Agent</h4>
                <p className="text-xs text-white/70">AI-Powered Learning Guide</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="h-72 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-edge-indigo/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-edge-indigo" />
                </div>
                <div className="glass rounded-lg p-3 max-w-[calc(100%-48px)]">
                  <p className="text-sm text-edge-text">Hello! I'm your Ecosystem Agent. I can help you navigate your learning journey, explain Web3 concepts, or guide you through courses. What would you like to explore today?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-edge-border">
            <div className="flex gap-2">
              <input type="text" placeholder="Ask anything about Web3..." className="flex-1 px-4 py-2 bg-edge-bg-elevated border border-edge-border rounded-lg text-sm text-edge-text placeholder-edge-muted focus:outline-none focus:border-edge-indigo" />
              <button className="px-4 py-2 bg-edge-indigo hover:bg-edge-indigo-glow rounded-lg transition-colors">
                <MessageCircle className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)} className="w-14 h-14 rounded-full bg-gradient-to-br from-edge-indigo to-edge-teal shadow-glow-indigo flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </motion.div>
  );
}
