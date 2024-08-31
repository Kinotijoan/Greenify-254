import { lucia } from "@/lib/lucia";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export const DELETE = async (req: NextRequest, { params: { commentId } }: { params: { commentId: string } }) => {
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


    const comment = await prisma.comment.delete({
        where: {
            commentId: commentId,
            authorId: account!.IndividualId as string
        }
    })

    return NextResponse.json(comment)
}
