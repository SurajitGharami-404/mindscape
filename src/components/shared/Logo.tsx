import { cn } from "@/lib/utils";
import Link from "next/link";
import { type FC } from "react";

interface Props {
    size?: "xl" | "lg" | "sm" | "normal";
    weight?: "bold" | "semibold" | "medium";
    className?: string;
}

const Logo: FC<Props> = ({ size = "normal", weight = "medium", className }) => {
    return (
        <div>
            <Link href="/">
                <h2
                    className={cn(
                        size == "sm" && "text-sm",
                        size == "normal" && "text-base",
                        size == "lg" && "text-lg",
                        size == "xl" && "text-xl",
                        weight == "medium" && "font-medium",
                        weight == "bold" && "font-bold",
                        weight == "semibold" && "font-semibold",
                        className
                    )}
                >
                    <span className="text-custom-success">Mind</span>
                    <span className="text-custom-foreground">scape.</span>
                </h2>
            </Link>
        </div>
    );
};

export default Logo;
