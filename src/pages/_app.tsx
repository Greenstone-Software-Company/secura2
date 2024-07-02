// src/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <>
        <Navbar />
        <div className="container mx-auto p-4">
          <Component {...pageProps} />
        </div>
      </>
    </SessionProvider>
  );
}

export default MyApp;
