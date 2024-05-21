"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { FaGoogle } from "react-icons/fa6";
import { DEFAULT_SIGNIN_REDIRECT } from "@/routes";

export default function SignInButton() {
    const handleSignin = () => {
        signIn("google",{
            callbackUrl:DEFAULT_SIGNIN_REDIRECT,
        })
    };

    return (
        <Button
            className="bg-custom-success-dark text-background hover:bg-custom-success"
            onClick={handleSignin}
        >
            <FaGoogle className="text-xl mr-2" />
            Sign in
        </Button>
    );
}
