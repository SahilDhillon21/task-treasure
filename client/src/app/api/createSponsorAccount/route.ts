import prisma from "@/lib/prisma"
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    const data = await req.json()
    const { brandName, brandDescription, userId } = data;

    if (!brandName || brandName.length < 2) {
        return NextResponse.json({ error: 'Brand name is required and must be at least 2 characters long.' }, { status: 400 });
    }

    try {
        // Create a new Sponsor and associate it with a User
        const sponsor = await prisma.sponsor.create({
            data: {
                name: brandName,
                description: brandDescription,
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });

        return NextResponse.json({ sponsor: sponsor }, { status: 200 })
    } catch (error) {
        console.error('Error creating sponsor:', error);
        return NextResponse.json({ error: 'An error occurred while creating the sponsor.' }, { status: 500 });
    }

}