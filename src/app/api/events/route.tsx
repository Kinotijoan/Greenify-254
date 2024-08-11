import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const GET = async (req: NextRequest) => {
    const prisma = new PrismaClient();
    // const pageSize = 20; // Set the number of products per page

    try {


        const results = await prisma.post.findMany({
            where: {
                category: { contains: "event", mode: 'insensitive' },

            },
            // skip: (page - 1) * pageSize,
            // take: pageSize,
        });

        return NextResponse.json(results);
    } catch (error) {
        console.error('Error companies', error);
        return NextResponse.json({ error: `Error fetching events: ${error}` }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};