"use client"; // Error components must be Client Components
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {

    return (
        <div className="container flex-1 flex flex-col items-center justify-center gap-4">
            <Alert variant="default" className="text-red-500 [&_svg]:text-red-500">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>{error.name}</AlertTitle>
                <AlertDescription>
                    {error.message}
                </AlertDescription>
            </Alert>
            <div>
                <Button onClick={()=>reset()} variant="outline">Try again</Button>
            </div>
        </div>
    );
}
