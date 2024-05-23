
import { getServerSideUser } from "@/utils/getServerSideUser";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./shared/Logo";
import NavLink from "./shared/NavLink";
import { History, Star } from "lucide-react";
import UserButton from "./shared/UserButton";

export default async function NavBar() {
    
    const user = await getServerSideUser();

    return (
        <nav className="sticky top-0 bg-background/95 shadow border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex items-center p-4">
                <Logo size="xl" weight="semibold" />
                <div className="flex-1 flex items-center justify-end gap-x-4">
                    {!!user ? (
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
