import UserPage from "@/components/UserCenter";
import { getServerSession } from 'next-auth/next';
import { redirect } from "next/navigation";


export default async function Page() {

    const session = await getServerSession()

    if(!session){
        redirect('/signin')
    }

    const user = session.user

    return (

        <section className="pb-[120px] pt-[120px]">
            <div className="container">

                <UserPage user={user} />

            </div>
        </section>
    );
}