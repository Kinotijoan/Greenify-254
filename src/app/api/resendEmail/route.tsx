import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { generateEmailVerificationCode } from "@/lib/functions";
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

    const account = await prisma.account.findUnique({
      where: {
        email: user?.email,
      },
    });

    if (!account) {
      return NextResponse.json({ message: "Account not found" }, { status: 404 });
    }

    const code = await generateEmailVerificationCode(
      account.accountId,
      account.email
    );
    await sendEmail({
      to: account.email,
      html: code,
      subject: "Email Verification",
    });

    return NextResponse.json({
      message: "Email sent",
    });

    const session = await lucia.createSession(account?.accountId || "", {});
    console.log(session.id);
    console.log("Joan Kinoti Grey");
    
    const sessionCookie = lucia.createSessionCookie(session.id);
    return new Response(null, {
      status: 200,
      headers: {
        "Set-Cookie": sessionCookie.serialize(),
      },
    });
  } catch (error) {
     return NextResponse.json(
      { message: `Something Went wrong ${error}` },
      { status: 500 }
    );
  }
}
