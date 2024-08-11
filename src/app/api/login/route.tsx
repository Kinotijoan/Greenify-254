import prisma from "@/lib/prisma";
import { verify } from "@node-rs/argon2";
import { lucia } from "@/lib/lucia";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest, response: NextResponse) {
  const res = await request.json();
  const email = res.email;

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

    const individual = await prisma.account.findUnique({
      where: {
        email: user?.email,
        emailVerified: true,
      },
    });

    if (!individual) {
      return NextResponse.json({ message: "Incorrect Email or Password" });
    }

    const validPassword = await verify(individual.password, res.password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    if (!validPassword) {
      return NextResponse.json({ message: "Incorrect Email or Password" });
    }

    const session = await lucia.createSession(user.accountId, {});
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
