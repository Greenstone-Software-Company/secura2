import React from 'react';
import Poll from '../components/Poll';
import Vote from '../components/Vote';

const PollPage: React.FC = () => {
  return (
    <div>
      <Poll />
      <Vote />
    </div>
  );
};

export default PollPage;
