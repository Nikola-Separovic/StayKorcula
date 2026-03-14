import { NextRequest, NextResponse } from 'next/server';

const locales = ['hr', 'en'];
const defaultLocale = 'hr';

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip internal paths and static assets
    '/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|images|.*\\..*).*)',
  ],
}; 