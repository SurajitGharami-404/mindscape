
import Container from "@/components/shared/Container";


export default async function Home() {
    return (
        <section className="conatiner max-w-screen-2xl flex-1 flex flex-col items-center justify-center gap-y-8 px-4">
            <h1 className="text-6xl font-bold">
                <span className="text-custom-success">Mind</span>
                <span className="text-custom-foreground">scape.</span>
            </h1>
        </section>
    );
}
