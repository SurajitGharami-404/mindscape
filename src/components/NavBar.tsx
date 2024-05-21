"use client";
import { usePathname } from "next/navigation";
import SignInButton from "./SignInButton";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./shared/Logo";
import NavLink from "./shared/NavLink";
import { History, Star } from "lucide-react";
import { useMemo } from "react";
import UserButton from "./shared/UserButton";
import { useCurrentUser } from "@/hooks/useCurrentUser";


export default function NavBar() {
    const pathname = usePathname();
    const isSignInPage = useMemo(() => pathname === "/auth/signin", [pathname]);
    const user = useCurrentUser();
    return (
        <nav className="sticky top-0 shadow bg-background/95 border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-screen-xl flex items-center p-4">
                <Logo size="xl" weight="semibold" />
                <div className="flex-1 flex items-center justify-end gap-x-4">
                    {!isSignInPage ? (
                        <div className="flex items-center gap-x-4">
                            <NavLink href="/history">
                                <History className="h-5 w-5" />
                                History
                            </NavLink>
                            <NavLink href="/favorites">
                                <Star className="h-5 w-5" />
                                Favorites
                            </NavLink>
                            <UserButton
                                userName={user?.name ?? ""}
                                email={user?.email ?? ""}
                                displayImage={user?.image ?? ""}
                            />
                        </div>
                    ):null}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
