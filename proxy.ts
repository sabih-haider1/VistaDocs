import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export default auth((request) => {
  const pathname = request.nextUrl.pathname;
  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginRoute = pathname === '/login';
  const isAdminUser = request.auth?.user?.role === 'admin';

  if (isAdminRoute && (!request.auth || !isAdminUser)) {
    const loginUrl = new URL('/login', request.nextUrl.origin);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoginRoute && isAdminUser) {
    return NextResponse.redirect(new URL('/admin', request.nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*', '/login', '/api/admin/:path*'],
};