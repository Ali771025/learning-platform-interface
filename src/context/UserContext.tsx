import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { User, UserLevel, Badge, Certificate } from '../types';
import { sampleBadges, sampleCertificates, learningPaths } from '../data/mockData';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  addXp: (amount: number) => void;
  addBadge: (badge: Badge) => void;
  addCertificate: (cert: Certificate) => void;
  updateProgress: (pathId: string, progress: number) => void;
  calculateLevel: (answers: Record<string, string>) => UserLevel;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    id: 'user-1',
    level: 'Familiar',
    xp: 2450,
    xpToNextLevel: 5000,
    completedCourses: ['web3-101', 'security-basics'],
    badges: sampleBadges,
    certificates: sampleCertificates,
    activePath: learningPaths[0],
    createdAt: new Date('2024-01-15'),
  });

  const addXp = useCallback((amount: number) => {
    setUser(prev => {
      if (!prev) return null;
      const newXp = prev.xp + amount;
      const levelUp = newXp >= prev.xpToNextLevel;
      return {
        ...prev,
        xp: levelUp ? newXp - prev.xpToNextLevel : newXp,
        xpToNextLevel: levelUp ? Math.floor(prev.xpToNextLevel * 1.5) : prev.xpToNextLevel,
        level: levelUp ? getNextLevel(prev.level) : prev.level,
      };
    });
  }, []);

  const addBadge = useCallback((badge: Badge) => {
    setUser(prev => {
      if (!prev) return null;
      return { ...prev, badges: [...prev.badges, badge] };
    });
  }, []);

  const addCertificate = useCallback((cert: Certificate) => {
    setUser(prev => {
      if (!prev) return null;
      return { ...prev, certificates: [...prev.certificates, cert] };
    });
  }, []);

  const updateProgress = useCallback((pathId: string, progress: number) => {
    setUser(prev => {
      if (!prev || !prev.activePath) return null;
      return {
        ...prev,
        activePath:
          prev.activePath.id === pathId
            ? { ...prev.activePath, progress }
            : prev.activePath,
      };
    });
  }, []);

  const calculateLevel = useCallback((answers: Record<string, string>): UserLevel => {
    const scores: Record<string, number> = { a: 1, b: 2, c: 3, d: 4 };
    const total = Object.values(answers).reduce((sum, answer) => sum + (scores[answer] || 0), 0);
    const avg = total / Object.keys(answers).length;

    if (avg <= 1.5) return 'Beginner';
    if (avg <= 2.5) return 'Familiar';
    if (avg <= 3.5) return 'Experienced';
    return 'Expert';
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, addXp, addBadge, addCertificate, updateProgress, calculateLevel }}
    >
      {children}
    </UserContext.Provider>
  );
}

function getNextLevel(level: UserLevel): UserLevel {
  const levels: UserLevel[] = ['Beginner', 'Familiar', 'Experienced', 'Expert'];
  const index = levels.indexOf(level);
  return index < levels.length - 1 ? levels[index + 1] : level;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
