// app/privacy-policy/page.tsx - CREATE THIS NEW FILE
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 p-4 md:p-8">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 md:gap-0">
        <div className="flex items-center gap-3 order-2 md:order-1">
          <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-1 md:mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
          <div className="order-1 md:order-2 ">
            <div className="md:hidden">
    <Button 
      asChild 
      variant="outline" 
      size="icon"
      className="rounded-full border-primary/30 w-12 h-12"
    >
      <Link href="/">
        <ArrowLeft className="h-5 w-5" />
        <span className="sr-only">Back to Home</span>
      </Link>
    </Button>
  </div>
  <div className="hidden md:block">
    <Button 
      asChild 
      variant="outline" 
      className="rounded-full border-primary/30"
    >
      <Link href="/">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
    </Button>
    </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/30 rounded-2xl p-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🇹🇳</div>
            <div>
              <p className="font-medium text-foreground">Tunisian-Based Service</p>
              <p className="text-sm text-muted-foreground">
                This service is operated from Tunisia. Data processing occurs under Tunisian data protection laws.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 shadow-xl shadow-primary/5 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="bg-secondary/20 rounded-xl p-4 border border-border/30">
                <h3 className="font-bold text-foreground mb-2">What We Collect</h3>
                <p>
                  We collect <span className="font-semibold text-primary">ONLY</span> your quiz responses to generate your career code.
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Your answers to career assessment questions</li>
                  <li>Your generated career code</li>
                  <li>Technical data (browser type, device info - automatically collected)</li>
                </ul>
              </div>

              <div className="bg-secondary/20 rounded-xl p-4 border border-border/30">
                <h3 className="font-bold text-foreground mb-2">What We Do NOT Collect</h3>
                <p className="font-semibold text-primary">We do NOT collect any personal information:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>No names or email addresses</li>
                  <li>No phone numbers or addresses</li>
                  <li>No payment information</li>
                  <li>No social media accounts</li>
                  <li>No location tracking data</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>Your quiz responses are used exclusively to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate your unique career code</li>
                <li>Match you with suitable career profiles</li>
                <li>Improve our career matching algorithm (anonymized data)</li>
                <li>Provide you with your career results</li>
              </ul>
              <p className="mt-3 font-semibold text-primary">
                Your responses are anonymous. We cannot identify you personally from your quiz answers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Storage & Security</h2>
            <div className="space-y-3 text-muted-foreground">
              <div className="bg-secondary/20 rounded-xl p-4 border border-border/30">
                <h3 className="font-bold text-foreground mb-2">Data Storage</h3>
                <p>
                  Your quiz responses are processed in real-time to generate your career code. 
                  <span className="font-semibold"> We do not permanently store your individual quiz responses.</span>
                </p>
                <p className="mt-2">
                  Aggregate, anonymous data may be stored for statistical analysis to improve our service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Services</h2>
            <div className="space-y-3 text-muted-foreground">
              <div className="bg-secondary/20 rounded-xl p-4 border border-border/30">
                <h3 className="font-bold text-foreground mb-2">Google AdSense</h3>
                <p>
                  We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your visits to our site and other sites on the internet.
                </p>
                <p className="mt-2">
                  You can opt out of personalized advertising by visiting 
                  <a 
                    href="https://adssettings.google.com" 
                    className="text-primary hover:underline ml-1 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Ads Settings
                  </a>.
                </p>
              </div>
              
              <div className="bg-secondary/20 rounded-xl p-4 border border-border/30">
                <h3 className="font-bold text-foreground mb-2">Analytics</h3>
                <p>
                  We may use analytics services to understand how users interact with our service. 
                  This data is aggregated and anonymous.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>We use cookies for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining your quiz session</li>
                <li>Remembering your progress during the assessment</li>
                <li>Analytics to improve our service</li>
                <li>Ad serving through Google AdSense</li>
              </ul>
              <p className="mt-3">
                You can disable cookies in your browser settings, but this may affect the functionality of the career assessment.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>Since we don't collect personal information, you have limited data rights, but you can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Take the quiz anonymously without providing any personal data</li>
                <li>Clear your browser cookies to remove session data</li>
                <li>Contact us with privacy questions</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Children's Privacy</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Our service is intended for users aged 16 and above. We do not knowingly collect information from children under 16.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                We may update this Privacy Policy periodically. We will notify users of significant changes by updating the "Last updated" date.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <div className="space-y-3 text-muted-foreground">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
                <p>For privacy-related questions:</p>
                <p className="mt-2">
                  <span className="font-bold text-foreground">Email:</span>{' '}
                  <a 
                    href="mailto:muitir250@gmail.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    muitir250@gmail.com
                  </a>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Based in Tunisia • Response within 48 hours
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
            <div className="space-y-3 text-muted-foreground">
              <div className="bg-secondary/20 rounded-xl p-4 border border-border/30">
                <p>
                  This Privacy Policy is governed by the laws of <span className="font-semibold text-primary">Tunisia</span>. 
                  Any disputes shall be resolved in Tunisian courts.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
