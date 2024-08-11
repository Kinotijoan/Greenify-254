/*
  Warnings:

  - The values [USER] on the enum `userRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `email` on the `CompanyAccount` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `CompanyAccount` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `EmailVerificationCode` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Individual` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Individual` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `PasswordResetToken` table. All the data in the column will be lost.
  - Added the required column `accountId` to the `EmailVerificationCode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `PasswordResetToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "userRole_new" AS ENUM ('COMPANYACCOUNT', 'INDIVIDUAL');
ALTER TABLE "Account" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "Account" ALTER COLUMN "role" TYPE "userRole_new" USING ("role"::text::"userRole_new");
ALTER TYPE "userRole" RENAME TO "userRole_old";
ALTER TYPE "userRole_new" RENAME TO "userRole";
DROP TYPE "userRole_old";
ALTER TABLE "Account" ALTER COLUMN "role" SET DEFAULT 'INDIVIDUAL';
COMMIT;

-- DropForeignKey
ALTER TABLE "EmailVerificationCode" DROP CONSTRAINT "EmailVerificationCode_userId_fkey";

-- DropForeignKey
ALTER TABLE "PasswordResetToken" DROP CONSTRAINT "PasswordResetToken_userId_fkey";

-- DropIndex
DROP INDEX "EmailVerificationCode_userId_idx";

-- DropIndex
DROP INDEX "Individual_email_key";

-- DropIndex
DROP INDEX "PasswordResetToken_userId_idx";

-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "role" SET DEFAULT 'INDIVIDUAL';

-- AlterTable
ALTER TABLE "CompanyAccount" DROP COLUMN "email",
DROP COLUMN "password";

-- AlterTable
ALTER TABLE "EmailVerificationCode" DROP COLUMN "userId",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Individual" DROP COLUMN "email",
DROP COLUMN "password";

-- AlterTable
ALTER TABLE "PasswordResetToken" DROP COLUMN "userId",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "EmailVerificationCode_accountId_idx" ON "EmailVerificationCode"("accountId");

-- CreateIndex
CREATE INDEX "PasswordResetToken_accountId_idx" ON "PasswordResetToken"("accountId");

-- AddForeignKey
ALTER TABLE "EmailVerificationCode" ADD CONSTRAINT "EmailVerificationCode_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordResetToken" ADD CONSTRAINT "PasswordResetToken_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;
