import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./ThemeProvider";
import ToastProvider from "./ToastProvider";

export default function Provider({
    children,
}: {
    children: Readonly<React.ReactNode>;
}) {
    return (
        <>
            <SessionProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ToastProvider>{children}</ToastProvider>
                </ThemeProvider>
            </SessionProvider>
        </>
    );
}
