import { findUserByEmail } from "@/services/userService";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import SponsorAccordion from "./SponsorForm";

export default async function SponsorLandingPage() {
    const session = await getServerSession()

    if (!session) {
        redirect('/signin');
    }

    const user = await findUserByEmail(session.user.email)

    return (
        <>
            <section className="pb-[120px] pt-[120px]">
                <div className="container">

                    <h1 className="text-3xl p-1 text-center font-bold">Let the world know about your creations.</h1>
                    <h1 className="text-center">Get genuine users to try your product.</h1>
                    <SponsorAccordion name={user.name} />
                </div>
            </section>
        </>
    )
}