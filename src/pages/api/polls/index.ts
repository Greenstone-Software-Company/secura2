import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../utils/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase();

    if (req.method === 'POST') {
      const { question, options } = req.body;
      const result = await db.collection('polls').insertOne({ question, options });

      // Fetch the newly inserted document using the insertedId
      const poll = await db.collection('polls').findOne({ _id: result.insertedId });

      res.status(201).json(poll);
    } else if (req.method === 'GET') {
      const polls = await db.collection('polls').find({}).toArray();
      res.status(200).json(polls);
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Failed to connect to the database', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
