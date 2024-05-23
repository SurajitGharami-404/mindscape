import { getVideos } from "@/actions/videos";
import SelectionBar from "@/components/SelectionBar";
import VideoCards from "@/components/VideoCards";

export default async function Home() {
    const videos = await getVideos()
    return (
        <section className="container mx-auto flex-1 p-4">
            <SelectionBar />
            {
                !!videos && videos?.length>0 ? (
                    <VideoCards videos={videos}/>
                ):(
                    <h3>No videos found...</h3>
                )
            }
        </section>
    );
}
