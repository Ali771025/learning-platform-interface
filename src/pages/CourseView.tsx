import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, Clock, Zap, ChevronRight, ChevronLeft, Play, FileText, Award, CheckCircle2, XCircle, AlertTriangle, Share2, Search } from 'lucide-react';
import { featuredCourses, sampleLesson, sampleQuiz } from '../data/mockData';
import { useUser } from '../context/UserContext';

export function CourseView() {
  const { courseId } = useParams();
  const course = featuredCourses.find(c => c.id === courseId);
  const { addXp } = useUser();
  const [activeTab, setActiveTab] = useState<'content' | 'quiz'>('content');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!course) return <div className="min-h-screen flex items-center justify-center"><p className="text-edge-muted">Course not found</p></div>;

  const handleAnswer = (answerId: string) => {
    if (showExplanation) return;
    setSelectedAnswer(answerId);
    setIsCorrect(answerId === sampleQuiz.correctAnswer);
    setShowExplanation(true);
    if (answerId === sampleQuiz.correctAnswer) addXp(100);
  };

  const getOptionIcon = (optionId: string) => {
    switch (optionId) {
      case 'a': return Share2;
      case 'b': return XCircle;
      case 'c': return Search;
      case 'd': return AlertTriangle;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-edge-bg">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-edge-indigo/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="glass border-b border-edge-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-edge-muted mb-3">
              <Link to="/learn" className="hover:text-edge-text transition-colors">Learning Center</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to={`/learn/${course.pillar}`} className="hover:text-edge-text transition-colors">{course.pillar.replace('-', ' ').replace(/^\w/, c => c.toUpperCase())}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-edge-text">{course.name}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-edge-text">{course.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`badge ${course.difficulty === 'Beginner' ? 'badge-teal' : course.difficulty === 'Familiar' ? 'badge-indigo' : 'badge-purple'}`}>{course.difficulty}</span>
                  <span className="flex items-center gap-1 text-sm text-edge-muted">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-edge-indigo">
                    <Zap className="w-4 h-4" />
                    {course.xpReward} XP
                  </span>
                </div>
              </div>
              <span className="badge badge-indigo">Lesson 1/5</span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-2 rounded-xl inline-flex">
                <button onClick={() => setActiveTab('content')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'content' ? 'bg-edge-indigo text-white' : 'text-edge-text-secondary hover:text-edge-text'}`}>
                  <FileText className="w-4 h-4 inline mr-2" />
                  Content
                </button>
                <button onClick={() => setActiveTab('quiz')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'quiz' ? 'bg-edge-indigo text-white' : 'text-edge-text-secondary hover:text-edge-text'}`}>
                  <Award className="w-4 h-4 inline mr-2" />
                  Quiz
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'content' ? (
                  <motion.div key="content" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-card rounded-2xl overflow-hidden">
                    <div className="aspect-video bg-edge-bg-elevated flex items-center justify-center border-b border-edge-border">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-edge-indigo/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-edge-indigo/30 transition-colors">
                          <Play className="w-8 h-8 text-edge-indigo ml-1" />
                        </div>
                        <p className="text-sm text-edge-muted">Video content coming soon</p>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h2 className="text-xl font-semibold text-edge-text mb-4">{sampleLesson.title}</h2>
                      <div className="text-edge-text-secondary space-y-4 whitespace-pre-wrap">{sampleLesson.content}</div>

                      <div className="mt-8 p-5 rounded-xl bg-edge-indigo/10 border border-edge-indigo/20">
                        <h3 className="text-sm font-semibold text-edge-indigo mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Key Takeaways
                        </h3>
                        <ul className="space-y-2">
                          {sampleLesson.keyTakeaways.map((takeaway, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-edge-text">
                              <CheckCircle2 className="w-4 h-4 text-edge-teal mt-0.5 flex-shrink-0" />
                              {takeaway}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-edge-border">
                        <button disabled className="flex items-center gap-2 px-4 py-2 text-edge-muted opacity-50">
                          <ChevronLeft className="w-4 h-4" />
                          Previous
                        </button>
                        <button onClick={() => setActiveTab('quiz')} className="btn-primary">
                          Take Quiz
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="quiz" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-card rounded-2xl p-6 sm:p-8">
                    <div className="mb-6">
                      <span className="badge badge-purple mb-2">Scenario Question</span>
                      <h2 className="text-xl font-semibold text-edge-text">{sampleQuiz.question}</h2>
                    </div>

                    <div className="space-y-3">
                      {sampleQuiz.options.map((option) => {
                        const Icon = getOptionIcon(option.id);
                        const isSelected = selectedAnswer === option.id;
                        const isCorrectAnswer = option.id === sampleQuiz.correctAnswer;
                        let borderColor = 'border-edge-border hover:border-edge-border-active';
                        if (showExplanation && isSelected) borderColor = isCorrect ? 'border-edge-success bg-edge-success/10' : 'border-edge-error bg-edge-error/10';
                        else if (showExplanation && isCorrectAnswer) borderColor = 'border-edge-success bg-edge-success/10';

                        return (
                          <motion.button key={option.id} onClick={() => handleAnswer(option.id)} disabled={showExplanation} className={`w-full p-4 rounded-xl border ${borderColor} text-left transition-all flex items-center gap-4`} whileHover={!showExplanation ? { scale: 1.01 } : {}} whileTap={!showExplanation ? { scale: 0.99 } : {}}>
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? isCorrect ? 'bg-edge-success/20' : 'bg-edge-error/20' : 'bg-edge-bg-elevated'}`}>
                              {Icon && <Icon className={`w-5 h-5 ${isSelected ? isCorrect ? 'text-edge-success' : 'text-edge-error' : 'text-edge-muted'}`} />}
                            </div>
                            <span className="text-edge-text">{option.text}</span>
                            {showExplanation && isCorrectAnswer && <CheckCircle2 className="w-5 h-5 text-edge-success ml-auto" />}
                            {showExplanation && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-edge-error ml-auto" />}
                          </motion.button>
                        );
                      })}
                    </div>

                    <AnimatePresence>
                      {showExplanation && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`mt-6 p-4 rounded-xl ${isCorrect ? 'bg-edge-success/10 border border-edge-success/20' : 'bg-edge-warning/10 border border-edge-warning/20'}`}>
                          <p className="text-sm font-medium mb-2 flex items-center gap-2">
                            {isCorrect ? <><CheckCircle2 className="w-4 h-4 text-edge-success" /><span className="text-edge-success">Correct!</span></> : <><AlertTriangle className="w-4 h-4 text-edge-warning" /><span className="text-edge-warning">Not quite right</span></>}
                          </p>
                          <p className="text-sm text-edge-text-secondary">{sampleQuiz.explanation}</p>
                          {isCorrect && <div className="mt-3 flex items-center gap-2 text-sm text-edge-teal"><Zap className="w-4 h-4" />+100 XP earned!</div>}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-edge-border">
                      <button onClick={() => setActiveTab('content')} className="btn-secondary">
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back to Content
                      </button>
                      <button className="btn-primary" disabled={!showExplanation}>
                        Complete Lesson
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-edge-text mb-4">Course Progress</h3>
                <div className="progress-bar mb-2">
                  <div className="progress-fill" style={{ width: '20%' }} />
                </div>
                <p className="text-sm text-edge-muted mb-4">1 of 5 lessons completed</p>

                <div className="space-y-2">
                  {['Introduction to Web3', 'Blockchain Basics', 'Smart Contracts', 'DeFi Overview', 'Final Assessment'].map((lesson, index) => (
                    <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${index === 0 ? 'bg-edge-indigo/10 border border-edge-indigo/20' : index < 1 ? 'bg-edge-success/10' : 'bg-edge-bg-elevated'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${index < 1 ? 'bg-edge-success' : index === 1 ? 'bg-edge-indigo' : 'bg-edge-bg border border-edge-border'}`}>
                        {index < 1 ? <CheckCircle2 className="w-4 h-4 text-white" /> : index === 1 ? <Play className="w-3 h-3 text-white" /> : <span className="text-xs text-edge-muted">{index + 1}</span>}
                      </div>
                      <span className={`text-sm ${index <= 1 ? 'text-edge-text' : 'text-edge-muted'}`}>{lesson}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-edge-text mb-4">Completion Reward</h3>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-edge-indigo/20 to-edge-teal/20 border border-edge-indigo/20">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-edge-indigo to-edge-teal flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-edge-text">{course.name} Certificate</p>
                    <p className="text-xs text-edge-teal">+{course.xpReward} XP</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
