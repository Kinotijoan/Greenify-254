import { TimeSpan, createDate } from "oslo";
import { generateRandomString, alphabet } from "oslo/crypto";
import prisma from "@/lib/prisma";
import { sha256 } from "oslo/crypto";
import { encodeHex } from "oslo/encoding";
import { generateIdFromEntropySize } from "lucia";


export async function generateEmailVerificationCode(
  userId: string,
  email: string
): Promise<string> {
  await prisma.emailVerificationCode.deleteMany({
    where: {
      accountId: userId,
    },
  })
  const code = generateRandomString(6, alphabet("0-9"));
  await prisma.emailVerificationCode.create({
    data: {
    accountId: userId,
    email,
    code,
    expiresAt: createDate(new TimeSpan(15, "m")), // 15 minutes
    },
  });
  return code;
}



export async function createPasswordResetToken(userId: string) {
  await prisma.passwordResetToken.deleteMany({
    where: {
      accountId: userId,
    },
  });

  const tokenId = generateIdFromEntropySize(16);
  const token = encodeHex(await sha256(new TextEncoder().encode(tokenId)));

  await prisma.passwordResetToken.create({
    data: {
      accountId: userId,
      token: token,
      expiresAt: createDate(new TimeSpan(2, "h")),
    },
  });

  return token;
}


