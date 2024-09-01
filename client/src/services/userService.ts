import prisma from "@/lib/prisma";
import { Sponsor, User } from "@prisma/client";

export async function findUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
        where: { email }
    })
}

export async function findSponsorAccountByEmail(email: string): Promise<Sponsor | null> {
    return await prisma.sponsor.findUnique({
        where: { email }
    })
}