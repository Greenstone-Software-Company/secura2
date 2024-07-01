import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface FileMetadata {
  id: string;
  type: string;
  filename: string;
}

const FileList = () => {
  const [files, setFiles] = useState<FileMetadata[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const downloadFile = async (fileId: string, filename: string) => {
    try {
      const response = await axios.get(`/api/files/${fileId}`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <h2>File List</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.filename} ({file.type}){' '}
            <button onClick={() => downloadFile(file.id, file.filename)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
