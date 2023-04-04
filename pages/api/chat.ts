import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await axios.post('https://api.openai.com/v1/engine/davinci-codex/completions', {
    // text sent to API
    prompt: 'Hello, ',

    // max length of text which API generates
    max_tokens: 60,

    // the number of text which API generates
    n: 1,

    // end keyword API generates
    stop: ['\n'],
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  res.status(200).json(data);
}