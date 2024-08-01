// src/components/MeetingFeed.tsx
import React from 'react';
import styles from './MeetingFeed.module.css';

const MeetingFeed: React.FC = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.feedItem}>
        <img src="/user1.jpg" alt="User" className={styles.userImage} />
        <div>
          <p>Speaker in meeting insights 2024</p>
          <span>Checkout the latest updates...</span>
        </div>
      </div>
      <div className={styles.feedItem}>
        <img src="/user2.jpg" alt="User" className={styles.userImage} />
        <div>
          <p>Attendee in meeting insights 2024</p>
          <span>Stay tuned for important updates...</span>
        </div>
      </div>
    </div>
  );
};

export default MeetingFeed;
