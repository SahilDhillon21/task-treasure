import { Reward } from "@/types/reward";

const rewardData: Reward[] = [
    {
        id: 1,
        cardName: 'Google Play',
        icon: '/images/gift-cards/GooglePlay/GooglePlayIcon.png',
        image: '/images/gift-cards/GooglePlay/GooglePlayGiftCard.png',
        redeemOptions: [
            {id: 11, value: 300, requiredPoints: 850},
            {id: 12, value: 500, requiredPoints: 1149},
            {id: 13, value: 700, requiredPoints: 1349},
            {id: 14, value: 1000, requiredPoints: 1549},
        ]
    },

    {
        id: 2,
        cardName: 'Valorant',
        icon: '/images/gift-cards/Valorant/ValorantIcon.png',
        image: '/images/gift-cards/Valorant/ValorantGiftCard.jpg',
        redeemOptions: [
            {id: 21, value: 300, requiredPoints: 850},
            {id: 22, value: 500, requiredPoints: 1149},
            {id: 23, value: 700, requiredPoints: 1349},
            {id: 24, value: 1000, requiredPoints: 1549},
        ]
    },

    {
        id: 3,
        cardName: 'Steam',
        icon: '/images/gift-cards/SteamIcon.png',
        image: '/images/gift-cards/SteamGiftCard.jpg',
        redeemOptions: [
            {id: 31, value: 99, requiredPoints: 249, image: '/images/gift-cards/Steam/Steam-99.webp'},
            {id: 32, value: 150, requiredPoints: 1149, image: '/images/gift-cards/Steam/Steam-175.webp'},
            {id: 33, value: 250, requiredPoints: 1349, image: '/images/gift-cards/Steam/Steam-250.webp'},
            {id: 34, value: 500, requiredPoints: 1549, image: '/images/gift-cards/Steam/Steam-500.webp'},
            {id: 35, value: 999, requiredPoints: 2549, image: '/images/gift-cards/Steam/Steam-999.webp'},
            {id: 36, value: 1250, requiredPoints: 2999, image: '/images/gift-cards/Steam/Steam-1250.webp'},
            {id: 37, value: 4000, requiredPoints: 5299, image: '/images/gift-cards/Steam/Steam-4000.webp'},
        ]
    },
]

export default rewardData;
