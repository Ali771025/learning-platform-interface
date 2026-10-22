export type UserLevel = 'Beginner' | 'Familiar' | 'Experienced' | 'Expert';

export interface User {
  id: string;
  address?: string;
  level: UserLevel;
  xp: number;
  xpToNextLevel: number;
  completedCourses: string[];
  badges: Badge[];
  certificates: Certificate[];
  activePath?: LearningPath;
  createdAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
  category: string;
}

export interface Certificate {
  id: string;
  name: string;
  courseId: string;
  issuedAt: Date;
  transactionHash?: string;
  verified: boolean;
}

export interface LearningPath {
  id: string;
  name: string;
  description: string;
  pillar: Pillar;
  courses: Course[];
  progress: number;
  totalXp: number;
}

export type Pillar =
  | 'web3-fundamentals'
  | 'ecosystem-foundations'
  | 'product-literacy'
  | 'governance-dao'
  | 'network-growth'
  | 'security-risk';

export interface PillarInfo {
  id: Pillar;
  name: string;
  description: string;
  icon: string;
  courses: number;
  color: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  pillar: Pillar;
  lessons: Lesson[];
  xpReward: number;
  duration: string;
  difficulty: UserLevel;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  keyTakeaways: string[];
  quiz?: Quiz;
}

export interface Quiz {
  id: string;
  question: string;
  type: 'multiple-choice' | 'scenario' | 'true-false';
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizOption {
  id: string;
  text: string;
  icon?: string;
}

export interface PlacementQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  category: string;
}
