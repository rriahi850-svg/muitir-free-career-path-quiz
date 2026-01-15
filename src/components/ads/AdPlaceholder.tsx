// components/ads/AdPlaceholder.tsx
interface AdPlaceholderProps {
  format: 'rectangle' | 'leaderboard';
  className?: string;
}

export function AdPlaceholder({ format, className }: AdPlaceholderProps) {
  const dimensions = {
    rectangle: 'w-[300px] h-[250px]',
    leaderboard: 'w-[728px] h-[90px]'
  };

  return (
    <div className={`${dimensions[format]} ${className} bg-gradient-to-br from-card to-card/50 border-2 border-dashed border-border/50 rounded-xl flex items-center justify-center`}>
      <div className="text-center">
        <div className="text-xs text-muted-foreground">Ad Placement</div>
        <div className="text-[10px] text-muted-foreground/50">
          {format === 'rectangle' ? '300×250' : '728×90'}
        </div>
      </div>
    </div>
  );
}