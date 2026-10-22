import type { PillarInfo, Course, Badge, Certificate, PlacementQuestion, LearningPath } from '../types';

export const pillars: PillarInfo[] = [
  {
    id: 'web3-fundamentals',
    name: 'Web3 Fundamentals',
    description: 'Master the core concepts of blockchain, decentralization, and Web3 architecture',
    icon: 'Globe',
    courses: 8,
    color: 'indigo',
  },
  {
    id: 'ecosystem-foundations',
    name: 'Ecosystem Foundations',
    description: 'Understand the building blocks, protocols, and infrastructure of the ecosystem',
    icon: 'Layers',
    courses: 6,
    color: 'teal',
  },
  {
    id: 'product-literacy',
    name: 'Product Literacy',
    description: 'Navigate products, understand features, and maximize ecosystem utility',
    icon: 'Package',
    courses: 7,
    color: 'purple',
  },
  {
    id: 'governance-dao',
    name: 'Governance & DAO',
    description: 'Participate in decentralized governance and understand DAO mechanics',
    icon: 'Vote',
    courses: 5,
    color: 'indigo',
  },
  {
    id: 'network-growth',
    name: 'Network Growth & Leadership',
    description: 'Build communities, lead initiatives, and grow the ecosystem',
    icon: 'Users',
    courses: 6,
    color: 'teal',
  },
  {
    id: 'security-risk',
    name: 'Security & Risk Control',
    description: 'Protect assets, understand threats, and practice safe Web3 navigation',
    icon: 'Shield',
    courses: 9,
    color: 'purple',
  },
];

export const featuredCourses: Course[] = [
  {
    id: 'web3-101',
    name: 'Introduction to Web3',
    description: 'Your gateway to understanding the decentralized web and its revolutionary potential',
    pillar: 'web3-fundamentals',
    lessons: [],
    xpReward: 500,
    duration: '2 hours',
    difficulty: 'Beginner',
  },
  {
    id: 'dao-governance',
    name: 'DAO Governance Essentials',
    description: 'Learn how decentralized autonomous organizations make decisions',
    pillar: 'governance-dao',
    lessons: [],
    xpReward: 750,
    duration: '3 hours',
    difficulty: 'Familiar',
  },
  {
    id: 'security-basics',
    name: 'Web3 Security Fundamentals',
    description: 'Essential knowledge to protect yourself in the decentralized world',
    pillar: 'security-risk',
    lessons: [],
    xpReward: 600,
    duration: '2.5 hours',
    difficulty: 'Beginner',
  },
];

export const sampleBadges: Badge[] = [
  {
    id: 'early-adopter',
    name: 'Early Adopter',
    description: 'Joined the EDGE platform during the beta phase',
    icon: 'Rocket',
    earnedAt: new Date('2024-01-15'),
    category: 'achievement',
  },
  {
    id: 'quick-learner',
    name: 'Quick Learner',
    description: 'Completed first course in under 24 hours',
    icon: 'Zap',
    earnedAt: new Date('2024-02-01'),
    category: 'milestone',
  },
  {
    id: 'quiz-master',
    name: 'Quiz Master',
    description: 'Achieved 100% on 5 consecutive quizzes',
    icon: 'Award',
    earnedAt: new Date('2024-02-15'),
    category: 'skill',
  },
];

export const sampleCertificates: Certificate[] = [
  {
    id: 'cert-web3-101',
    name: 'Web3 Fundamentals Certificate',
    courseId: 'web3-101',
    issuedAt: new Date('2024-02-01'),
    transactionHash: '0x7f8...3a2b',
    verified: true,
  },
  {
    id: 'cert-security',
    name: 'Security Essentials Certificate',
    courseId: 'security-basics',
    issuedAt: new Date('2024-02-20'),
    transactionHash: '0x9c4...1d5e',
    verified: true,
  },
];

export const learningPaths: LearningPath[] = [
  {
    id: 'path-web3-explorer',
    name: 'Web3 Explorer',
    description: 'Start your journey into the decentralized world',
    pillar: 'web3-fundamentals',
    courses: featuredCourses.slice(0, 2),
    progress: 65,
    totalXp: 1250,
  },
  {
    id: 'path-security-pro',
    name: 'Security Pro Track',
    description: 'Become a guardian of Web3 security',
    pillar: 'security-risk',
    courses: [featuredCourses[2]],
    progress: 30,
    totalXp: 600,
  },
];

export const placementQuestions: PlacementQuestion[] = [
  {
    id: 'q1',
    question: 'How familiar are you with blockchain technology concepts?',
    options: [
      { id: 'a', text: 'New to blockchain - want to learn from basics' },
      { id: 'b', text: 'Understand basics like wallets and transactions' },
      { id: 'c', text: 'Comfortable with smart contracts and DeFi' },
      { id: 'd', text: 'Advanced - I build or actively govern protocols' },
    ],
    category: 'blockchain',
  },
  {
    id: 'q2',
    question: 'What best describes your experience with decentralized governance?',
    options: [
      { id: 'a', text: 'I have never participated in a DAO' },
      { id: 'b', text: 'I have voted in DAO proposals a few times' },
      { id: 'c', text: 'I actively follow and participate in governance' },
      { id: 'd', text: 'I lead or delegate in DAO governance' },
    ],
    category: 'governance',
  },
  {
    id: 'q3',
    question: 'How do you approach learning new technical concepts?',
    options: [
      { id: 'a', text: 'I prefer structured, step-by-step tutorials' },
      { id: 'b', text: 'I learn by doing - hands-on practice' },
      { id: 'c', text: 'I dive deep into documentation and resources' },
      { id: 'd', text: 'I can figure things out with minimal guidance' },
    ],
    category: 'learning-style',
  },
  {
    id: 'q4',
    question: 'What describes your Web3 security knowledge?',
    options: [
      { id: 'a', text: 'I need help understanding how to protect my assets' },
      { id: 'b', text: 'I know basics like seed phrases and hardware wallets' },
      { id: 'c', text: 'I can identify common scam patterns and risks' },
      { id: 'd', text: 'I understand advanced security like multisig and contract audits' },
    ],
    category: 'security',
  },
  {
    id: 'q5',
    question: 'What is your primary goal in the Web3 ecosystem?',
    options: [
      { id: 'a', text: 'Learn fundamentals to participate confidently' },
      { id: 'b', text: 'Grow my network and find opportunities' },
      { id: 'c', text: 'Contribute to projects and governance' },
      { id: 'd', text: 'Lead initiatives and mentor others' },
    ],
    category: 'goals',
  },
];

export const sampleLesson = {
  id: 'lesson-1',
  title: 'What is Web3?',
  content: `
Web3 represents the next generation of the internet - a decentralized web where users own their data, identity, and digital assets.

Unlike Web2, where large corporations control platforms and data, Web3 puts power back into the hands of users through blockchain technology and decentralized protocols.

## Key Characteristics

- **Decentralization**: No single entity controls the network
- **Permissionless**: Anyone can participate without approval
- **Trustless**: Smart contracts replace traditional intermediaries
- **Ownable**: Users truly own their digital assets and identity

## Why It Matters

Web3 enables new forms of:
- Digital ownership (NFTs)
- Financial services (DeFi)
- Organizational structures (DAOs)
- Community governance

The transition from Web2 to Web3 isn't just technological - it's a fundamental shift in how we organize, transact, and interact online.
  `,
  keyTakeaways: [
    'Web3 is a decentralized internet powered by blockchain',
    'Users own and control their data and digital assets',
    'Smart contracts enable trustless, automated interactions',
    'New organizational models like DAOs are possible',
  ],
};

export const sampleQuiz = {
  id: 'quiz-1',
  question: 'A new community member asks you about a "too good to be true" investment opportunity in a private message. What is the most responsible action?',
  type: 'scenario' as const,
  options: [
    { id: 'a', text: 'Share the opportunity immediately - community helps each other', icon: 'Share2' },
    { id: 'b', text: 'Ignore the message and block the sender', icon: 'X' },
    { id: 'c', text: 'Research the opportunity, then guide the member to official channels and security resources', icon: 'Search' },
    { id: 'd', text: 'Tell them it sounds like a scam without explanation', icon: 'AlertTriangle' },
  ],
  correctAnswer: 'c',
  explanation: 'The best approach is to research first, then educate. This protects the community member while also helping them learn security best practices. Directing to official channels ensures they get verified information.',
};
