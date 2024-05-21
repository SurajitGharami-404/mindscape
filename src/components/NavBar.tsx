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
import Container from "./shared/Container";

export default function NavBar() {
    const pathname = usePathname();
    const isSignInPage = useMemo(()=>pathname==="/auth/signin",[pathname]);
    const user = useCurrentUser();
    return (
        <nav className="shadow">
            <Container className="flex items-center p-4">
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
                            <UserButton userName={user?.name??"anonymous"} email={user?.email??"anonymous@gmail.com"} displayImage={user?.image??""}/>
                        </div>
                    ) : (
                        <SignInButton />
                    )}

                    {/* THEME TOGGLE BUTTON */}
                    <ThemeToggle />
                </div>
            </Container>
        </nav>
    );
}
