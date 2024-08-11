import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { createPasswordResetToken } from "./functions";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    const user = await prisma.individual.findUnique({
      where: {
        email: res.email,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    } else {
      const verificationCode = await createPasswordResetToken(
        user.individualId
      );
      const resetLink =
        "http://localhost:3000/resetPassword/" + verificationCode;
      const subject = "Reset Password";

      await sendEmail({ to: res.email, html: resetLink, subject: subject });
    }
  } catch (error) {}
}
