'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Briefcase, User, Mail, FileText, HelpCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';




export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

    const isQuizPage = pathname.includes('/quiz');
  const isExplainerPage = pathname.includes('/explainer');
  const isResultsPage = pathname.includes('/results')
  const isprocessing = pathname.includes('/processing')

  const navItems = [
    { href: '/', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { href: '/careers', label: 'Careers Database', icon: <Briefcase className="h-4 w-4" /> },
    { href: '/quiz', label: 'Start Quiz', icon: <Sparkles className="h-4 w-4" />, highlight: true },
    { href: '/about', label: 'About Us', icon: <User className="h-4 w-4" /> },
    { href: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
    { href: '/privacy-policy', label: 'Privacy Policy', icon: <FileText className="h-4 w-4" /> },
    { href: '/terms', label: 'Terms of Service', icon: <HelpCircle className="h-4 w-4" /> },
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={`animate-fade-in absolute top-4 right-4 z-50 rounded-full w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-secondary/50 hover:border-primary/30  duration-200 group ${
          isOpen ? 'bg-primary/20 border-primary/30' : ''
        } ${isExplainerPage ? '!top-[10px] !right-4 md:!top-4 md:!right-4' : ''}
        ${isQuizPage ? '!top-[100px] !right-4 md:!top-4 md:!right-4' : ''}
        ${isResultsPage ? '!hidden !top-[26px] !right-7 md:!top-4 md:!right-4': ''}
        ${isprocessing ? '!hidden !top-[26px] !right-8 md:!top-4 md:!right-4': ''}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {isOpen && (
        
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div 
            className="absolute top-24 right-6 animate-in slide-in-from-top-5 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-2xl min-w-[220px]">
            <div className="flex flex-col items-center mb-4 pb-4 border-b border-border/30">
                <img 
                  src="/LOGO3.png" 
                  alt="Career Code Finder Logo" 
                  className="w-32 h-auto object-contain drop-shadow-lg brightness-110 contrast-110 mb-2"
                />
                
              </div>
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary/50 transition-colors ${
                      item.highlight ? 'bg-primary/10 text-primary' : 'text-foreground'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {item.highlight && (
                      <div className="ml-auto h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                    )}
                  </Link>
                ))}
                <div className="my-2 border-t border-border/30"></div>
                
              
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
