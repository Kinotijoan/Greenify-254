import prisma from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { hash } from "@node-rs/argon2";
import { NextResponse, NextRequest } from "next/server";
import { generateIdFromEntropySize } from "lucia";
import { userRole } from "@prisma/client";
import { generateEmailVerificationCode } from "../../../lib/functions";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  const res = await request.json();
  const password = res.password;
  const hashedpassword = await hash(password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const userId = generateIdFromEntropySize(16);

  try {
    const account = await prisma.account.findUnique({
      where: {
        email: res.email,
      },
    });

    if (account) {
      return NextResponse.json(
        {
          message: "User already exists either as a Company or a User Account",
        },
        { status: 500 }
      );
    } else {
      await prisma.$transaction(async (prisma) => {
        const individual = await prisma.individual.create({
          data: {
            individualId: userId,
            firstName: res.firstName,
            lastName: res.lastName,
          },
        });

        await prisma.account.create({
          data: {
            accountId: userId,
            email: res.email,
            password: hashedpassword,
            IndividualId: individual.individualId,
            role: userRole.INDIVIDUAL,
          },
        });
      });
    }
    const subject = "Email Verification";
    const code = await generateEmailVerificationCode(userId, res.email);
    // Send email with code
    await sendEmail({ to: res.email, html: code, subject: subject });
    // Redirect to email verification page
    const session = await lucia.createSession(userId, {});
    console.log(session.id);
    const sessionCookie = lucia.createSessionCookie(session.id);
     return NextResponse.json(
       { message: "Signup successful, verification email sent." },
       {
         status: 200,
         headers: {
           "Set-Cookie": sessionCookie.serialize(),
         },
       }
     );
  } catch (error) {
    return NextResponse.json(
      { message: `Something Went wrong ${error}` },
      { status: 500 }
    );
    // Handle the error
  }
}
