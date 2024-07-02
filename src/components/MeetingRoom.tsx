// src/components/MeetingRoom.tsx
import React, { useEffect, useRef, useState } from 'react';

const MeetingRoom: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initWebRTC = async () => {
      try {
        // Get user media (camera and microphone)
        const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        
        // Set the local stream to the video element
        if (videoRef.current) {
          videoRef.current.srcObject = localStream;
        }

        // Additional WebRTC setup and event listeners here
        // This is where you would set up your WebRTC connection, signaling, etc.
      } catch (err) {
        setError('Failed to initialize WebRTC client: ' + err.message);
      }
    };

    initWebRTC(); 

    return () => {
      // Clean up WebRTC connections and event listeners here
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
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
