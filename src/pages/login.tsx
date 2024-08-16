// pages/login.tsx
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

const LoginPage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      window.location.href = '/'; // Redirect to main page if already logged in
    }
  }, [session]);

  return (
    <div className="login-container">
      <h1>Welcome to Secura</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      <button onClick={() => signIn('microsoft')}>Sign in with Microsoft</button>
    </div>
  );
};

export default LoginPage;
