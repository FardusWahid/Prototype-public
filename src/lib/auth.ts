import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { connect } from "@/database/connect";

export const { auth, handlers } = NextAuth({
  providers: [Github, Google],
  adapter: DrizzleAdapter(connect),
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});
