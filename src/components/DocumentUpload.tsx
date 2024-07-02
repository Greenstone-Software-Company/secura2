import React, { useState } from 'react';
import { uploadToArweave } from '../utils/arweave';
import { useSession } from 'next-auth/react';

const DocumentUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const { data: session } = useSession();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file && session && session.user) {
      try {
        const wallet = session.user.wallet; // Assuming wallet is stored in session
        const transactionId = await uploadToArweave(file, wallet);
        console.log('Transaction ID:', transactionId);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    } else {
      console.error('No file or session is not defined');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload to Arweave</button>
    </div>
  );
};

export default DocumentUpload;
