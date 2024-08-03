/*
  Warnings:

  - You are about to drop the column `email` on the `PasswordResetToken` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PasswordResetToken" DROP COLUMN "email";
