import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center animate-fade-in">
      <div className="absolute top-1 left-2">
        <img 
        src="/LOGO2.png" 
              alt="MuItir" 
              className="w-40 h-21 mt-[-32px] left-4 object-contain drop-shadow-2xl brightness-110 contrast-110" 
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <Logo />
        <p className="text-xl md:text-2xl text-muted-foreground max-w-md">
          Your ideal career awaits...
        </p>
        <Button asChild size="lg" className="rounded-full group shadow-lg shadow-primary/10 mt-4">
          <Link href="/explainer">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
