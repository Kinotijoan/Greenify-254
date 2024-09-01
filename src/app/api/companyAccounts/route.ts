import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const GET = async (req: NextRequest) => {
    const prisma = new PrismaClient();

    try {
        

        const results = await prisma.companyAccount.findMany({
            
            
            // skip: (page - 1) * pageSize,
            // take: pageSize,
        });

        return NextResponse.json(results);
    } catch (error) {
        console.error('Error fetching waste facilities', error);
        return NextResponse.json({ error: `Error fetching companies that are within the platform: ${error}` }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};