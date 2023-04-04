import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await axios.post('https://api.openai.com/v1/engine/davinci-codex/completions', {
    prompt: 'Hello, ',
    max_tokens: 60,
    n: 1,
    stop: ['\n'],
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  res.status(200).json(data);
}