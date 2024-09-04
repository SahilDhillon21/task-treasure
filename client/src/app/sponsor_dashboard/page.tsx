import SponsorDBComponent from '@/components/SponsorDashboard';
import { findSponsorAccountByEmail } from '@/services/userService';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function SponsorDashboard() {
    const session = await getServerSession()

    if (!session) {
        redirect('/signin');
    }

    const sponsor = await findSponsorAccountByEmail(session.user.email)

    if (!sponsor) {
        redirect('/sponsorlp')
    }

    return (
        <>
            <section className="pb-[120px] pt-[120px]">
                <div className="container">

                    <h1 className='text-2xl font-bold text-center mb-5'>{sponsor.name}&apos;s Dashboard</h1>
                    {/* TODO - add some glowy effects on brand name */}
 
                    <SponsorDBComponent sponsor={sponsor}/>
                </div>
            </section>
        </>
    )
}