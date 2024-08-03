import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { lucia } from "@/lib/lucia";

export async function POST(request: NextRequest) {
    const cookies = request.headers.get("cookie");
    const sessionCookie = cookies
      ?.split(";")
      .find((c: string) => c.trim().startsWith("sessionId="));
    if (!sessionCookie) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const sessionId = sessionCookie.split("=")[1];

    await lucia.invalidateSession(sessionId);

    const newSessionCookie = await lucia.createBlankSessionCookie();
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/login",
        "Set-Cookie": newSessionCookie.serialize(),
        "Referrer-Policy": "strict-origin",
      },
    });
}