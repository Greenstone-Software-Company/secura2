import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../utils/mongodb';
import { ObjectId } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'POST') {
    // Cast a vote
    const { option } = req.body;
    const poll = await db.collection('polls').findOne({ _id: new ObjectId(id as string) });
    const updatedOptions = poll.options.map((opt) =>
      opt.option === option ? { ...opt, votes: opt.votes + 1 } : opt
    );
    await db.collection('polls').updateOne(
      { _id: new ObjectId(id as string) },
      { $set: { options: updatedOptions } }
    );
    const updatedPoll = await db.collection('polls').findOne({ _id: new ObjectId(id as string) });
    res.status(200).json(updatedPoll);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
