// src/components/MeetingRoom.tsx
import React, { useEffect, useRef, useState } from 'react';
import { HuddleClient } from '@huddle01/web-sdk';

const MeetingRoom: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = new HuddleClient('<YOUR_API_KEY>');

    client.on('error', (err) => {
      setError(err.message);
    });

    client.on('joined', (room) => {
      console.log(`Joined room: ${room.id}`);
    });

    const joinRoom = async () => {
      try {
        await client.join('<ROOM_ID>');
        if (videoRef.current) {
          videoRef.current.srcObject = client.localStream;
        }
      } catch (err) {
        setError('Failed to join the room.');
      }
    };

    joinRoom();

    return () => {
      client.leave();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-full max-w-4xl border border-gray-300 rounded shadow-md"
        />
      )}
    </div>
  );
};

export default MeetingRoom;
