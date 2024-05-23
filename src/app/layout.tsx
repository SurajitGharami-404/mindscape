import type { Metadata } from "next";
import { Poppins, Noto_Sans } from "next/font/google";
import "./globals.css";
import Provider from "@/components/providers/Provider";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400","500","600","700"],
    variable:"--font-poppins",
});
const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: ["400","500","600","700"],
    variable:"--font-noto_sans",
});

export const metadata: Metadata = {
    title: "Mindscape",
    description: "Your escape from reality",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${poppins.variable} ${notoSans.variable}`}>
                <Provider>
                        {children}
                </Provider>
            </body>
        </html>
    );
}
