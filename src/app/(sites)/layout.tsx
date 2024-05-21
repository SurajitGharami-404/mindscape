import NavBar from "@/components/NavBar";
import Container from "@/components/shared/Container";

export default function SiteLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="min-h-screen flex flex-col flex-nowrap">
            <NavBar />
            {children}
        </main>
    );
}
