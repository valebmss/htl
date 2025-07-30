import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['en', 'es'];
const defaultLocale = 'es';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    locales.some((loc) => pathname.startsWith(`/${loc}`))
  ) {
    return NextResponse.next();
  }

  const locale = req.headers.get('accept-language')?.startsWith('en') ? 'en' : defaultLocale;
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}
