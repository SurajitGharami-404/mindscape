import NavBar from "@/components/NavBar";

export default function SiteLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="min-h-screen max-w-7xl mx-auto flex flex-col flex-nowrap">
            <NavBar />
            {children}
        </main>
    );
}
