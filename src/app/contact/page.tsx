// app/contact/page.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, MessageSquare, Globe, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - Replace with your actual form handling
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
  <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 p-4 md:p-8">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 gap-4 md:gap-0">
        <div className="flex items-center gap-3 order-2 md:order-1">
          <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
            <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-1 md:mt-2">
              We'd love to hear from you
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Email</h3>
              </div>
              <p className="text-muted-foreground">For general inquiries:</p>
              <a 
                href="mailto:muitir250@gmail.com" 
                className="text-primary hover:underline font-medium block mt-2"
              >
                muitir250@gmail.com
              </a>
            </div>

            <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Location</h3>
              </div>
              <p className="text-muted-foreground">Based in Tunisia, serving globally</p>
              <p className="text-primary font-medium mt-2">Tunis, Tunisia</p>
            </div>

            <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Response Time</h3>
              </div>
              <p className="text-muted-foreground">We typically respond within:</p>
              <p className="text-primary font-medium mt-2">24-48 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 shadow-xl shadow-primary/5">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your question or feedback..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full py-6 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-background border-t-transparent mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-6">
                By contacting us, you agree to our{' '}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
  
<div className="bg-card/30 rounded-3xl p-8 mb-12 border border-border/50">
  <h2 className="text-2xl font-bold text-foreground mb-6">Common Questions</h2>
  <div className="space-y-6">
    <div className="border-b border-border/30 pb-6">
      <h3 className="font-bold text-foreground mb-2">Is the career assessment really free?</h3>
      <p className="text-muted-foreground">
        <span className="font-semibold text-primary">Absolutely free!</span> The complete career code assessment 
        is 100% free with no hidden costs. We believe career guidance should be accessible to everyone.
      </p>
      <p className="text-sm text-muted-foreground/70 mt-2">
        As we're just starting out, we appreciate any feedback to help us improve!
      </p>
    </div>
    
    <div className="border-b border-border/30 pb-6">
      <h3 className="font-bold text-foreground mb-2">How does the career matching work?</h3>
      <p className="text-muted-foreground">
        Our unique algorithm analyzes your personality type, passion domains, and work preferences 
        to generate a personalized career code. This code matches against our database of 110+ 
        carefully researched careers.
      </p>
      <p className="text-sm text-muted-foreground/70 mt-2">
        We're continuously refining our system - your feedback helps us improve accuracy!
      </p>
    </div>
    
    <div className="pb-2">
      <h3 className="font-bold text-foreground mb-2">Can I retake the assessment?</h3>
      <p className="text-muted-foreground">
        Yes! You can retake it as many times as you like. Your career code might evolve as your 
        interests and preferences change over time.
      </p>
      <p className="text-sm text-muted-foreground/70 mt-2">
        Different answers = different codes = different career suggestions!
      </p>
    </div>
    
    {/* ADD THIS NEW SECTION - Honest about being new */}
    <div className="mt-6 pt-6 border-t border-border/30">
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="text-primary text-sm">✨</span>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-1">A Quick Note About Our Journey</h4>
          <p className="text-sm text-muted-foreground">
            We're a <span className="font-semibold text-primary">brand new project</span> built by a passionate 
            Tunisian developer. While we're starting small, we're committed to creating valuable career 
            guidance tools. Your support and feedback mean everything as we grow!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      
      </div>
    </main>
  );
}