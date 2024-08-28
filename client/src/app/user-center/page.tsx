import UserPage from "@/components/UserCenter";
import { getServerSession } from 'next-auth/next';
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";


export default async function Page() {

    const session = await getServerSession()

    if (!session) {
        redirect('/signin')
    }

    const user = session.user

    // Fetch the user from the Prisma database
    const User = await prisma.user.findUnique({
        where: { email: user.email },
    });

    if (!user) {
        // Handle case where user is not found in the database
        return <div>User not found</div>;
    }

    return (

        <section className="pb-[120px] pt-[120px]">
            <div className="container">

                <UserPage user={User} />

            </div>
        </section>
    );
}