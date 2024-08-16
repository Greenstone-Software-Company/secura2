import React, { useEffect } from 'react';
import styles from '../styles/Index.module.css';
import MeetingRoom from '../components/MeetingRoom';
import Sidebar from '../components/Sidebar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login'); // Redirect to login page if not authenticated
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Optionally show a loading state while checking session
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <h1>Welcome, {session?.user?.name}</h1>
        <MeetingRoom />
      </div>
    </div>
  );
};

export default HomePage;
