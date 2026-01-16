'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import AdSensePlacement from '@/components/ads/AdSensePlacement';

export default function ProcessingPage() {
  const router = useRouter();
  const [showAd, setShowAd] = useState(true);

  useEffect(() => {
    const code = localStorage.getItem('quizResultCode');
    
    const timer = setTimeout(() => {
      if (code) {
        router.push('/quiz/results');
      } else {
        router.push('/');
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);
    useEffect(() => {
    const adTimer = setTimeout(() => {
      setShowAd(false);
    }, 3000);
    
    return () => clearTimeout(adTimer);
  }, []);

  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen text-center p-4">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <div className="space-y-2">
      </div>
    </div>
  );
}
