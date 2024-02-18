import { NextResponse } from "next/server";

// - This middleware basically means that if the user is not logged in, he will be redirected to the login page and this middleware works on any path of the userslist page.

export function middleware(request, _) {
    if (request.nextUrl.pathname != "login") {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.json({success: "Ran successfully"})
}

export const config = {
    matcher: ["/userslist/:path*"]
}