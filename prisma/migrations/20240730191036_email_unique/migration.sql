/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Individual` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Individual_email_key" ON "Individual"("email");
