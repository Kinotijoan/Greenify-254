import { TimeSpan, createDate } from "oslo";
import { generateRandomString, alphabet } from "oslo/crypto";
import prisma from "@/lib/prisma";

export async function generateEmailVerificationCode(
  userId: string,
  email: string
): Promise<string> {
  await prisma.emailVerificationCode.deleteMany({
    where: {
      userId: userId,
    },
  })
  const code = generateRandomString(6, alphabet("0-9"));
  await prisma.emailVerificationCode.create({
    data: {
    userId: userId,
    email,
    code,
    expiresAt: createDate(new TimeSpan(15, "m")), // 15 minutes
    },
  });
  return code;
}


