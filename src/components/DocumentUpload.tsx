import React, { useState } from 'react';
import { uploadToArweave } from '../utils/arweave';
import { useSession } from 'next-auth/react';
import { UserSession } from '../types';

const DocumentUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const { data: session } = useSession();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file && session?.user) {
      try {
        const user = session.user as UserSession;
        const wallet = user.wallet; // Assuming wallet is stored in session
        if (!wallet) {
          throw new Error('Wallet not found in session');
        }
        const transactionId = await uploadToArweave(file, wallet);
        console.log('Transaction ID:', transactionId);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    } else {
      console.error('No file selected or session is not defined');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md max-w-lg mx-auto mt-10">
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      />
      <button 
        onClick={handleUpload} 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
      >
        Upload to Arweave
      </button>
    </div>
  );
};

export default DocumentUpload;
