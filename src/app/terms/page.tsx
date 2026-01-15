// app/terms/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Shield, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - FIXED FOR MOBILE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 md:gap-0">
          <div className="flex items-center gap-3 order-2 md:order-1">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <FileText className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Terms of Service
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
           {/* Button on mobile - full width, on desktop back to corner */}
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

        {/* Disclaimer */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="text-yellow-400 font-medium mb-1">Legal Disclaimer</p>
              <p className="text-yellow-500/80 text-sm">
                These Terms are a template. While we strive for accuracy, we recommend consulting with a legal professional for complete compliance. By using our service, you acknowledge this is a working draft.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 shadow-xl shadow-primary/5 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground pl-8">
              By accessing and using MuItir, you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
            <div className="space-y-3 text-muted-foreground pl-4">
              <p>MuItir provides:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A career assessment tool using our proprietary coding system</li>
                <li>Career matching based on personality, passions, and preferences</li>
                <li>Educational content about various career paths</li>
                <li>Free access to basic assessment features</li>
              </ul>
              <p className="pt-2">
                The service is provided "as is" and we reserve the right to modify or discontinue any feature at any time.
              </p>
            </div>
          </section>
          <section>
  <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Collection & Privacy</h2>
  <div className="space-y-3 text-muted-foreground pl-4">
    <div className="bg-secondary/20 rounded-xl p-4 border border-border/30">
      <h3 className="font-bold text-foreground mb-2">What We Collect</h3>
      <p>
        <span className="font-semibold text-primary">Important:</span> We collect ONLY your quiz responses to generate your career code. 
        We do <span className="font-semibold">NOT</span> collect:
      </p>
      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li>Personal identification (name, email, phone number)</li>
        <li>Address or location data</li>
        <li>Payment information</li>
        <li>Social media accounts</li>
      </ul>
      <p className="mt-3">
        Your quiz responses are <span className="font-semibold">anonymous</span> and used solely to calculate your career matches. 
        No personally identifiable information is stored or required to use our service.
      </p>
    </div>
    
    <p className="pt-2">
      For complete details on how we handle data, please review our 
      <Link href="/privacy-policy" className="text-primary hover:underline mx-1">
        Privacy Policy
      </Link>.
    </p>
  </div>
</section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
            <div className="space-y-3 text-muted-foreground pl-4">
              <p>As a user, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information in the assessment</li>
                <li>Use the service for personal, non-commercial purposes only</li>
                <li>Not attempt to reverse engineer or copy our algorithm</li>
                <li>Not use automated systems to access the service</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
            <div className="space-y-3 text-muted-foreground pl-4">
              <p>All content on MuItir is protected by intellectual property laws, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The career coding algorithm and assessment methodology</li>
                <li>Website design, layout, and user interface</li>
                <li>Text content, images, and graphics</li>
                <li>Database of careers and their associated codes</li>
              </ul>
              <p className="pt-2">
                You may not reproduce, distribute, or create derivative works without our explicit written permission.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimer of Warranties</h2>
            <div className="space-y-3 text-muted-foreground pl-4">
              <div className="bg-secondary/20 rounded-xl p-4 border border-border/30">
                <h3 className="font-bold text-foreground mb-2">Career Advice Disclaimer</h3>
                <p>
                  MuItir provides career suggestions based on an algorithmic assessment. This service is for informational purposes only and should not be considered as professional career advice, psychological counseling, or guaranteed employment outcomes.
                </p>
                <p className="mt-2">
                  We do not guarantee the accuracy, completeness, or suitability of the career suggestions. Users should conduct their own research and consult with qualified professionals before making career decisions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <div className="space-y-3 text-muted-foreground pl-4">
              <p>
                To the maximum extent permitted by law, MuItir shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use or inability to use the service</li>
                <li>Any career decisions made based on our suggestions</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Statements or conduct of any third party on the service</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Privacy</h2>
            <div className="space-y-3 text-muted-foreground pl-4">
              <p>
                Your privacy is important to us. Please review our 
                <Link href="/privacy-policy" className="text-primary hover:underline mx-1">
                  Privacy Policy
                </Link> 
                to understand how we collect, use, and protect your information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications to Terms</h2>
            <div className="space-y-3 text-muted-foreground pl-4">
              <p>
                We reserve the right to modify these terms at any time. We will notify users of significant changes by posting a notice on our website. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
            <div className="space-y-3 text-muted-foreground pl-4">
              <div className="bg-secondary/20 rounded-xl p-4 border border-border/30">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Tunisia, without regard to its conflict of law provisions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
            <div className="space-y-3 text-muted-foreground pl-4">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
                <p>For questions about these Terms of Service:</p>
                <p className="mt-2">
                  <span className="font-bold text-foreground">Email:</span>{' '}
                  <a 
                    href="mailto:muitir250@gmail.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    muitir250@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Acceptance Note */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>By using MuItir, you acknowledge that you have read, understood, and agree to these Terms of Service.</p>
        </div>


      </div>
    </main>
  );
}