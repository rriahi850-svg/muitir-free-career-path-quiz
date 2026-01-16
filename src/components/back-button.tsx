'use client';
import { ArrowLeft, Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useQuizStore } from '@/store/quiz-store';
import { usePathname } from 'next/navigation';

type EnhancedBackButtonProps = {
  href?: string;
  showReset?: boolean;
};

export default function EnhancedBackButton({ 
  href = '/', 
  showReset = true 
}: EnhancedBackButtonProps) {
  const router = useRouter();
  const pathname = usePathname(); 
  const isQuizPage = pathname.includes('/quiz'); 

  if (!isQuizPage) {
    return (
      <Button
        variant="outline"
        size="icon"
        onClick={() => router.push(href)}
        className="rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all group h-12 w-12 shadow-lg"
      >
        <ArrowLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
        <span className="sr-only">Go Back</span>
      </Button>
    );
  }


  const { 
    goToPreviousQuestion, 
    resetCurrentAnswer,
    canGoBack,
    getCurrentQuestion,
    answers,
    mainQuestionIndex,
    simpleQuestionIndex
  } = useQuizStore();

  const handleGoBack = () => {
    if (canGoBack()) {
      goToPreviousQuestion();
    } else {
      router.push(href);
    }
  };

  const handleResetCurrent = () => {
    resetCurrentAnswer();
  };
  const hasCurrentAnswer = () => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return false;
    return answers.length > 0 && (mainQuestionIndex > 0 || simpleQuestionIndex >= 0);
  };

  return (
    <div className="absolute top-12.5 left-4 z-50 w-12 h-12 flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleGoBack}
        className="rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all group h-12 w-12 shadow-lg"
        disabled={!canGoBack()}
      >
        <ArrowLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
        <span className="sr-only">Go Back</span>
      </Button>
    </div>
  );
}
