import { auth } from "@/auth";

export async function getServerSideUser(){
    const session = await auth();
    return session?.user;
}