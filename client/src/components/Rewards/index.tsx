import SingleRewardCard from "./SingleRewardCard"
import rewardData from "./rewardData"

const Rewards = () => {
    {
        rewardData.map((reward) => {
            <div key={reward.id} className="w-full">
                <SingleRewardCard reward={reward} />
            </div>
        })
    }
}

export default Rewards