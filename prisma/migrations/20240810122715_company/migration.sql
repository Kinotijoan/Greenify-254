/*
  Warnings:

  - You are about to drop the column `userId` on the `Session` table. All the data in the column will be lost.
  - Added the required column `accountId` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('COMPANYACCOUNT', 'USER');

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "userId",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Account" (
    "accountId" TEXT NOT NULL,
    "role" "userRole" NOT NULL DEFAULT 'USER',
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "IndividualId" TEXT,
    "companyAccountId" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("accountId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_IndividualId_fkey" FOREIGN KEY ("IndividualId") REFERENCES "Individual"("individualId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_companyAccountId_fkey" FOREIGN KEY ("companyAccountId") REFERENCES "CompanyAccount"("companyAccountId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;
