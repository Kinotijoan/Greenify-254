import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { createPasswordResetToken } from "@/lib/functions";
import { sendEmail } from "@/lib/email";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const res = await request.json();

  try {
      const individual = await prisma.account.findUnique({
      where: {
        email: res.email,
      },
    });

    if (!individual) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 404 }
      );
    } else {
      const verificationCode = await createPasswordResetToken(
        individual.accountId
      );
      console.log("Verification code:", verificationCode);
      const resetLink = `http://localhost:3000/resetPassword/${verificationCode}`;
      const subject = "Reset Password";

      await sendEmail({ to: res.email, html: resetLink, subject: subject });

      return NextResponse.json(
        { message: "Password reset email sent" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
