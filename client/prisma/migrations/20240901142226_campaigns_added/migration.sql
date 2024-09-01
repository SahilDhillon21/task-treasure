/*
  Warnings:

  - You are about to drop the column `sponsorId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Sponsor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[campaignId]` on the table `YoutubeCampaign` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campaignId` to the `YoutubeCampaign` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_sponsorId_fkey";

-- DropIndex
DROP INDEX "User_sponsorId_key";

-- AlterTable
ALTER TABLE "Sponsor" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "sponsorId";

-- AlterTable
ALTER TABLE "YoutubeCampaign" ADD COLUMN     "campaignId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "UserCampaignCompletion" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rewardPaid" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "UserCampaignCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "sponsorId" INTEGER NOT NULL,
    "reward" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstagramCampaign" (
    "id" SERIAL NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "hashtagToUse" TEXT NOT NULL,
    "targetFollowers" INTEGER NOT NULL,

    CONSTRAINT "InstagramCampaign_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCampaignCompletion_userId_campaignId_key" ON "UserCampaignCompletion"("userId", "campaignId");

-- CreateIndex
CREATE UNIQUE INDEX "InstagramCampaign_campaignId_key" ON "InstagramCampaign"("campaignId");

-- CreateIndex
CREATE UNIQUE INDEX "Sponsor_userId_key" ON "Sponsor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeCampaign_campaignId_key" ON "YoutubeCampaign"("campaignId");

-- AddForeignKey
ALTER TABLE "UserCampaignCompletion" ADD CONSTRAINT "UserCampaignCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCampaignCompletion" ADD CONSTRAINT "UserCampaignCompletion_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sponsor" ADD CONSTRAINT "Sponsor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_sponsorId_fkey" FOREIGN KEY ("sponsorId") REFERENCES "Sponsor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstagramCampaign" ADD CONSTRAINT "InstagramCampaign_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeCampaign" ADD CONSTRAINT "YoutubeCampaign_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
