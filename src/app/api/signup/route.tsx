import prisma from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { hash } from "@node-rs/argon2";
import { NextResponse, NextRequest } from "next/server";
import { generateIdFromEntropySize } from "lucia";
import { Individual } from "@prisma/client";
import { redirect } from "next/navigation";
import {
  generateEmailVerificationCode,
} from "./functions";
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
    const user: Individual | null = await prisma.individual.findUnique({
      where: {
        email: res.email,
      },
    });

    if (user) {
      return NextResponse.json({ message: "User already exists" });
    } else {
      await prisma.individual.create({
        data: {
          individualId: userId,
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
          password: hashedpassword,
        },
      });
    }
    const subject = "Reset Password"
    const code = await generateEmailVerificationCode(userId, res.email);
    // Send email with code
    await sendEmail({to:res.email, html:code, subject:subject})
    // Redirect to email verification page
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    return new Response(null,{
      status: 302,
      headers: {
        location:"/verifyEmail",
        "Set-Cookie": sessionCookie.serialize()
      }
    })
  } catch (error) {
    // Handle the error
  }
}
