import nextAuth from "next-auth/next";
import credentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

import { verifyPassword } from "../../../utils/auth";
const prisma = new PrismaClient();

export default nextAuth({
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  providers: [
    credentialsProvider({
      async authorize(credentials, req) {
        const user = await prisma.auth.findFirst({
          where: {
            username: credentials.username,
            level: credentials.level,
          },
        });

        if (!user) {
          throw new Error("User not found");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Could not log in");
        }
        return {
          username: user.username,
          level: user.level,
        };
      },
    }),
  ],
});
