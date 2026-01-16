'use client';
import { useQuizStore } from '@/store/quiz-store';
import { Progress } from '@/components/ui/progress';

export default function EnhancedProgressBar() {
  const progress = useQuizStore((state) => state.getProgress());
  const currentQuestion = useQuizStore((state) => state.getCurrentQuestionIndex());
  const totalQuestions = useQuizStore((state) => state.getTotalQuestionsCount());
  
  return (
    <div className="w-full px-4 py-3  top-20 left-0 bg-background/80 backdrop-blur-sm z-10 border-b border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-2">
          <div className="text-sm font-medium text-primary">
            {Math.round(progress)}% Complete
          </div>
        </div>
        
        <Progress value={progress} className="w-full h-2" />
        
        <div className="flex justify-between mt-1">
          <div className="text-xs text-muted-foreground">Start</div>
          <div className="text-xs text-muted-foreground">Complete</div>
        </div>
        
        <div className="flex justify-between mt-2 px-1">
          {Array.from({ length: 5 }).map((_, i) => {
            const segmentProgress = i * 25;
            const isActive = progress >= segmentProgress;
            return (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-primary scale-125' : 'bg-border'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
