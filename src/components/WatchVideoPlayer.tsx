import { type FC } from "react";

interface Props {
    ytid: string;
}

const WatchVideoPlayer: FC<Props> = ({ ytid }) => {
    return (
        <div className="w-full row-span-11">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${ytid}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default WatchVideoPlayer;
