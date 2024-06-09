import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";
import { randomBytes, randomUUID } from "crypto";

export const authOptions: NextAuthOptions = {
  // session: {
  //   strategy: "database",
  //   maxAge: 30 * 24 * 60 * 60,
  //   updateAge: 12 * 60 * 60,
  //   generateSessionToken: () => {
  //     return randomUUID?.() ?? randomBytes(32).toString("hex");
  //   },
  // },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
