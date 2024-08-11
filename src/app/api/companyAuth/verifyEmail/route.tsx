import prisma from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { isWithinExpirationDate } from "oslo";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest, response: NextResponse) {
  const res = await request.json();
  const { code } = res;

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

  const emailVerificationCode = await prisma.emailVerificationCode.findFirst({
    where: {
      accountId: user.id,
      code,
    },
  });

  if (!emailVerificationCode) {
    return NextResponse.json({ error: "Invalid code" }, { status: 400 });
  }

  if (!isWithinExpirationDate(emailVerificationCode.expiresAt)) {
    return NextResponse.json({ error: "Expired code" }, { status: 400 });
  }

  await prisma.account.update({
    where: {
      accountId: user.companyAccountId,
    },
    data: {
      emailVerified: true,
    },
  });
   await prisma.emailVerificationCode.deleteMany({
    where: {
      accountId: user.id,
    },
  });

  await lucia.invalidateUserSessions(user.id);

  const session = await lucia.createSession(user.accountId, {});
  const newSessionCookie = lucia.createSessionCookie(session.id);
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/location",
      "Set-Cookie": newSessionCookie.serialize(),
    },
  });
}
