import React, { useState } from 'react';

interface Option {
  option: string;
  votes: number;
}

const Poll: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<Option[]>([]);
  const [newOption, setNewOption] = useState('');

  const addOption = () => {
    if (newOption.trim()) {
      setOptions([...options, { option: newOption, votes: 0 }]);
      setNewOption('');
    }
  };

  const createPoll = async () => {
    // API call to save the poll
    const response = await fetch('/api/polls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, options }),
    });
    if (response.ok) {
      // Reset form after creating poll
      setQuestion('');
      setOptions([]);
    }
  };

  return (
    <div>
      <h2>Create Poll</h2>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="Option"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
        />
        <button onClick={addOption}>Add Option</button>
      </div>
      <ul>
        {options.map((opt, idx) => (
          <li key={idx}>{opt.option}</li>
        ))}
      </ul>
      <button onClick={createPoll}>Create Poll</button>
    </div>
  );
};

export default Poll;
