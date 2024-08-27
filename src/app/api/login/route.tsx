import prisma from "@/lib/prisma";
import { verify } from "@node-rs/argon2";
import { lucia } from "@/lib/lucia";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest, response: NextResponse) {
  const res = await request.json();
  const email = res.email;

  try {
    

    const individual = await prisma.account.findUnique({
      where: {
        email: email,
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

   const session = await lucia.createSession(individual.accountId, {});
   const sessionCookie = lucia.createSessionCookie(session.id);

   console.log("Session created:", session);
   console.log("Session cookie:", sessionCookie);

   return new Response(null, {
     status: 200, 
     headers: {
       "Set-Cookie": sessionCookie.serialize(),
     },
   });

  } catch (error) {}
}
