-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "eventDate" TIMESTAMP(3),
ADD COLUMN     "eventLocation" TEXT,
ADD COLUMN     "eventTime" TEXT,
ADD COLUMN     "productPrice" DOUBLE PRECISION,
ADD COLUMN     "websiteLink" TEXT;
