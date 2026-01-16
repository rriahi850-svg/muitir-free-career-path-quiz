'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PreResultsAdOverlayProps {
  slotId: string;
  onClose: () => void;
}

export default function PreResultsAdOverlay({ slotId, onClose }: PreResultsAdOverlayProps) {
  const [showAd, setShowAd] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, 12000);
    const loadTimer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        try {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
          setIsLoaded(true);
        } catch (error) {
          console.error('AdSense error:', error);
        }
      }
    }, 500);

    return () => {
      clearTimeout(autoCloseTimer);
      clearTimeout(loadTimer);
    };
  }, [slotId]);

  const handleClose = () => {
    setShowAd(false);
    setTimeout(onClose, 300);
  };

  if (!showAd) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-lg"
        onClick={handleClose}
      />
      
      <div className="relative z-10 bg-card/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/30 shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-300">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-card border border-border shadow-lg hover:bg-destructive hover:text-destructive-foreground transition-all"
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-foreground">Quick Support for Our Free Service</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Your results are ready! A quick ad helps keep this career assessment free.
          </p>
        </div>
        <div className="relative min-h-[250px] bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-3"></div>
                <p className="text-sm text-muted-foreground">Loading advertisement...</p>
              </div>
            </div>
          )}
          <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <ins
              className="adsbygoogle"
              style={{ display: 'block', width: '300px', height: '250px' }}
              data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
              data-ad-slot={slotId}
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div> 
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            Ads support free access to career guidance
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="mt-3 text-sm text-muted-foreground hover:text-foreground"
          >
            Skip and view results immediately
          </Button>
        </div>
      </div>
    </div>
  );
}
