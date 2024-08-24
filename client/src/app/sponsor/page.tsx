"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { sidebarLinks } from "./sidebarLinks";
import VerticalTabs from "@/components/UserCenter"

const SponsorPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <>


            <section className="pb-[140px] pt-28">
                <div className="container">

                    <VerticalTabs />

                </div>
            </section >
        </>
    );
};

export default SponsorPage;
