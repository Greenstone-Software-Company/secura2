import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      role?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      wallet?: string;
    };
  }

  interface User {
    role?: string;
    wallet?: string;
  }
}
