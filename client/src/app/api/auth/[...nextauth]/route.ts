import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { env } from "process";

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
    secret: NEXT_AUTH_SECRET
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };