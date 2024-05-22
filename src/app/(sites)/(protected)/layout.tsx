import SelectionBar from "@/components/SelectionBar";


export default function ProtectedLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <SelectionBar />
            {children}
        </>
    );
}
