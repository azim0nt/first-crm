// src/FileUploader.js
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('YOUR_SERVER_URL/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully');
      } else {
        alert('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('File upload failed');
    }
  };

  return (
    <div>
      <div className='dropzone'
        {...getRootProps()}
        style={{
          border: '2px dashed #5c61f2',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          borderRadius:'10px',
          height:'350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ width: '200px', marginTop: '10px' }}
        />
      )}
      <button onClick={handleUpload} style={{ marginTop: '10px' }}>
        Upload
      </button>
    </div>
  );
};

export default FileUploader;
