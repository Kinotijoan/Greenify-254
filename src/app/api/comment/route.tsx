// pages/api/comments.ts

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from "@/lib/prisma";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { content, postId, authorId } = req.body

      const comment = await prisma.comment.create({
        data: {
          content,
          postId,
          authorId,
        },
      })

      res.status(201).json(comment)
    } catch (error) {
      res.status(500).json({ error: (error as Error).message })
    }
  } else if (req.method === 'DELETE') {
    try {
      const { commentId } = req.query

      if (typeof commentId !== 'string') {
        throw new Error('Invalid comment ID')
      }

      const comment = await prisma.comment.delete({
        where: {
          commentId,
        },
      })

      res.status(200).json(comment)
    } catch (error) {
      res.status(500).json({ error: (error as Error).message })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}