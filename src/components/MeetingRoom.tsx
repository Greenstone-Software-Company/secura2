// src/components/MeetingRoom.tsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './MeetingRoom.module.css';
import Calendar from './Calendar';
import MeetingDirectory from './MeetingDirectory';
import MeetingFeed from './MeetingFeed';
import Sidebar from './Sidebar';

const MeetingRoom: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initWebRTC = async () => {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const videoElement = videoRef.current;
        if (videoElement) {
          videoElement.srcObject = localStream;
        }
      } catch (err) {
        if (err instanceof Error) {
          setError('Failed to initialize WebRTC client: ' + err.message);
        } else {
          setError('Failed to initialize WebRTC client.');
        }
      }
    };

    initWebRTC();

    return () => {
      const currentVideoRef = videoRef.current;
      if (currentVideoRef && currentVideoRef.srcObject) {
        const tracks = (currentVideoRef.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <div className={styles.welcomeMessage}>
            <h1>Welcome, Freddy!</h1>
            <p>View your upcoming meetings</p>
          </div>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search" />
            <button className={styles.searchButton}>
              <img src="/search-icon.svg" alt="Search" />
            </button>
          </div>
          <div className={styles.userAvatar}>
            <img src="/user-avatar.png" alt="User Avatar" />
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.meetingSchedule}>
            <h2 className={styles.sectionTitle}>Meeting schedule</h2>
            <Calendar />
          </div>
          <div className={styles.createNew}>
            <h2 className={styles.sectionTitle}>Create New</h2>
            <button>New meeting</button>
            <button>Create poll</button>
            <button>Upload document</button>
          </div>
          <div className={styles.meetingDirectory}>
            <h2 className={styles.sectionTitle}>Meeting Directory</h2>
            <MeetingDirectory />
          </div>
          <div className={styles.meetingFeed}>
            <h2 className={styles.sectionTitle}>Meeting Feed</h2>
            <MeetingFeed />
          </div>
        </div>
        <div className={styles.videoSection}>
          {error ? (
            <p className={styles.error}>{error}</p>
          ) : (
            <video
              ref={videoRef}
              autoPlay
              muted
              className={styles.video}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
