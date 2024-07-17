-- CreateTable
CREATE TABLE "Blog" (
    "blogId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("blogId")
);
