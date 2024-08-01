// src/pages/index.tsx
import React from 'react';
import styles from '../styles/Index.module.css';
import Navbar from '../components/Navbar';
import MeetingRoom from '../components/MeetingRoom';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <MeetingRoom />
      </div>
    </div>
  );
};

export default HomePage;
