// src/pages/index.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import MeetingRoom from '@/components/MeetingRoom';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl">Welcome to Secura</h1>
        <MeetingRoom />
      </main>
    </div>
  );
};

export default Home;

import React from 'react';
import DocumentUpload from '../components/DocumentUpload';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Arweave Upload Example</h1>
      <DocumentUpload />
    </div>
  );
};

export default HomePage;
