import React, { useState } from 'react';
import { uploadToArweave } from '../utils/arweave';
import { useSession } from 'next-auth/react';
import { UserSession } from '../types';

const DocumentUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const { data: session } = useSession();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null); // Clear previous errors
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('No file selected');
      return;
    }
    if (!session?.user) {
      setError('User session not found');
      return;
    }
    
    try {
      const user = session.user as UserSession;
      const wallet = user.wallet; // Assuming wallet is stored in session
      if (!wallet) {
        throw new Error('Wallet not found in session');
      }
      setUploading(true);
      const transactionId = await uploadToArweave(file, wallet);
      console.log('Transaction ID:', transactionId);
      setUploading(false);
    } catch (error) {
      console.error('Upload failed:', error);
      setError('Upload failed: ' + error.message);
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md max-w-lg mx-auto mt-10">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      />
      <button 
        onClick={handleUpload} 
        className={`bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload to Arweave'}
      </button>
    </div>
  );
};

export default DocumentUpload;
