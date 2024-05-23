import WatchVideoPlayer from "@/components/WatchVideoPlayer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface params {
    ytid: string;
}

export default function WatchPage({ params: { ytid } }: { params: params }) {
    return (
        <section className="container flex-1 grid grid-cols-1 grid-rows-12 mx-auto p-4">
            <div className="row-span-1">
                <Button
                    asChild
                    variant="secondary"
                    className="font-noto_sans gap-x-1"
                >
                    <Link href="/">
                        <ChevronLeft />
                        Back
                    </Link>
                </Button>
            </div>
            <WatchVideoPlayer ytid={ytid} />
        </section>
    );
}
