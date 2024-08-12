import React from 'react';
import styles from '../styles/Index.module.css';
import MeetingRoom from '../components/MeetingRoom';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <MeetingRoom />
      </div>
    </div>
  );
};

export default HomePage;
