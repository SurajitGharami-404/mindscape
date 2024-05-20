"use client";
import { signInWithGoogle } from "@/app/(sites)/signin/actions";
import { Button } from "./ui/button";
import { FaGoogle } from "react-icons/fa6";

export default function SignInButton() {
    const handleSignin = async () => {
        await signInWithGoogle();
    };

    return (
        <Button
            className="bg-custom-success-dark text-custom-background hover:bg-custom-success"
            onClick={handleSignin}
        >
            <FaGoogle className="text-xl mr-2" />
            Sign in
        </Button>
    );
}
