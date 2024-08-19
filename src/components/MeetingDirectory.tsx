import React from 'react';
import Image from 'next/image';
import styles from './MeetingDirectory.module.css';

const MeetingDirectory: React.FC = () => {
  return (
    <div className={styles.directory}>
      <div className={styles.entry}>
        <span>Meeting documents and details</span>
        <span className={styles.icons}>
          <Image src="/icons/icon-documents.svg" alt="Documents" width={24} height={24} />
        </span>
      </div>
      <div className={styles.entry}>
        <span>Upcoming meetings</span>
        <span className={styles.icons}>
          <Image src="/icons/icon-upcoming.svg" alt="Upcoming" width={24} height={24} />
        </span>
      </div>
      <div className={styles.entry}>
        <span>Past meetings</span>
        <span className={styles.icons}>
          <Image src="/icons/icon-past.svg" alt="Past" width={24} height={24} />
        </span>
      </div>
    </div>
  );
};

export default MeetingDirectory;
