import { RedeemOption, Reward } from "@/types/reward";
import Image from "next/image";


const SingleRewardCard = ({ cardName, image, option }: { cardName: string, image: string, option: RedeemOption }) => {
    return (
        <div className="relative flex flex-col text-white-700 bg-dark shadow-md bg-clip-border rounded-xl w-52 transform transition ease-in-out duration-300 hover:scale-105 mx-3 my-1">
            <div className="relative  overflow-hidden text-grwhiteay-700 bg-white bg-clip-border rounded-xl h-52">
                <Image src={option.image ? option.image : image}
                    fill
                    alt={cardName}
                    className={`object-${cardName == 'Steam'? 'fill' : 'contain'} w-full h-full`}
                />
                {!option.image &&
                    <div className="absolute top-0 right-0 mt-2 bg-black text-white-500 text-sm rounded-l-full px-4 py-1">
                        ₹ {option.value}
                    </div>
                }
            </div>

            <div className="p-6">
                <h4 className="text-center text-md text-orange-600 font-bold">
                    {option.requiredPoints} coins
                </h4>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm p-1 bg-green-900 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    type="button">
                    Redeem
                </button>
            </div>
        </div>
    )
}

export default SingleRewardCard;

