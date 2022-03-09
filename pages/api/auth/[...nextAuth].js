import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
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
        const user = undefined;
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
