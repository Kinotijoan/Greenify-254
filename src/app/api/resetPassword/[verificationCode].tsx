import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { hash } from "@node-rs/argon2";
import { Individual } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { encodeHex } from "oslo/encoding";
import { sha256 } from "oslo/crypto";
import { isWithinExpirationDate } from "oslo";
import { lucia } from "@/lib/lucia";

export async function POST(request: NextRequest, response: NextResponse) {
  const res = await request.json();
  const {searchParams} = new URL(request.url)
  const verificationToken = searchParams.get('verificationCode')
  try{

    const tokenHash = encodeHex(await sha256(new TextEncoder().encode(verificationToken || "")));
    const token = await prisma.passwordResetToken.findFirst({
      where: {
        token: tokenHash,
      },
    });
    if(token){
      await prisma.passwordResetToken.deleteMany({
        where: {
          token: tokenHash,
        },
      });
    }

    if (!token || isWithinExpirationDate(token.expiresAt)) {
     return NextResponse.json({ message: "User does not exist" });
    }

    await lucia.invalidateUserSessions(token.id);
    const hashedpassword = await hash(res.password);

    await prisma.individual.update({
      where : {
        individualId: token.userId,
      },
      data: {
        password: hashedpassword,
      },
    })

    const session = await lucia.createSession(token.userId, {});
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