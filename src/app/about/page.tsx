// app/about/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Users, Zap, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                About MuItir
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              The most advanced career discovery platform using our proprietary character coding system.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full border-primary/30">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 shadow-xl shadow-primary/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/20">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To revolutionize career discovery by moving beyond generic personality tests. We match individuals with careers based on a unique combination of personality type, passion domains, and work preferences — all encoded in your personal Career Code.
            </p>
          </div>

          <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 shadow-xl shadow-primary/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/20">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">The Science</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our proprietary algorithm analyzes 4 personality archetypes, 6 passion domains, and 8 workstyle preferences to generate over 120 unique career codes. Each code represents a specific career profile with proven growth potential.
            </p>
          </div>
        </div>
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">How Our System Works</h2>
            <p className="text-muted-foreground">Your unique career code is built in three intelligent phases</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[hsla(282, 83%, 5%, 1.00)] mb-4">
                <span className="text-2xl font-bold text-[hsl(316,75%,65%)]">1</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Personality Type</h3>
              <p className="text-muted-foreground">
                Identify as Creative (C), Physical/Performer (P), Smart (S), or Balanced (N) — the foundation of your career path.
              </p>
            </div>

            <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[hsla(120, 50%, 1%, 1.00)] mb-4">
                <span className="text-2xl font-bold text-[hsl(145,63%,49%)]">2</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Passion Domains</h3>
              <p className="text-muted-foreground">
                Explore 6 key passion areas with detailed follow-up questions to pinpoint your true interests.
              </p>
            </div>

            <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[hsla(190, 67%, 4%, 1.00)] mb-4">
                <span className="text-2xl font-bold text-[hsl(204,91%,58%)]">3</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Work Preferences</h3>
              <p className="text-muted-foreground">
                8 critical questions about your ideal work environment, team size, and daily work style.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card/30 rounded-3xl p-8 mb-16 border border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">120+</div>
              <div className="text-muted-foreground">Career Profiles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Personality Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Passion Domains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Work Preferences</div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
          </div>
          <div className="bg-card/40 rounded-3xl p-8 border border-border/50">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              MuItir was born from a simple observation: traditional career tests offer generic advice that rarely leads to fulfilling careers. As a developer passionate about both technology and psychology, I created this system to bridge the gap between personality assessment and real-world career opportunities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every career in our database is carefully researched for growth potential, market demand, and alignment with specific personality codes. We focus on careers with real futures — not just any job, but the right job for you.
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Discover Your Career Code?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join us to find your ideal career path through our unique assessment system.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/">
                Start Free Assessment
              </Link>
            </Button>
          </div>
        </div>

       
      </div>
    </main>
  );
}
