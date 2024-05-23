"use client";
import { Video } from "@prisma/client";
import VideoCard from "./shared/VideoCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getVideos } from "@/actions/videos";
import LoadingSkeleton from "./LoadingSkeleton";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";

const VideoCards = () => {
    const searchParams = useSearchParams();
    const [videos, setVideos] = useState<Video[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchVideos() {
            const language = searchParams.get("language") || "all";
            const genre = searchParams.get("genre") || "all";

            let res: ActionResponse<Video[]>;

            if (language && genre) {
                res = await getVideos({
                    language,
                    genre,
                });

                if (res.success && res.result) {
                    setIsLoading(false);
                    setVideos(res.result);
                } else {
                    toast.error(res.error);
                }
            }
        }
        fetchVideos();
    }, [searchParams]);

    return (
        <div className="flex-1 grid grid-cols-3 gap-x-5 gap-y-16">
            {isLoading ? (
                <>
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                </>
            ) : !!videos && videos.length > 0 ? (
                videos.map((video) => (
                    <VideoCard video={video} key={video.id} />
                ))
            ) : (
                <div className="col-span-3 h-full grid place-items-center">
                    <Alert className="max-h-[125px] max-w-[360px]">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Not found!</AlertTitle>
                        <AlertDescription>
                            Sorry no videos found to watch
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
};

export default VideoCards;
