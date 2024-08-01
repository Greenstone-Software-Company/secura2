import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../utils/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: 'Poll ID is required' });
  }

  const { db } = await connectToDatabase();

  if (req.method === 'POST') {
    const { option } = req.body;
    
    if (!option) {
      return res.status(400).json({ message: 'Option is required' });
    }

    const poll = await db.collection('polls').findOne({ _id: new ObjectId(id as string) });

    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }

    const updatedOptions = poll.options.map((opt: any) =>
      opt.option === option ? { ...opt, votes: opt.votes + 1 } : opt
    );

    await db.collection('polls').updateOne(
      { _id: new ObjectId(id as string) },
      { $set: { options: updatedOptions } }
    );

    return res.status(200).json({ message: 'Vote recorded successfully.' });
  } else {
    return res.status(405).json({ message: 'Method not allowed.' });
  }
}
