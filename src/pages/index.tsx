// src/pages/index.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import MeetingRoom from '@/components/MeetingRoom';
import DocumentUpload from '@/components/DocumentUpload';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl mb-4">Welcome to Secura</h1>
        <div className="mb-8">
          <h2 className="text-xl mb-2">Meeting Room</h2>
          <MeetingRoom />
        </div>
        <div>
          <h2 className="text-xl mb-2">Document Upload</h2>
          <DocumentUpload />
        </div>
      </main>
    </div>
  );
};

export default Home;
