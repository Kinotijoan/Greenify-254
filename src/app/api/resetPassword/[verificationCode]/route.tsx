import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { hash } from "@node-rs/argon2";
import { Individual } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { encodeHex } from "oslo/encoding";
import { sha256 } from "oslo/crypto";
import { isWithinExpirationDate } from "oslo";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";

export async function POST(request: NextRequest, response: NextResponse) {
  const res = await request.json();
  const {searchParams} = new URL(request.url)
  const verificationToken = searchParams.get('verificationCode')
  try{

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

    const tokenHash = encodeHex(await sha256(new TextEncoder().encode(verificationToken || "")));
    const token = await prisma.passwordResetToken.findFirst({
      where: {
        token: tokenHash,
      },
    });
    

    if (!token || isWithinExpirationDate(token.expiresAt)) {
     return NextResponse.json({ message: "User does not exist" });
    }

    await lucia.invalidateUserSessions(token.id);
    const hashedpassword = await hash(res.password);

    await prisma.account.update({
      where : {
        accountId: user.accountId,
      },
      data: {
        password: hashedpassword,
      },
    })

    if (token) {
      await prisma.passwordResetToken.deleteMany({
        where: {
          token: tokenHash,
        },
      });
    }

    const session = await lucia.createSession(user.accountId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/login",
        "Set-Cookie": sessionCookie.serialize(),
        "Referrer-Policy": "strict-origin",
      },
    });
    
    res.status(200).json({ message: "Password updated" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "Error updating password" });
  }
}