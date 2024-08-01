// pages/schedule.tsx
import React from 'react';
import MeetingSchedule from '../components/MeetingSchedule';
import Sidebar from '../components/Sidebar';

const SchedulePage: React.FC = () => {
  return (
    <div className="pageLayout">
      <Sidebar />
      <MeetingSchedule />
    </div>
  );
};

export default SchedulePage;
