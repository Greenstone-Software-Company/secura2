// Example: pages/api/upload.ts
import multer from 'multer';
import nextConnect from 'next-connect';

const upload = multer({ dest: '/tmp' });
const apiRoute = nextConnect();
apiRoute.use(upload.single('file'));
apiRoute.post((req, res) => {
  // handle file upload
  res.status(200).json({ data: 'file uploaded' });
});

export default apiRoute;

import { NextApiRequest, NextApiResponse } from 'next';
import { uploadToArweave } from '../../utils/arweave';
import { getSession } from 'next-auth/react';
import formidable from 'formidable';
import fs from 'fs';

// Disable body parser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing the files', err);
      return res.status(500).json({ message: 'Error parsing the files' });
    }

    try {
      const file = files.file as formidable.File;
      const fileData = fs.readFileSync(file.filepath);

      // Create a new File object (Browser File API may not be available, use Buffer instead)
      const arweaveFile = new File([fileData], file.originalFilename || 'upload');

      const transactionId = await uploadToArweave(arweaveFile, session.user.wallet);

      return res.status(200).json({ transactionId });
    } catch (error) {
      console.error('Error uploading file to Arweave:', error);
      return res.status(500).json({ message: 'Error uploading file to Arweave' });
    }
  });
};

export default handler;
