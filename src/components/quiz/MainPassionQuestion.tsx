'use client';
import { useQuizStore } from '@/store/quiz-store';
import { Button } from '@/components/ui/button';
import type { MainPassionQuestion as MainPassionQuestionType } from '@/lib/questions';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';


export default function MainPassionQuestion({ question }: { question: MainPassionQuestionType }) {
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
            <div className="flex justify-center items-center gap-4">
                <Button onClick={() => handleAnswer('1')} size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8">Yes</Button>
                <Button onClick={() => handleAnswer('2')} size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">No</Button>
                <Button onClick={() => handleAnswer('0')} size="lg" variant="outline" className="rounded-full px-8">Not Sure</Button>
            </div>
        </CardContent>
    </Card>
  );
}
