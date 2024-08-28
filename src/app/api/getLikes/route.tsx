// pages/api/posts/[postId]/likes.ts

import { NextApiRequest, NextApiResponse } from 'next';

import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const { postId } = req.query;

        try {
            const likeCount = await prisma.like.count({
                where: {
                    postId: String(postId),
                },
            });

            res.status(200).json({ likeCount });
        } catch (error) {
            console.error('Error getting likes:', error);
            res.status(500).json({ error: 'An error occurred while fetching the likes.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

