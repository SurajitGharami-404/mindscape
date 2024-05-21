import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
    DEFAULT_SIGNIN_REDIRECT,
    authApiPrefix,
    authRoutes,
    publicRoutes,
} from "./routes";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    // req.auth
    const isSignedIn = !!req.auth;
    const { nextUrl } = req;

    const isAuthApiRoute = nextUrl.pathname.startsWith(authApiPrefix);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    if (isAuthApiRoute) return;

    if (isAuthRoute) {
        if (isSignedIn) {
            return NextResponse.redirect(
                new URL(DEFAULT_SIGNIN_REDIRECT, nextUrl)
            );
        }
        return;
    }

    if(!isSignedIn && !isPublicRoute){
        return NextResponse.redirect(
            new URL("/auth/signin", nextUrl)
        );
    }
    return;

});

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
