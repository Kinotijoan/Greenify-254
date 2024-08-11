import prisma from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { hash } from "@node-rs/argon2";
import { NextResponse, NextRequest } from "next/server";
import { generateIdFromEntropySize } from "lucia";
import { Individual, userRole } from "@prisma/client";
import { generateEmailVerificationCode } from "../../functions";
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
  const companyId = generateIdFromEntropySize(16);

  try {
    const account = await prisma.account.findUnique({
      where: {
        email: res.email,
      },
    });

    if (account) {
      return NextResponse.json({
        message: "User already exists either as a Company or a User Account",
      });
    } else {
      await prisma.$transaction(async (prisma) => {
        const company = await prisma.companyAccount.create({
          data: {
            companyAccountId: companyId,
            name: res.name,
            location: res.location,
            phoneNumber: res.phoneNumber,
            bio: res.bio,
            profileImageUrl: res.profileImageUrl,
          },
        });

        await prisma.account.create({
          data: {
            accountId: companyId,
            email: res.email,
            password: hashedpassword,
            companyAccountId: company.companyAccountId,
            role: userRole.COMPANYACCOUNT,
          },
        });
      });
    }
    const subject = "Email Verification";
    const code = await generateEmailVerificationCode(companyId, res.email);
    // Send email with code
    await sendEmail({ to: res.email, html: code, subject: subject });
    // Redirect to email verification page
    const session = await lucia.createSession(companyId, {});
    console.log(session.id);
    const sessionCookie = lucia.createSessionCookie(session.id);
    return new Response(null, {
      status: 302,
      headers: {
        location: "/email_verification",
        "Set-Cookie": sessionCookie.serialize(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: `Something Went wrong ${error}` },
      { status: 500 }
    );
    // Handle the error
  }
}
