// src/components/ProfileManagement.tsx
import React from 'react';
import styles from './ProfileManagement.module.css';

const ProfileManagement: React.FC = () => {
  return (
    <div className={styles.profileManagement}>
      <h1>Profile Management</h1>
      <div className={styles.profileInfo}>
        <img src="/profile-picture.jpg" alt="Profile" />
        <div className={styles.info}>
          <p>Name: Freddy Hopkins</p>
          <p>Email: freddyhopkins01@outlook.com</p>
          <p>Contact: +61 400 387 123</p>
          <button>Save Changes</button>
        </div>
      </div>
      <div className={styles.changePassword}>
        <h2>Change Password</h2>
        <input type="password" placeholder="Current Password" />
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm New Password" />
        <button>Update Password</button>
      </div>
    </div>
  );
};

export default ProfileManagement;
