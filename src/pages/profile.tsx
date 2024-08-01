// pages/profile.tsx
import React from 'react';
import ProfileManagement from '../components/ProfileManagement';
import Sidebar from '../components/Sidebar';

const ProfilePage: React.FC = () => {
  return (
    <div className="pageLayout">
      <Sidebar />
      <ProfileManagement />
    </div>
  );
};

export default ProfilePage;
