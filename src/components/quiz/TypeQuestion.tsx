'use client';
import { useQuizStore } from '@/store/quiz-store';
import { Button } from '@/components/ui/button';
import type { TypeQuestion as TypeQuestionType } from '@/lib/questions';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function TypeQuestion({ question }: { question: TypeQuestionType }) {
  const answerQuestion = useQuizStore((state) => state.answerQuestion);
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    answerQuestion(answer, (code) => {
      router.push(`/quiz/processing?code=${code}`);
    });
  };

  return (
    <Card className="bg-card/70 backdrop-blur-sm border-2 border-border/50 animate-fade-in">
        <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold">{question.text}</CardTitle>
            <CardDescription>This helps us understand your core personality.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto">
                {question.options.map((option) => (
                <Button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="h-20 rounded-lg shadow-md hover:scale-105 transition-transform text-base whitespace-normal flex items-center justify-center"
                    variant="secondary"
                >
                    {option.label}
                </Button>
                ))}
            </div>
        </CardContent>
    </Card>
  );
}
