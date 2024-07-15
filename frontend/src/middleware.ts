import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const isLoggedIn = request.cookies.get("isLoggedIn");

    if(isLoggedIn && isLoggedIn.value=="0"){
        return Response.redirect(new URL("/login", request.nextUrl))
    }
}


export const config = {
    matcher: ["/logintest"]
}