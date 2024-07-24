import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const GET = async (req: NextRequest) => {
    const prisma = new PrismaClient();
    const searchQuery = req.nextUrl.searchParams.get('searchQuery');
    const page = parseInt(req.nextUrl.searchParams.get('page') || '1', 10);
    const pageSize = 20; // Set the number of companies per page

    try {
        const totalCompanies = await prisma.wasteFacility.count({
            where: {
                OR: [
                    { name: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { email: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { district: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { county: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { location: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { address: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { wasteType: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { facilityType: { contains: searchQuery ?? '', mode: 'insensitive' } },
                ],
            },
        });

        const results = await prisma.wasteFacility.findMany({
            where: {
                OR: [
                    { name: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { email: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { district: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { county: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { location: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { address: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { wasteType: { contains: searchQuery ?? '', mode: 'insensitive' } },
                    { facilityType: { contains: searchQuery ?? '', mode: 'insensitive' } },
                ],
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
        });

        return NextResponse.json(results);
    } catch (error) {
        console.error('Error fetching waste facilities', error);
        return NextResponse.json({ error: `Error fetching waste facilities: ${error}` }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};