import { useState } from 'react';
import axios from 'axios';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // post request to API endpoint
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await axios.post('/api/chat', {
      prompt: inputText,
      max_tokens: 60,
      n: 1,
      stop: ['\n'],
    });

    setOutputText(data.choices[0].text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Input:</label>
        <input type="text" id="input" value={inputText} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <p>Output: {outputText}</p>
    </div>
  );
};

export default Home;
