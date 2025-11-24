import { NextResponse } from "next/server";
// Middleware runs in the Edge runtime and cannot call Node-only admin SDKs.
// Keep middleware lightweight — do not create databases or buckets here.
export async function middleware() {
    return NextResponse.next();
}

export const config = {
    //match all req path except for theone starting with /api nextjs special folder
 
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}