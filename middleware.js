import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const response = NextResponse.redirect(new URL('/home', request.url));
    response.cookies.set('clone', 'tabnews');

  return response;
}