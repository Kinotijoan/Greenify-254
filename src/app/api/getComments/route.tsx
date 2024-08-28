import prisma from '@/lib/prisma'


import { Comment } from '@prisma/client';


async function getCommentsByPostId(postId: string): Promise<Comment[]> {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        postId: postId,
      },
      include: {
        author: true,
      },
    });
    return comments;
  } catch (error) {
    console.error('Error getting comments:', error);
    throw error;
  }
}