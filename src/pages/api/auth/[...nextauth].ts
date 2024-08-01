import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || ''
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string | undefined;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    }
  }
};

export default NextAuth(options);
