import SingleRewardCard from "@/components/Rewards/SingleRewardCard";
import rewardData from "@/components/Rewards/rewardData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redeem",
  description: "Possible rewards to be redeemed",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Redeem your points"
        description="Choose from a wide variety of options!"
      />

      <section className="pb-[120px] pt-[30px]">
        <div className="container ">



          {rewardData.map((reward) => (
            <div className="flex flex-col items-center pb-[20px]" key={reward.id}>
              <div className="flex justify-center items-center mb-4 mt-6">
                <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl mx-2">
                  {reward.cardName}
                </h2>
                <Image src={reward.icon} height={30} width={30} alt={reward.cardName} />
              </div>

              {/* Wrapper div to control centering */}
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-5 px-5 my-3 w-full max-w-screen-lg">
                  {reward.redeemOptions.map((option) => (
                    <SingleRewardCard key={option.id} cardName={reward.cardName} image={reward.image} option={option} />
                  ))}
                </div>
              </div>
            </div>
          ))}




          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Blog;
