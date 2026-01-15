import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn('text-primary font-black text-6xl md:text-8xl tracking-tighter', className)}>
    Welcome
  </div>
);
