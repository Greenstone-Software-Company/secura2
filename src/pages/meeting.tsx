// pages/meeting.tsx
import React from 'react';
import MeetingRoom from '../components/MeetingRoom';
import Sidebar from '../components/Sidebar';

const MeetingPage: React.FC = () => {
  return (
    <div className="pageLayout">
      <Sidebar />
      <MeetingRoom />
    </div>
  );
};

export default MeetingPage;
