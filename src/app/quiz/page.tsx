'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/store/quiz-store';
import TypeQuestion from '@/components/quiz/TypeQuestion';
import MainPassionQuestion from '@/components/quiz/MainPassionQuestion';
import SimpleQuestion from '@/components/quiz/SimpleQuestion';
import QuestionWrapper from '@/components/quiz/QuestionWrapper';
import type { MainPassionQuestion as MainPassionQuestionType, SimplePassionQuestion, ConvenienceQuestion } from '@/lib/questions';
import QuizProgressBar from '@/components/quiz/QuizProgressBar';
import { Loader2 } from 'lucide-react';
import EnhancedBackButton from '@/components/back-button';
import Link from 'next/link';

export default function QuizPage() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  const { 
    startQuiz,
    getCurrentQuestion, 
    isCompleted,
    generateCode,
  } = useQuizStore();

  useEffect(() => {
    startQuiz();
  }, [startQuiz]);

  useEffect(() => {
    if (isCompleted && !isRedirecting) {
      setIsRedirecting(true);
      const code = generateCode();
      localStorage.setItem('quizResultCode', code);
      router.push('/quiz/processing');
    }
  }, [isCompleted, router, generateCode, isRedirecting]);

  const currentQuestion = getCurrentQuestion();
  
  if (isRedirecting || !currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'type':
        return <TypeQuestion question={currentQuestion} />;
      case 'mainPassion':
        return <MainPassionQuestion question={currentQuestion} />;
      case 'simplePassion':
      case 'convenience':
        return <SimpleQuestion question={currentQuestion as SimplePassionQuestion | ConvenienceQuestion} />;
      default:
        return <div>Loading next question...</div>;
    }
  };

  const themeColor = currentQuestion.type === 'mainPassion' || currentQuestion.type === 'simplePassion' ? currentQuestion.themeColor : undefined;

  return (
    <div className="flex flex-col min-h-screen">
      {/* DESKTOP: Keep original positioning */}
      <div className="absolute top-4 left-2 z-20 hidden md:block">
        <EnhancedBackButton />

      </div>
      
      {/* MOBILE: Separate layout */}
      <div className="md:hidden absolute top-[100px] left-0  z-20 w-12 h-12 flex items-center justify-between">
        <EnhancedBackButton />
      
        {/* Empty div for spacing balance */}
        <div className="w-10"></div>
      </div>
      
      <QuizProgressBar />
      
      <QuestionWrapper themeColor={themeColor}>
        {renderQuestion()}
      </QuestionWrapper>
    </div>
  );
}