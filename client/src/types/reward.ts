export type RedeemOption = {
    id: number
    value: number,
    requiredPoints: number,
    image?: string,
}

export type Reward = {
    id: number,
    cardName: string,
    icon: string,
    image: string,
    redeemOptions: RedeemOption[]
}