import prisma from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { isWithinExpirationDate } from "oslo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const res = await request.json();
  const { code } = res;

  const cookies = request.headers.get("cookie");
  const sessionCookie = cookies
    ?.split(";")
    .find((c) => c.trim().startsWith("sessionId="));
  if (!sessionCookie) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sessionId = sessionCookie.split("=")[1];
  const { user } = await lucia.validateSession(sessionId);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  
    const emailVerificationCode = await prisma.emailVerificationCode.findFirst({
      where: {
        userId: user.id,
        code,

      },
    });

    if (!emailVerificationCode) {
      return NextResponse.json({ error: "Invalid code" }, { status: 400 });
    }

    if (!isWithinExpirationDate(emailVerificationCode.expiresAt)) {
      return NextResponse.json({ error: "Expired code" }, { status: 400 });
    }

    await prisma.emailVerificationCode.deleteMany({
      where: {
        userId: user.id,
      },
    });

    await lucia.invalidateUserSessions(user.id);

    await prisma.individual.update({
      where: {
        individualId: user.id
      },
      data: {
        emailVerified: true,
      },
    });
  

  const session = await lucia.createSession(user.id, {});
  const newSessionCookie = lucia.createSessionCookie(session.id);
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/login",
      "Set-Cookie": newSessionCookie.serialize(),
    },
  });
}
