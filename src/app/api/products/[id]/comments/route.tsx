import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { lucia } from "@/lib/lucia";
import { z } from "zod";
import { Content } from "next/font/google";




export const GET = async (req: NextRequest, { params: { id } }: { params: { id: string } }) => {
  const comments = await prisma.comment.findMany(
    {
      where: {
        postId: id
      }
    }
  )
  return NextResponse.json({ comments: comments })
}






export const POST = async (req: NextRequest, { params: { id } }: { params: { id: string } }) => {

  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  console.log(sessionId);

  if (!sessionId) {
    console.log("no session id");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { user } = await lucia.validateSession(sessionId);

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
    return NextResponse.json(
      { message: "Account not found" },
      { status: 404 }
    );
  }
  const commentSchema = z.object({
    content: z.string().min(1).max(50),
  })

  const data = await req.json();
  const validation = await commentSchema.safeParse(data)
  if (!validation.success) return NextResponse.json(validation.error.format())

  const comment = await prisma.comment.create({
    data: {
      ...validation.data,
      postId: id,
      authorId: account!.IndividualId as string
    }
  })

  return NextResponse.json(comment)
}
