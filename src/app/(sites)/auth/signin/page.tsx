"use client";
import SignInButton from "@/components/SignInButton";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";


export default function SignIn() {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    useEffect(()=>{
        if(error === "OAuthCallbackError") toast.error("Access denied...")
    },[error])

    return (
        <section className="container max-w-screen-2xl px-4 flex-1 flex flex-col items-center justify-center gap-y-8">
            <h1 className="text-6xl font-bold">
                <span className="text-custom-success">Mind</span>
                <span className="text-custom-foreground">scape.</span>
            </h1>
            <p className="text-xl font-semibold text-custom-foreground">
                Listen to 100+ free audio books and stories in your own language
            </p>
            <SignInButton />
        </section>
    );
}
