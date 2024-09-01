import { findSponsorAccountByEmail } from '@/services/userService';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function SponsorDashboard() {
    const session = await getServerSession()

    if (!session) {
        redirect('/signin');
    }

    const Sponsor = await findSponsorAccountByEmail(session.user.email)

    if (!Sponsor) {
        redirect('/sponsorlp')
    }

    return (
        <>
            <section className="pb-[120px] pt-[120px]">
                <div className="container">

                    <h1>Sponsor Dashboard</h1>
                    <h1>You have an account: {JSON.stringify(Sponsor, null, 2)}</h1>

                </div>
            </section>
        </>
    )
}