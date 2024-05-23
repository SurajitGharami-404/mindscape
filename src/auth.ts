import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { db } from "./lib/db";
import authConfig from "./auth.config";
import { getUserById } from "./actions/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages:{
        signIn:"/auth/signin"
    },
    events:{
        async linkAccount({user}) {
            await db.user.update({
                where:{
                    id:user.id
                },
                data:{
                    emailVerified: new Date()
                }
            })
        },
    },
    callbacks:{
        async session({session,token}){
            if(token.sub && session.user){
                session.user.id = token.sub
            }
            if(token.role){
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({token}){
            if(!token.sub) return token

            const existingUser = await getUserById(token.sub);
            if(!existingUser) return token;

            token.role = existingUser.role;
            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt", },
    ...authConfig,
});
