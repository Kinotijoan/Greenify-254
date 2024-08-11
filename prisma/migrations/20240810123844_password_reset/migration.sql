/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `Individual` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmailVerificationCode" DROP CONSTRAINT "EmailVerificationCode_userId_fkey";

-- DropForeignKey
ALTER TABLE "PasswordResetToken" DROP CONSTRAINT "PasswordResetToken_userId_fkey";

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Individual" DROP COLUMN "emailVerified";

-- AddForeignKey
ALTER TABLE "EmailVerificationCode" ADD CONSTRAINT "EmailVerificationCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Account"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordResetToken" ADD CONSTRAINT "PasswordResetToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Account"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;
