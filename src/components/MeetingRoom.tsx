import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useHuddle01 } from '@huddle01/react';
import { useAudio, useVideo, usePeers, useRoom } from '@huddle01/react/hooks';
import Image from 'next/image';
import styles from './MeetingRoom.module.css';
import MeetingSchedule from './MeetingSchedule';
import MeetingDirectory from './MeetingDirectory';
import MeetingFeed from './MeetingFeed';
import Sidebar from './Sidebar';

const MeetingRoom: React.FC = () => {
  const { data: session } = useSession();
  const { initialize, isInitialized } = useHuddle01();
  const { joinRoom, leaveRoom } = useRoom();
  const { produceAudio, stopProducingAudio } = useAudio();
  const { produceVideo, stopProducingVideo } = useVideo();
  const { peers } = usePeers();

  const [roomId, setRoomId] = useState<string>('');
  const [isJoined, setIsJoined] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initialize(process.env.NEXT_PUBLIC_HUDDLE01_PROJECT_ID as string);
  }, [initialize]);

  const handleJoin = async () => {
    if (isInitialized && roomId) {
      try {
        await joinRoom({
          roomId: roomId,
          token: 'your_token_here' // Replace with your actual token logic
        });
        setIsJoined(true);
        await produceAudio();
        await produceVideo();
      } catch (err) {
        setError('Failed to join the meeting room.');
        console.error(err);
      }
    }
  };

  const handleLeave = async () => {
    try {
      await stopProducingAudio();
      await stopProducingVideo();
      await leaveRoom();
      setIsJoined(false);
    } catch (err) {
      setError('Failed to leave the meeting room.');
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <div className={styles.welcomeMessage}>
            <h1>Welcome, {session?.user?.name || 'Board Member'}!</h1>
            <p>Manage your board meetings</p>
          </div>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search meetings or documents" />
            <button className={styles.searchButton}>
              <Image src="/icons/search-icon.png" alt="Search" width={20} height={20} />
            </button>
          </div>
          <div className={styles.userAvatar}>
            {session?.user?.image ? (
              <Image src={session.user.image} alt="User Avatar" width={40} height={40} />
            ) : (
              <Image src="/icons/user-avatar.png" alt="Default Avatar" width={40} height={40} />
            )}
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.meetingControls}>
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Enter Room ID"
            />
            {!isJoined ? (
              <button onClick={handleJoin} disabled={!isInitialized || !roomId}>
                Join Meeting
              </button>
            ) : (
              <button onClick={handleLeave}>Leave Meeting</button>
            )}
          </div>
          {error && <p className={styles.error}>{error}</p>}
          {isJoined && (
            <div className={styles.meetingRoom}>
              <div className={styles.videoGrid}>
                {peers.map((peer) => (
                  <video
                    key={peer.peerId}
                    ref={(videoElement) => {
                      if (videoElement && peer.videoTrack) {
                        videoElement.srcObject = new MediaStream([peer.videoTrack]);
                      }
                    }}
                    autoPlay
                    className={styles.videoStream}
                  />
                ))}
              </div>
              <div className={styles.audioControls}>
                {peers.map((peer) => (
                  <audio
                    key={peer.peerId}
                    ref={(audioElement) => {
                      if (audioElement && peer.audioTrack) {
                        audioElement.srcObject = new MediaStream([peer.audioTrack]);
                      }
                    }}
                    autoPlay
                  />
                ))}
              </div>
            </div>
          )}
          <MeetingSchedule />
          <div className={styles.meetingInfo}>
            <MeetingDirectory />
            <MeetingFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;