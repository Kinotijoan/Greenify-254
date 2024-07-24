import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const companies = await prisma.wasteFacility.findMany({})
        return NextResponse.json(companies)
    } catch (error) {
        console.error("Error fetching waste facilities", error)
    }

}
