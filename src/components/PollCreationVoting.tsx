// src/components/PollCreationVoting.tsx
import React from 'react';
import styles from './PollCreationVoting.module.css';

const PollCreationVoting: React.FC = () => {
  return (
    <div className={styles.pollCreationVoting}>
      <h1>Poll Creation and Voting</h1>
      <div className={styles.createPoll}>
        <h2>Create poll</h2>
        <input type="text" placeholder="Enter your poll question?" />
        <input type="text" placeholder="Option A" />
        <input type="text" placeholder="Option B" />
        <input type="text" placeholder="Option C" />
        <input type="text" placeholder="Option D" />
        <button>Create New Poll</button>
        <button>Submit Poll</button>
      </div>
      <div className={styles.votingResults}>
        <h2>Voting Results</h2>
        <div className={styles.resultItem}>
          <p>Which is the best season of the year?</p>
          <p>Results: Summer - 45%, winter - 25%, spring - 20%, Autumn - 10%</p>
        </div>
        <div className={styles.resultItem}>
          <p>Do you prefer coffee or tea?</p>
          <p>Results: Coffee - 70%, Tea - 30%</p>
        </div>
      </div>
      <div className={styles.activePolls}>
        <h2>Active Polls</h2>
        <div className={styles.pollItem}>
          <p>Favorite Programming Language?</p>
          <button>Vote</button>
        </div>
        <div className={styles.pollItem}>
          <p>Your Best Vacation Destination?</p>
          <button>Vote</button>
        </div>
        <div className={styles.pollItem}>
          <p>Your Preferred Work Environment?</p>
          <button>Vote</button>
        </div>
      </div>
    </div>
  );
};

export default PollCreationVoting;
