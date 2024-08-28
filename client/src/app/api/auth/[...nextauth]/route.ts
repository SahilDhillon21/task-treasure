import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { env } from "process";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET!
const NEXT_AUTH_SECRET = env.NEXTAUTH_SECRET

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        }),
    ],
    secret: NEXT_AUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile }) {
            try {
                await prisma.user.upsert({
                    where: { email: user.email },
                    update: {
                        name: user.name,
                        avatar: user.image,
                        // Add other fields if necessary
                    },
                    create: {
                        email: user.email,
                        name: user.name,
                        avatar: user.image,
                        // Set default values for other fields
                    },
                });
                return true;
            } catch (error) {
                console.error("Error upserting user:", error);
                return false;
            }
        },
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };