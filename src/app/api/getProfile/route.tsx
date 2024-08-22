import prisma from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CompanyAccount, Individual, User } from "@/lib/types/Types";

export async function Get(request: NextRequest) {
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

    let res: Individual | CompanyAccount

    if (account.role === "INDIVIDUAL") {
      const individual = await prisma.individual.findUnique({
        where: {
          individualId:
            account.IndividualId !== null ? account.IndividualId : undefined,
        },
        select: {
            userName: true,
            phoneNumber: true,
            profileimageUrl: true,
        }
      });

      res = {...individual, email: account.email};
    } else {
      const company = await prisma.companyAccount.findUnique({
        where: {
          companyAccountId:
            account.companyAccountId !== null
              ? account.companyAccountId
              : undefined,
        },
        select: {
            name: true,
            phoneNumber: true,
            bio: true,
            profileImageUrl: true,
            location: true,
        },
      });

        res = {...company, email: account.email};
    }

    return NextResponse.json(res);
  } catch (error) {
    console.error("Error getting user profile:", error);
    return NextResponse.json(
      { error: "Failed to get user profile" },
      { status: 500 }
    );
  }
}
