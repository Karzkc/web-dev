import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   // Log something just to test
//   console.log("Middleware is running...");

//   // Redirect all /about routes to / main page
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   // Otherwise, allow the request to continue
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/about/:path*'], // Run middleware only for /about and subroutes
// };

//conditional redirecting

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/users')) {
    return NextResponse.redirect(new URL('/about-2/users', request.url))
  }
}