/*
  Warnings:

  - You are about to drop the column `brandDescription` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `brandName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `credit` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hasBrand` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sponsorId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "brandDescription",
DROP COLUMN "brandName",
DROP COLUMN "credit",
DROP COLUMN "hasBrand",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "redeemableCredits" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "sponsorId" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Sponsor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logo" TEXT,
    "taskOnlyCredits" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sponsor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeCampaign" (
    "id" SERIAL NOT NULL,
    "reward" INTEGER NOT NULL,
    "link" TEXT NOT NULL,
    "viewTarget" INTEGER NOT NULL,
    "viewDuration" INTEGER NOT NULL,
    "likeTarget" INTEGER,
    "commentTarget" INTEGER,
    "subscribeTarget" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeCampaign_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_sponsorId_key" ON "User"("sponsorId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sponsorId_fkey" FOREIGN KEY ("sponsorId") REFERENCES "Sponsor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
