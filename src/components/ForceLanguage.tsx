// /components/ForceLanguage.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ForceLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    // Delay to ensure page is fully loaded
    const fixLanguage = () => {
      // Force HTML lang attribute
      document.documentElement.lang = 'es';
      
      // Ensure meta tags exist
      let meta = document.querySelector('meta[http-equiv="Content-Language"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Language');
        meta.setAttribute('content', 'es');
        document.head.appendChild(meta);
      } else {
        meta.setAttribute('content', 'es');
      }
      
      // Remove any notranslate meta
      const notranslate = document.querySelector('meta[name="google"][content="notranslate"]');
      if (notranslate) notranslate.remove();
      
      // Add Spanish content to trigger Chrome
      const spanishContent = document.createElement('div');
      spanishContent.style.display = 'none';
      spanishContent.innerHTML = 'Contenido en español para activar la traducción de Google Chrome.';
      document.body.appendChild(spanishContent);
      
      // Trigger language change event
      window.dispatchEvent(new Event('languagechange'));
      
      console.log('✅ Language forced to Spanish on:', pathname);
    };

    // Run immediately
    fixLanguage();
    
    // Run again after a delay (in case of dynamic content)
    const timer1 = setTimeout(fixLanguage, 500);
    const timer2 = setTimeout(fixLanguage, 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return null;
}