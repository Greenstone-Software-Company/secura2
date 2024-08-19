import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { HuddleClientProvider } from '@huddle01/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
      <HuddleClientProvider projectId={process.env.NEXT_PUBLIC_HUDDLE01_PROJECT_ID as string}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </HuddleClientProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;