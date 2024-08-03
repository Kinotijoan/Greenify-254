import prisma from "@/lib/prisma";
import { verify } from "@node-rs/argon2";
import { lucia } from "@/lib/lucia";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest , response: NextResponse) {
  const res = await request.json();
  const email = res.email;

  try {
    const user = await prisma.individual.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
        return NextResponse.json({ message: "Incorrect Email or Password" });
    }

    const validPassword = await verify(user.password, res.password,{
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
    });

    if (!validPassword) {
      return NextResponse.json({ message: "Incorrect Email or Password" });
    }

    const session = await lucia.createSession(user.individualId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    return new Response(null, {
      status: 302,
      headers: {
        location: "/",
        "Set-Cookie": sessionCookie.serialize(),
      },
    });
    
  } catch (error) {}
}
