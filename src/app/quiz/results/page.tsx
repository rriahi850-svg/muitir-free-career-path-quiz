// app/results/page.tsx - COMPLETE UPDATED VERSION
'use client';

import { findBestMatch } from '@/lib/career-matcher';
import { careers } from '@/lib/careers';
import { useEffect, useState } from 'react';
import ResultsDisplay from '@/components/quiz/ResultsDisplay';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle, Loader2 } from 'lucide-react';
import PreResultsAdOverlay from '@/components/ads/PreResultsAdOverlay'; 

function ErrorDisplay({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <Card className="max-w-lg text-center bg-card/70 backdrop-blur-sm border-2 border-border/50">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <AlertTriangle className="w-12 h-12 text-destructive" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xl">{message}</p>
          <Button asChild>
            <Link href="/quiz">Start Over</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function LoadingDisplay() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <Loader2 className="h-12 w-12 animate-spin" />
      
    </div>
  );
}

const getFallbackCareer = (userType: string): any => {
  const typeMap = {
    'C': {
      code: "C000000000000000",
      title: "Creative Professional",
      description: "Your creative thinking and need for expression suggest success in artistic or design-oriented fields like graphic design, writing, or content creation.",
      benefits: ["Creative expression", "Flexible work", "Visual impact"]
    },
    'P': {
      code: "P000000000000000",
      title: "Hands-On Specialist",
      description: "Your preference for physical work and tangible results indicates strength in skilled trades, technical work, or performance-based careers.",
      benefits: ["Tangible results", "Active work", "Skill mastery"]
    },
    'S': {
      code: "S000000000000000",
      title: "Analytical Professional",
      description: "Your analytical thinking and problem-solving orientation suggest success in technical, scientific, or data-driven fields.",
      benefits: ["Intellectual challenge", "Problem-solving", "Technical expertise"]
    },
    'N': {
      code: "N000000000000000",
      title: "Versatile Professional",
      description: "Your balanced approach suggests adaptability across various roles requiring both technical and interpersonal skills.",
      benefits: ["Versatility", "Team collaboration", "Diverse opportunities"]
    }
  };
  
  return typeMap[userType as keyof typeof typeMap] || typeMap['N'];
};

export default function ResultsPage() {
  const [matchedCareer, setMatchedCareer] = useState<any>(null);
  const [userCode, setUserCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAdOverlay, setShowAdOverlay] = useState(true); 
  useEffect(() => {
    console.log('ResultsPage: Starting match process...');
    
    const resultCode = localStorage.getItem('quizResultCode');
    console.log('Retrieved code from localStorage:', resultCode);
    
    if (!resultCode) {
      console.error('No quizResultCode found in localStorage');
      setError("No quiz results found. Please take the quiz first.");
      setIsLoading(false);
      return;
    }
    
    setUserCode(resultCode);
    
    
    
    if (resultCode.length < 15) {
      console.error('Invalid code length:', resultCode.length);
      setError("Invalid quiz results. Please take the quiz again.");
      setIsLoading(false);
      return;
    }
    
    console.log('Calling findBestMatch with code:', resultCode);
    console.log('Number of careers available:', careers.length);
    
    try {
      const career = findBestMatch(resultCode, careers);
      console.log('findBestMatch returned:', career);
      
      if (!career) {
        console.warn('No match found, using fallback');
        const userType = resultCode[0];
        const fallback = getFallbackCareer(userType);
        setMatchedCareer(fallback);
      } else {
        if (!career.title || !career.description) {
          console.error('Career missing properties:', career);
          const userType = resultCode[0];
          const fallback = getFallbackCareer(userType);
          setMatchedCareer(fallback);
        } else {
          console.log('Setting matched career:', career.title);
          setMatchedCareer(career);
        }
      }
      
      setIsLoading(false);
      
    } catch (err) {
      console.error('Error in findBestMatch:', err);
      const userType = resultCode[0];
      const fallback = getFallbackCareer(userType);
      setMatchedCareer(fallback);
      setIsLoading(false);
    }
    return () => {
  localStorage.removeItem('quizResultCode');
};
  }, []);

  if (isLoading) return <LoadingDisplay />;
  
  if (error) return <ErrorDisplay message={error} />;
  
  if (!matchedCareer) {
    return <ErrorDisplay message="No career match found. Please try the quiz again." />;
  }
  
  console.log('Rendering with:', {
    hasCareer: !!matchedCareer,
    title: matchedCareer?.title,
    description: matchedCareer?.description,
    code: userCode
  });
  
  return (
    <>
      {showAdOverlay && (
        <PreResultsAdOverlay
          slotId="YOUR_PRE_RESULTS_AD_SLOT" 
          onClose={() => setShowAdOverlay(false)}
        />
      )}
      {!showAdOverlay && (
        <div 
          className="flex items-center justify-center min-h-screen p-4 md:p-8 bg-gradient-to-br from-background to-secondary/20 animate-fade-in"
          data-theme={userCode?.[0] || 'N'}
        >
          <ResultsDisplay 
            career={matchedCareer} 
            code={userCode || matchedCareer.code} 
          />
        </div>
      )}
    </>
  );
}
