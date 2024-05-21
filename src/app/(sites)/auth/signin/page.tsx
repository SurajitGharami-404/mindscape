"use client";
import SignInButton from "@/components/SignInButton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { BsExclamationTriangle } from "react-icons/bs";

export default function SignIn() {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    return (
        <section className="container max-w-screen-2xl flex-1 px-4 flex flex-col items-center justify-center gap-y-8">
            <div>
                {!!error ? (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription className="flex items-center gap-x-8">
                            An error occurred. Please, try again sometime later
                            <BsExclamationTriangle />
                        </AlertDescription>
                    </Alert>
                ) : null}
            </div>
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
