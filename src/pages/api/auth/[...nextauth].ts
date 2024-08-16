import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { OAuthConfig, Profile } from 'next-auth/providers';

// Custom Microsoft provider
const MicrosoftProvider = {
  id: 'microsoft',
  name: 'Microsoft',
  type: 'oauth',
  version: '2.0',
  scope: 'openid profile email',
  params: { grant_type: 'authorization_code' },
  accessTokenUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  authorizationUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code',
  profileUrl: 'https://graph.microsoft.com/oidc/userinfo',
  async profile(profile: Profile) {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
    };
  },
  clientId: process.env.MICROSOFT_CLIENT_ID as string,
  clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
} as OAuthConfig<Profile>;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    MicrosoftProvider,
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
    },
  },
});
