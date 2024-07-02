import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../utils/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();

  if (req.method === 'POST') {
    const { question, options } = req.body;
    const poll = await db.collection('polls').insertOne({ question, options });
    res.status(201).json(poll.ops[0]);
  } else if (req.method === 'GET') {
    const polls = await db.collection('polls').find({}).toArray();
    res.status(200).json(polls);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
