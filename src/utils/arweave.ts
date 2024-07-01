import Arweave from 'arweave';

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https',
  timeout: 20000,
  logging: false,
});

export const uploadToArweave = async (file: File, wallet: any) => {
  try {
    // Read the file as an ArrayBuffer
    const fileBuffer = await file.arrayBuffer();
    
    // Create a transaction
    const transaction = await arweave.createTransaction({
      data: fileBuffer,
    }, wallet);

    // Add tags (optional)
    transaction.addTag('Content-Type', file.type);

    // Sign the transaction
    await arweave.transactions.sign(transaction, wallet);

    // Post the transaction
    const response = await arweave.transactions.post(transaction);

    if (response.status === 200) {
      console.log('File successfully uploaded to Arweave.');
    } else {
      console.error('Failed to upload file to Arweave:', response);
    }

    return transaction.id;
  } catch (error) {
    console.error('Error uploading file to Arweave:', error);
    throw new Error('Error uploading file to Arweave');
  }
};
