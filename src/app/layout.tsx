import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ForceLanguage from '@/components/ForceLanguage';

export const metadata: Metadata = {
  title: 'Muitir Career Path Quiz : Find your ideal future with our efficient and simple personalized quiz.',
  description: 'To revolutionize career discovery by moving beyond generic personality tests. We match individuals with careers based on a unique combination of personality type, passion domains, and work preferences — all encoded in your personal Career Code.',
  applicationName: 'MuItir',
openGraph: {
  siteName: 'MuItir',
},
};

// app/layout.tsx - Add this component
function LegalFooter() {
  return (
    <footer className="py-6 mt-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <Link 
            href="/careers" 
            className="hover:text-primary transition-colors" // ← ADD THIS
          >
            Careers Database
          </Link>
          <span className="text-border">•</span>
          <Link 
            href="/privacy-policy" 
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-border">•</span>
          <Link 
            href="/terms" 
            className="hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <span className="text-border">•</span>
          <Link 
            href="/about" 
            className="hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <span className="text-border">•</span>
          <Link 
            href="/contact" 
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
        <p className="text-center text-xs text-muted-foreground/60 mt-4">
          © {new Date().getFullYear()} MuItir • Made in Tunisia 🇹🇳
        </p>
      </div>
    </footer>
  );
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
       
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <meta name="google-site-verification" content="googlea5f4f268f8b859da.html" />
        <meta httpEquiv="Content-Language" content="es" /> {/* Match the html lang */}
        <meta name="language" content="Spanish" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
          <Script
    id="adsense-script"
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
    crossOrigin="anonymous"
    strategy="afterInteractive"
  />
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6221954850003974" crossOrigin="anonymous"></script>

  <Script id="chrome-translation-fix" strategy="beforeInteractive">
          {`
            // Prevent any notranslate meta tags
            (function() {
              // Remove existing notranslate
              const notranslate = document.querySelector('meta[name="google"][content="notranslate"]');
              if (notranslate) notranslate.remove();
              
              // Prevent future notranslate
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                      if (node.nodeName === 'META' && 
                          node.getAttribute('name') === 'google' &&
                          node.getAttribute('content') === 'notranslate') {
                        node.remove();
                      }
                    });
                  }
                });
              });
              
              observer.observe(document.head, { childList: true });
            })();
          `}
        </Script>
        
  
      </head>
      <body className="font-body antialiased min-h-screen">
      <ForceLanguage />
 
        <Navigation /> {/* ← ADD HEADER HERE */}
        <main className="pb-20"> {/* Add bottom padding for bottom nav */}
          {children}
        </main>
        <LegalFooter />
        <Toaster />
        
      </body>
    </html>
  );
}
