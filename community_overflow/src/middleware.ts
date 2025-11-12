import { NextResponse,NextRequest } from "next/server";
import getOrCreateDB from "./models/server/dbsetup";
import getOrCreateStorage from "./models/server/storage.collection";


export async function middleware(req: NextRequest) {
    await Promise.all([getOrCreateDB(), getOrCreateStorage()]);
    return NextResponse.next();
}

export const config = {
    //match all req path except for theone starting with /api nextjs special folder
 
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}