import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { db } from "./db";

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token.uid) {
        session.user.id = token.uid;
      }
      return {
        ...session,
        user: {
          ...session.user,
          id: session.user.id,
        },
      };
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
    CredentialProvider({
      name: "creds",
      credentials: {
        name: {},
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const { id, name, email, password, regNo, flag } = credentials as {
          id: string;
          name: string;
          email: string;
          regNo: number;
          password: string;
          flag: number;
        };
        const admin = { id: "1", name: "Admin", password: "admin@123" };
        if (flag == 3) {
          if (name == admin.name && password == admin.password) {
            return admin;
          }
        }
        //Student Login
        if (flag == 2) {
          const findUser = await db.user.findFirst({
            where: { regno: regNo, password: password },
            select: { id: true, regno: true, password: true, name: true },
          });
          if (findUser) {
            return {
              id: findUser.id,
              name: findUser.name,
              regNo: findUser.regno,
              password: findUser.password,
            };
          } else {
            throw new Error("Invalid Credentials");
          }
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
};

export default NextAuth(authOptions);
