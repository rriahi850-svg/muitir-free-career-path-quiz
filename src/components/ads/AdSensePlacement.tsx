'use client';

import { useEffect } from 'react';

interface AdSensePlacementProps {
  slotId: string;
  format?: 'leaderboard' | 'rectangle' | 'auto';
  className?: string;
  label?: string;
}

export default function AdSensePlacement({ 
  slotId, 
  format = 'auto',
  className = '',
  label = 'Advertisement'
}: AdSensePlacementProps) {
  
  useEffect(() => {
    const loadAd = () => {
      try {
        if (typeof window !== 'undefined') {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('AdSense error:', error);
      }
    };

    const timer = setTimeout(loadAd, 100);
    return () => clearTimeout(timer);
  }, [slotId]);

  const styles = {
    leaderboard: { 
      display: 'inline-block', 
      width: '728px', 
      height: '90px' 
    },
    rectangle: { 
      display: 'inline-block', 
      width: '300px', 
      height: '250px' 
    },
    auto: { 
      display: 'block' 
    }
  };

  return (
    <div className={`ad-container my-6 ${className}`}>
      <div className="text-xs text-muted-foreground mb-1 text-center">
        {label}
      </div>
      <div className="flex justify-center">
        <ins
          className="adsbygoogle"
          style={styles[format]}
          data-ad-client="ca-pub-YOUR_PUBLISHER_ID" 
          data-ad-slot={slotId}
          data-ad-format={format === 'auto' ? 'auto' : undefined}
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}
