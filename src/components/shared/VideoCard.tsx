import { Video } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface Props {
    video: Video;
}

const VideoCard: FC<Props> = ({ video }) => {
    const { title, ytId, channel } = video;
    return (
        <div className="w-full h-full">
            <Link href={`/watch/${ytId}`}>
                <div className="aspect-video">
                    <Image
                        src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                        alt={title}
                        className="w-full h-full object-cover object-center rounded-xl"
                        width={480}
                        height={360}
                    />
                </div>
                <p className="mt-4 text-lg leading-tight font-medium font-noto_sans text-secondary-foreground">
                    {title.length > 80
                        ? `${title.substring(0, 80)}...`
                        : title}
                </p>
                <p className="font-noto_sans text-sm font-400 text-muted-foreground mt-2">
                    {channel}
                </p>
            </Link>
        </div>
    );
};

export default VideoCard;
