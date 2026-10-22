import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Target, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, TrendingUp, BookOpen, Award, Zap } from 'lucide-react';
import { placementQuestions } from '../data/mockData';
import { useUser } from '../context/UserContext';

export function PlacementTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const { user, setUser, calculateLevel } = useUser();
  const navigate = useNavigate();

  const question = placementQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / placementQuestions.length) * 100;
  const isLastQuestion = currentQuestion === placementQuestions.length - 1;

  const handleAnswer = (optionId: string) => setAnswers(prev => ({ ...prev, [question.id]: optionId }));

  const handleNext = () => {
    if (!answers[question.id]) return;
    if (isLastQuestion) {
      const level = calculateLevel(answers);
      if (user) setUser({ ...user, level });
      setShowResult(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1);
  };

  const getResultLevel = () => calculateLevel(answers);
  const getResultIcon = () => {
    const level = getResultLevel();
    switch (level) {
      case 'Beginner': return BookOpen;
      case 'Familiar': return Target;
      case 'Experienced': return TrendingUp;
      case 'Expert': return Award;
      default: return Target;
    }
  };
  const getResultColor = () => {
    const level = getResultLevel();
    switch (level) {
      case 'Beginner': return 'from-edge-teal to-edge-indigo';
      case 'Familiar': return 'from-edge-indigo to-edge-purple';
      case 'Experienced': return 'from-edge-purple to-edge-indigo';
      case 'Expert': return 'from-edge-indigo via-edge-purple to-edge-teal';
      default: return 'from-edge-indigo to-edge-teal';
    }
  };

  return (
    <div className="min-h-screen bg-edge-bg flex items-center justify-center p-4">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-edge-indigo/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-edge-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-edge-purple/5 rounded-full blur-3xl" />
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 w-full max-w-2xl">
        {!showResult ? (
          <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-edge-indigo/20 to-edge-teal/20 border-b border-edge-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-edge-indigo to-edge-teal flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-edge-text">Placement Test</h2>
                    <p className="text-sm text-edge-muted">Question {currentQuestion + 1} of {placementQuestions.length}</p>
                  </div>
                </div>
                <span className="text-sm text-edge-indigo font-medium">{Math.round(progress)}%</span>
              </div>
              <div className="progress-bar h-2">
                <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div key={question.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-xl font-semibold text-edge-text mb-6">{question.question}</h3>

                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <motion.button key={option.id} onClick={() => handleAnswer(option.id)} className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-4 ${answers[question.id] === option.id ? 'bg-edge-indigo/20 border-2 border-edge-indigo text-edge-text' : 'bg-edge-bg-elevated border border-edge-border text-edge-text-secondary hover:border-edge-border-active hover:text-edge-text'}`} whileHover={{ scale: answers[question.id] ? 1 : 1.01 }} whileTap={{ scale: 0.99 }}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${answers[question.id] === option.id ? 'bg-edge-indigo text-white' : 'bg-edge-bg border border-edge-border text-edge-muted'}`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="flex-1">{option.text}</span>
                        {answers[question.id] === option.id && <CheckCircle2 className="w-5 h-5 text-edge-indigo" />}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-edge-border">
                <button onClick={handleBack} disabled={currentQuestion === 0} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${currentQuestion === 0 ? 'text-edge-muted opacity-50 cursor-not-allowed' : 'text-edge-text-secondary hover:text-edge-text hover:bg-edge-bg-elevated'}`}>
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button onClick={handleNext} disabled={!answers[question.id]} className={`btn-primary ${!answers[question.id] ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  {isLastQuestion ? <>See Results<Sparkles className="w-4 h-4 ml-2" /></> : <>Next<ChevronRight className="w-4 h-4 ml-2" /></>}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-3xl overflow-hidden shadow-2xl text-center">
            <div className="p-8 sm:p-12">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${getResultColor()} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                {(() => {
                  const Icon = getResultIcon();
                  return <Icon className="w-12 h-12 text-white" />;
                })()}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <p className="text-sm text-edge-muted mb-2">Your Web3 Level</p>
                <h2 className="text-4xl font-bold gradient-text mb-4">{getResultLevel()}</h2>
                <p className="text-edge-text-secondary mb-8 max-w-md mx-auto">
                  {getResultLevel() === 'Beginner' && "You're just starting your Web3 journey. We'll guide you through the fundamentals step by step."}
                  {getResultLevel() === 'Familiar' && "You have a solid foundation in Web3. Let's deepen your understanding with intermediate concepts."}
                  {getResultLevel() === 'Experienced' && "You're well-versed in Web3. Focus on advanced topics and ecosystem leadership."}
                  {getResultLevel() === 'Expert' && "You're ready for expert-level content and community leadership roles."}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="glass p-4 rounded-xl">
                    <p className="text-2xl font-bold text-edge-indigo">{placementQuestions.length}</p>
                    <p className="text-xs text-edge-muted">Questions</p>
                  </div>
                  <div className="glass p-4 rounded-xl">
                    <p className="text-2xl font-bold text-edge-teal">{Object.keys(answers).length}</p>
                    <p className="text-xs text-edge-muted">Answered</p>
                  </div>
                  <div className="glass p-4 rounded-xl">
                    <p className="text-2xl flex items-center justify-center"><Zap className="w-6 h-6 text-edge-purple" /></p>
                    <p className="text-xs text-edge-muted">XP Bonus</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={() => navigate('/dashboard')} className="btn-primary w-full sm:w-auto">
                    Go to Dashboard
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                  <button onClick={() => navigate('/learn')} className="btn-secondary w-full sm:w-auto">
                    Browse Courses
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
