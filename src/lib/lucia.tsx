import { Lucia } from "lucia";
import { adapter } from "./prismaAdapter";
import { cache } from "react";
import { cookies } from "next/headers";
import { userRole } from "@prisma/client";


export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    console.log("Attributes from Database :" , attributes);
    
    return {
      // attributes has the type of DatabaseUserAttributes
      accountId: attributes.accountId,
      email: attributes.email,
      individualId: attributes.IndividualId,
      companyAccountId: attributes.companyAccountId,
      hashedPassword: attributes.password,
      role: attributes.role,
    };
  },
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  accountId: string;
  email: string;
  IndividualId?: string;
  companyAccountId?: string;
  password: string;
  role: userRole;
}

export const validateRequest = cache(async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
	if (!sessionId) return null;
	const { user, session } = await lucia.validateSession(sessionId);
	try {
		if (session && session.fresh) {
			const sessionCookie = lucia.createSessionCookie(session.id);
			cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
		}
		if (!session) {
			const sessionCookie = lucia.createBlankSessionCookie();
			cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
		}
	} catch {
		// Next.js throws error when attempting to set cookies when rendering page
	}
	return user;
});
