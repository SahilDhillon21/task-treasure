import prisma from "@/lib/prisma";
import { Sponsor, User } from "@prisma/client";

export async function findUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
        where: { email }
    })
}

export async function findSponsorAccountByEmail(email: string): Promise<Sponsor | null> {
    const user = await findUserByEmail(email)
    return await prisma.sponsor.findUnique({
        where: { userId: user.id }
    })
}

type SponsorAccountCreationData = User & {
    brandName: string,
    brandDescription?: string
}

export async function createNewSponsorAccount(reqData: SponsorAccountCreationData) {
    // Make sure the user doesn't already have a sponsor account
    const existingSponsorAccount = await findSponsorAccountByEmail(reqData.email)

    if (existingSponsorAccount) {
        throw new Error('A sponsor account associated with this email already exists.');
    }

    try {
        const newSponsor = await prisma.sponsor.create({
            data: {
                name: reqData.brandName,
                description: reqData.brandDescription,
                user: {
                    connect: {
                        id: reqData.id
                    }
                }
            }
        })

        return newSponsor;
    } catch (error) {
        console.error('Error creating sponsor account:', error);
        throw error;
    }


}