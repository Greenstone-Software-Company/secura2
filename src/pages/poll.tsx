// pages/poll.tsx
import React from 'react';
import PollCreationVoting from '../components/PollCreationVoting';
import Sidebar from '../components/Sidebar';

const PollPage: React.FC = () => {
  return (
    <div className="pageLayout">
      <Sidebar />
      <PollCreationVoting />
    </div>
  );
};

export default PollPage;
