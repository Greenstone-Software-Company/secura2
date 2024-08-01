// src/components/MeetingSchedule.tsx
import React from 'react';
import styles from './MeetingSchedule.module.css';

const MeetingSchedule: React.FC = () => {
  return (
    <div className={styles.meetingSchedule}>
      <div className={styles.header}>
        <h1>Meeting Schedule</h1>
        <div className={styles.actions}>
          <button>Create a poll</button>
          <button>Upload a document</button>
          <button>Create New Meeting</button>
        </div>
      </div>
      <div className={styles.meetingList}>
        <h2>Upcoming Meetings</h2>
        <div className={styles.meetingItem}>
          <span>Project Kickoff</span>
          <span>Aug 15, 2024 | 10:00 AM - 11:00 AM</span>
        </div>
        <div className={styles.meetingItem}>
          <span>Design Review</span>
          <span>Aug 18, 2024 | 11:00 AM - 12:00 PM</span>
        </div>
        <h2>Past Meetings</h2>
        <div className={styles.meetingItem}>
          <span>Mobile app development</span>
          <span>Aug 08, 2024 | 02:00 PM - 03:00 PM</span>
        </div>
        <div className={styles.meetingItem}>
          <span>Budget discussion</span>
          <span>Aug 02, 2024 | 09:00 AM - 10:00 AM</span>
        </div>
      </div>
    </div>
  );
};

export default MeetingSchedule;
