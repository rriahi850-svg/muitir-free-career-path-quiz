'use client';
import { useQuizStore } from '@/store/quiz-store';
import { Button } from '@/components/ui/button';
import type { SimplePassionQuestion, ConvenienceQuestion } from '@/lib/questions';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

type SimpleQuestionProps = {
  question: SimplePassionQuestion | ConvenienceQuestion;
};

export default function SimpleQuestion({ question }: SimpleQuestionProps) {
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
            <CardTitle className="text-2xl md:text-3xl font-bold">{question.text}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center gap-4 w-full">
                <Button onClick={() => handleAnswer('1')} className="w-full max-w-sm h-auto py-4 text-md" variant="secondary">{question.options[0]}</Button>
                <Button onClick={() => handleAnswer('2')} className="w-full max-w-sm h-auto py-4 text-md" variant="secondary">{question.options[1]}</Button>
                <Separator className="my-2 max-w-sm" />
                <Button onClick={() => handleAnswer('0')} className="w-full max-w-sm" variant="ghost">Not Sure</Button>
            </div>
        </CardContent>
    </Card>
  );
}
