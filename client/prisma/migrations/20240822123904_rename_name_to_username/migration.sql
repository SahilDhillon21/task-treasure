/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/dbju1cqof/image/upload/v1724329120/task-treasure/avatar/default-icons8-character-500_xptyis.png',
ADD COLUMN     "username" TEXT NOT NULL;
