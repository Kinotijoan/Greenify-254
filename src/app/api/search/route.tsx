import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query } = req;
    const { search } = query.query as string;

    let filter = {};

    if (search) {
        filter = {
            OR: [
                { name: { contains: search , mode: 'insensitive' } },
                { email: { contains: search , mode: 'insensitive' } },
                { district: { contains: search , mode: 'insensitive' } },
                { county: { contains: search , mode: 'insensitive' } },
                { location: { contains: search , mode: 'insensitive' } },
                { address: { contains: search , mode: 'insensitive' } },
                { wasteType: { contains: search , mode: 'insensitive' } },
                { facilityType: { contains: search , mode: 'insensitive' } },
            ],
        };
    }

    const companies = await prisma.wasteFacility.findMany({
        where: filter,
    });

    res.status(200).json(companies);
};

export default handler;
