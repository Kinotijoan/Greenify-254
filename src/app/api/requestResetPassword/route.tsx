import prisma from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { NextResponse, NextRequest } from "next/server";
import { createPasswordResetToken, sendPasswordResetEmail } from "./functions";

export async function POST(request: NextRequest) {
    const res = await request.json();
    try {
        const user = await prisma.individual.findUnique({
            where: {
                email: res.email,
            },
        })
        if (!user) {
            return NextResponse.json({ message: "User does not exist" });
        }else{
            const verificationCode = await createPasswordResetToken(user.individualId);
            const resentLink = "http://localhost:3000/resetPassword/" + verificationCode;

            await sendPasswordResetEmail(res.email, resentLink);
        }

    } catch (error) {
        
    }
}