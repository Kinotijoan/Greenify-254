import { Lucia } from "lucia";
import { adapter } from "./prismaAdapter";


export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      firstName: attributes.firstName,
      lastName: attributes.lastName,
      email: attributes.email,
      phoneNumber: attributes.phoneNumber,
      hashedPassword: attributes.hashedPassword,

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
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: String;
  hashedPassword: string;
}
