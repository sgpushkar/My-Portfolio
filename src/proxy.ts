// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'www.pushkarmhatre.in';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') || '').toLowerCase();

  // If request arrives via any vercel.app subdomain or alternative vercel preview,
  // permanently redirect (301) to the canonical custom domain with noindex header.
  if (host.endsWith('.vercel.app')) {
    const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, CANONICAL_ORIGIN);
    const response = NextResponse.redirect(destination, 301);
    response.headers.set('X-Robots-Tag', 'noindex, follow');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, fonts, and verification files
     */
    '/((?!_next/static|_next/image|favicon.ico|google[a-z0-9]+\\.html|.*\\.(?:svg|png|jpg|jpeg|gif|webp|otf|woff|woff2)$).*)',
  ],
};
