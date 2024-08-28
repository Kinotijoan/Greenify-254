// pages/api/posts/[postId]/like.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { postId } = req.query;
  const { userId } = req.body;

  if (req.method === 'POST') {
    try {
      // Check if the user has already liked the post
      const existingLike = await prisma.like.findUnique({
        where: {
          postId_authorId: {
            postId: String(postId),
            authorId: userId,
          },
        },
      });

      if (existingLike) {
        // User has already liked the post, so we'll delete the like
        await prisma.like.delete({
          where: {
            likeId: existingLike.likeId,
          },
        });
        res.status(200).json({ message: 'Post unliked' });
      } else {
        // User hasn't liked the post yet, so we'll create a new like
        await prisma.like.create({
          data: {
            postId: String(postId),
            authorId: userId,
          },
        });
        res.status(200).json({ message: 'Post liked' });
      }
    } catch (error) {
      console.error('Error liking/unliking post:', error);
      res.status(500).json({ error: 'An error occurred while liking/unliking the post.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}