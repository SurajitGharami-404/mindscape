import SignInButton from "@/components/SignInButton";

export default function SignIn() {
    return (
        <section className="flex-1 px-4 flex flex-col items-center justify-center gap-y-8">
            <h1 className="text-6xl font-bold">
                <span className="text-custom-success">Mind</span>
                <span className="text-custom-foreground">scape.</span>
            </h1>
            <p className="text-xl font-semibold text-custom-foreground">Listen to 100+ free audio books and stories in your own language</p>
            <SignInButton />
        </section>
    );
}