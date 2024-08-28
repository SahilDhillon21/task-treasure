"use client"

import { User } from "@prisma/client";

export default function Sponsor({ user }: { user: User }) {
    return (

        <>
            
            <h1>
                {!user.hasBrand && 'No brand'}
            </h1>

        </>
    )
}
