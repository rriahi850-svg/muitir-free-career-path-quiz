import EnhancedBackButton from '@/components/back-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Hand, Heart, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import AdSensePlacement from '@/components/ads/AdSensePlacement';

const steps = [
  {
    icon: <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" />,
    title: 'Discover Your Type',
    description: "First, you'll identify your primary trait.",
  },
  {
    icon: <Heart className="h-5 w-5 md:h-6 md:w-6 text-red-400" />,
    title: 'Explore Your Passions',
    description: 'Answer questions about your interests.',
  },
  {
    icon: <Hand className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />,
    title: 'Define Your Preferences',
    description: "We'll ask about your ideal work environment.",
  },
  {
    icon: <Bot className="h-5 w-5 md:h-6 md:w-6 text-green-400" />,
    title: 'Get Your Career Match',
    description: "We'll find the career that fits you best.",
  },
];

export default function ExplainerPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 animate-fade-in">
      <div className="absolute top-[10px] left-4">
        <EnhancedBackButton href="/" />
      </div>
      <div className="w-full max-w-3xl mt-12">
        <Card className="bg-card/70 backdrop-blur-sm border-2 border-border/50">
          <CardHeader className="text-center p-4 md:p-6">
            <CardTitle className="text-xl md:text-3xl font-bold">How It Works</CardTitle>
            <p className="text-sm md:text-base text-muted-foreground pt-2">A quick journey to your future career.</p>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-background/50">
                  <div className="flex-shrink-0 mt-0.5">{step.icon}</div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <AdSensePlacement 
              slotId="YOUR_FIRST_SLOT_ID"
              format="rectangle"
              className="my-4"
              label="Career Assessment Sponsor"
            />
            <div className="text-center pt-4">
              <Button asChild size="lg" className="rounded-full text-sm md:text-base group shadow-lg shadow-primary/10 px-6">
                <Link href="/quiz">
                  Let's Start
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}