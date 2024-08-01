import nextConnect from 'next-connect';
import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import { uploadToArweave } from '../../utils/arweave';
import { getSession } from 'next-auth/react';

// Disable body parsing, so formidable can handle it
export const config = {
  api: {
    bodyParser: false,
  },
};

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>();

apiRoute.post(async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).send('Error parsing form');
      return;
    }

    // Get the session
    const session = await getSession({ req });
    if (!session || !session.user || !session.user.wallet) {
      res.status(401).send('Unauthorized');
      return;
    }

    const file = files.file as formidable.File;
    const arweaveFile = 'filepath' in file ? file.filepath : file.path;

    try {
      // Upload the file to Arweave
      const transactionId = await uploadToArweave(arweaveFile as unknown as File, session.user.wallet);
      res.status(200).json({ transactionId });
    } catch (error) {
      res.status(500).json({ error: 'Upload failed: ' + (error as Error).message });
    }
  });
});

export default apiRoute;
