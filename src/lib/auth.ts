import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/prisma/db";

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: "postgresql" }),
  emailAndPassword: { enabled: true },
  // User/Session/Account/Verification all use Postgres autoincrement ids,
  // so let the database assign them instead of better-auth generating strings.
  advanced: {
    database: {
      generateId: "serial",
    },
  },
  plugins: [nextCookies()], // must be last; lets Server Actions set cookies
});
