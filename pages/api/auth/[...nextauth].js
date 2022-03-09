import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    // credentials provider for local auth
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        level: {
          label: "Level",
          type: "select",
          options: ["ADMIN", "DOCTOR", "RECEPTIONIST", "PHARMACIST"],
        },
      },
      async authorize(credentials, req) {
        // look for user in the database
        const user = await prisma.auth.findOne({
          where: {
            username: credentials.username,
          }
        });

        console.log(user);

        if (user) {
          const isValid = await verifyPassword(
            credentials.password,
            user.password
          );

          if (!isValid) {
            throw new Error("Could not verify password");
          }
          return {
            email: user.email,
            level: user.level,
          };
        } else {
          throw new Error("User not found");
        }
      }
    }),
  ],
});
