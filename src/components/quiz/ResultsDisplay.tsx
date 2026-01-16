'use client';
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import type { Career } from '@/lib/careers';
import { Repeat, Twitter, Facebook, Linkedin, Mail, ThumbsUp, ThumbsDown, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useTransition} from 'react';
import { logUnsatisfiedResult } from '@/lib/feedback';
import { getRelatedCareers } from '@/lib/related-careers';



const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 9v6" />
    <path d="M10.5 9h3" />
    <path d="M10.5 15h3" />
    <path d="M4 7v10a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4Z" />
    <path d="M8 3a4 4 0 0 0-4 4v1" />
    <path d="M16 3a4 4 0 0 1 4 4v1" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

type ResultsDisplayProps = {
  career: Career;
  code: string;
};

export default function ResultsDisplay({ career, code }: ResultsDisplayProps) {
  const [pageUrl, setPageUrl] = useState('');
  const personalityType = code[0] || 'N';
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setPageUrl(window.location.href);
    document.documentElement.setAttribute('data-theme', personalityType);
    
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'career_result_viewed', {
          career_title: career.title,
          personality_type: personalityType,
    });
  }
      return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, [personalityType, career.title]);
   const handleFeedback = (satisfied: boolean) => {
    setFeedbackSubmitted(true);
    if (!satisfied) {
      startTransition(() => {
        logUnsatisfiedResult(code, career.title);
      });
    }
  }; 

  const shareText = `I got "${career.title}" as my ideal career path! Find yours with this quiz.`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(shareText)}&summary=${encodeURIComponent(career.description)}`;
  const threadsShareUrl = `https://www.threads.net/share?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
  const instagramUrl = `https://www.instagram.com`;
  
  const feedbackMailto = `mailto:muitir250@gmail.com?subject=Feedback on Career Quiz (Result: ${career.title})`;

  const openShareWindow = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  return (
    <Card className="w-full max-w-2xl bg-card/70 backdrop-blur-sm border-2 border-border/50 animate-fade-in">
      <CardHeader className="text-center pb-4">
        <CardDescription className="text-white">Your ideal career path is...</CardDescription>
        <CardTitle className="text-center">
          <span className="text-5xl md:text-7xl font-black leading-tight">
            {career.title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-8 p-6">
        <div className="text-left bg-background/50 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Why this fits you:</h3>
          <p className="text-white">{career.description}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="rounded-full group">
            <Link href="/quiz">
              <Repeat className="mr-2 h-4 w-4 transition-transform group-hover:rotate-[-90deg]" />
              Take the Quiz Again
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full group border-border hover:bg-accent hover:text-accent-foreground">
            <Link href={feedbackMailto}>
              <Mail className="mr-2 h-4 w-4" />
              Contact / Feedback
            </Link>
          </Button>
        </div>
       <div className="mt-8 pt-6 border-t border-border/50">
  <h3 className="font-semibold text-lg mb-6 text-white text-center">
    <span className="inline-flex items-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
      Explore Related Careers
    </span>
  </h3>
  
  <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
    {getRelatedCareers(career.title).map((related) => (
      <span 
        key={related}
        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-lg text-sm border border-primary/20 hover:from-primary/15 hover:to-primary/10 transition-all duration-200 cursor-default shadow-sm"
      >
        {related}
      </span>
    ))}
  </div>
  
  {getRelatedCareers(career.title).length === 0 && (
    <div className="text-center mt-4">
      <p className="text-sm text-muted-foreground italic">
        Related careers coming soon!
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        Check back later for more options
      </p>
    </div>
  )}
</div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
      {!feedbackSubmitted ? (
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-white">Are you satisfied with the result?</p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent hover:text-accent-foreground h-12 w-12" onClick={() => handleFeedback(true)} disabled={isPending}>
                <ThumbsUp className="h-6 w-6 text-green-500" />
                <span className="sr-only">Yes</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent hover:text-accent-foreground h-12 w-12" onClick={() => handleFeedback(false)} disabled={isPending}>
                 {isPending ? <Loader2 className="h-6 w-6 animate-spin" /> : <ThumbsDown className="h-6 w-6 text-red-500" />}
                <span className="sr-only">No</span>
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-white h-20 flex items-center">Thank you for your feedback!</p>
        )}
        <div className="w-full">
  <div className="flex items-center justify-between p-4 bg-background/30 rounded-lg mb-4">
    <div>
      <p className="text-sm font-medium text-foreground">Want to explore alternatives?</p>
      <p className="text-xs text-white">Your code matches similar careers</p>
    </div>
    <Button asChild variant="ghost" size="sm" className="rounded-full">
      <Link href="/careers">
        Browse Careers
      </Link>
    </Button>
  </div>
</div>
        <p className="text-sm text-white">Share your result!</p>
        <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent hover:text-accent-foreground" onClick={() => openShareWindow(twitterShareUrl)}>
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Share on Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent hover:text-accent-foreground" onClick={() => openShareWindow(facebookShareUrl)}>
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent hover:text-accent-foreground" onClick={() => openShareWindow(linkedinShareUrl)}>
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">Share on LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent hover:text-accent-foreground" onClick={() => openShareWindow(threadsShareUrl)}>
                <ThreadsIcon className="h-5 w-5" />
                <span className="sr-only">Share on Threads</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent hover:text-accent-foreground" onClick={() => openShareWindow(instagramUrl)}>
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Share on Instagram</span>
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
