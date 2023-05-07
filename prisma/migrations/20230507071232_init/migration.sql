/*
  Warnings:

  - A unique constraint covering the columns `[kakaoID]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User_kakaoID_key` ON `User`(`kakaoID`);
