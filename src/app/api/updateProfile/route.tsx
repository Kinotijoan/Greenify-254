import prisma from "@/lib/prisma";
import { lucia } from "@/lib/lucia";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { promisify } from "util";
import fs from "fs";
import path from "path";

const pipeline = promisify(require("stream").pipeline);

export default async function POST(req: NextRequest, res: NextResponse) {
  try {
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

    if (account.role === "INDIVIDUAL") {
      const formData = await req.formData();
      const phoneNumber = formData.get("phoneNumber") as string;
      const userName = formData.get("userName") as string;
      const image = formData.get("profileImage") as File;

      const filePath = path.join(
        process.cwd(),
        "public",
        "profileImages",
        `${Date.now()}_${image.name}`
      );

      await pipeline(image.stream(), fs.createWriteStream(filePath));

      const relativeFilePath = `/postImages/${path.basename(filePath)}`;

      await prisma.individual.update({
        where: {
          individualId:
            account.IndividualId !== null ? account.IndividualId : undefined,
        },
        data: {
          phoneNumber: phoneNumber,
          userName: userName,
          profileimageUrl: relativeFilePath,
          updatedAt: new Date(),
        },
      });
    } else {
      const formData = await req.formData();
      const phoneNumber = formData.get("phoneNumber") as string;
      const bio = formData.get("bio") as string;
      const image = formData.get("profileImage") as File;

      const filePath = path.join(
        process.cwd(),
        "public",
        "profileImages",
        `${Date.now()}_${image.name}`
      );

      await pipeline(image.stream(), fs.createWriteStream(filePath));

      const relativeFilePath = `/postImages/${path.basename(filePath)}`;

      await prisma.companyAccount.update({
        where: {
          companyAccountId:
            account.companyAccountId !== null
              ? account.companyAccountId
              : undefined,
        },
        data: {
          phoneNumber: phoneNumber,
          bio: bio,
          profileImageUrl: relativeFilePath,
          updatedAt: new Date(),
        },
      });
    }

    return NextResponse.json({ message: "Profile updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
