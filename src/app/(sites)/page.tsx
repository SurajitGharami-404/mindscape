import SelectionBar from "@/components/SelectionBar";
import VideoCards from "@/components/VideoCards";

export default function Home() {
    return (
        <section className="container mx-auto flex-1 p-4 flex flex-col">
            <SelectionBar />
            <VideoCards />
        </section>
    );
}
