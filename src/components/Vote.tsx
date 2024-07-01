import React, { useState, useEffect } from 'react';

interface Poll {
  id: string;
  question: string;
  options: { option: string; votes: number }[];
}

const Vote: React.FC = () => {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [selectedOption, setSelectedOption] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchPolls = async () => {
      const response = await fetch('/api/polls');
      const data = await response.json();
      setPolls(data);
    };
    fetchPolls();
  }, []);

  const castVote = async (pollId: string) => {
    const response = await fetch(`/api/polls/${pollId}/vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ option: selectedOption[pollId] }),
    });
    if (response.ok) {
      // Update the poll data after voting
      const data = await response.json();
      setPolls((prevPolls) =>
        prevPolls.map((poll) => (poll.id === pollId ? data : poll))
      );
    }
  };

  return (
    <div>
      <h2>Vote on Polls</h2>
      {polls.map((poll) => (
        <div key={poll.id}>
          <h3>{poll.question}</h3>
          {poll.options.map((opt, idx) => (
            <div key={idx}>
              <input
                type="radio"
                id={`${poll.id}-${idx}`}
                name={poll.id}
                value={opt.option}
                onChange={() =>
                  setSelectedOption({ ...selectedOption, [poll.id]: opt.option })
                }
              />
              <label htmlFor={`${poll.id}-${idx}`}>{opt.option}</label>
            </div>
          ))}
          <button onClick={() => castVote(poll.id)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default Vote;
