// src/components/MeetingDirectory.tsx
import React from 'react';
import styles from './MeetingDirectory.module.css';

const MeetingDirectory: React.FC = () => {
  return (
    <div className={styles.directory}>
      <div className={styles.entry}>
        <span>Meeting documents and details</span>
        <span className={styles.icons}><img src="/icon-documents.svg" alt="Documents" /></span>
      </div>
      <div className={styles.entry}>
        <span>Upcoming meetings</span>
        <span className={styles.icons}><img src="/icon-upcoming.svg" alt="Upcoming" /></span>
      </div>
      <div className={styles.entry}>
        <span>Past meetings</span>
        <span className={styles.icons}><img src="/icon-past.svg" alt="Past" /></span>
      </div>
    </div>
  );
};

export default MeetingDirectory;
