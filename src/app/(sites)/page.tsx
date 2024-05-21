import { auth } from "@/auth";
import Container from "@/components/shared/Container";


export default async function Home() {
    const session = await auth()
    return (
        <Container className="flex-1 px-4 flex flex-col items-center justify-center gap-y-8">
            {JSON.stringify(session?.user)}
        </Container>
    );
}
