"use client";
import { usePathname } from "next/navigation";
import SignInButton from "./SignInButton";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./shared/Logo";
import NavLink from "./shared/NavLink";
import { History, Star } from "lucide-react";
import { useMemo } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const isSignInPage = useMemo(()=>pathname==="/signin",[pathname]);
    return (
        <nav>
            <div className="max-w-7xl mx-auto flex items-center p-4">
                {/* LOGO */}
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
                        </div>
                    ) : (
                        <SignInButton />
                    )}

                    {/* THEME TOGGLE BUTTON */}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
