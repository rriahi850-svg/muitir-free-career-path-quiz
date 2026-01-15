// middleware.ts (in project root, same level as app/)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the response
  const response = NextResponse.next();
  
  // Force Spanish language headers for ALL pages
  response.headers.set('Content-Language', 'es');
  
  // Also set cache control to prevent Chrome from caching language
  response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  
  return response;
}

// Apply to ALL routes except static files
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
};