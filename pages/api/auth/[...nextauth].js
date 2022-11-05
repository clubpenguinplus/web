import bcrypt from "bcrypt";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import Penguin from "../../../data/models/Penguin";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/manage/login",
  },
  providers: [
    CredentialsProvider({
      name: "Penguin",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "penguin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;

        const penguin = await Penguin.query().findOne({ username });

        if (!penguin) {
          return null;
        }

        const match = await bcrypt.compare(password, penguin.password);

        if (penguin && match) {
          return penguin;
        } else {
          return null;
        }
      },
    }),
  ],
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
};

export default NextAuth(authOptions);
