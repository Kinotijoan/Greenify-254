import {facilities} from './facilities';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    for (let facility of facilities) {
        await prisma.wasteFacility.create({
            data: {
                ...facility,
                latitude: facility.latitude.toString(),
                longitude: facility.longitude.toString(),
                address: facility.address.toString(),
            },
        });
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
})