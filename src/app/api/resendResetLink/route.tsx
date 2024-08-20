import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { createPasswordResetToken } from "@/lib/functions";
import { sendEmail } from "@/lib/email";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";


export async function POST(request: NextRequest) {
   try {
        const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
        console.log(sessionId);
        if (!sessionId) {
            console.log("no session id");
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { user } = await lucia.validateSession(sessionId);
        console.log("user", sessionId, user);

        if (!user) {
            console.log("no user");
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const individual = await prisma.account.findUnique({
            where: {
                email: user.email,
            },
        });

        if (!individual) {
            return NextResponse.json(
                { message: "User does not exist" },
                { status: 404 }
            );
        }

        const verificationCode = await createPasswordResetToken(individual.accountId);
        console.log("Verification code:", verificationCode);
        const resetLink = `http://localhost:3000/resetPassword/${verificationCode}`;
        const subject = "Reset Password";
        await sendEmail({ to: user.email, html: resetLink, subject: subject });
        return NextResponse.json(
            { message: "Password reset email sent" },
            { status: 200 }
        );
    
   } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
   }
}