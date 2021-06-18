/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import axios from 'axios';
import UploadFile from './UploadFile';

const LocalUpload = () => {
  const [selectedFile, setSelectedFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [failMessage, setFailMessage] = useState('');
  const [inputKey, setInputKey] = useState(Date.now());
  // On file select 
  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName('');
    setSuccessMessage('');
    setFailMessage('');
  };
  const onFileNameChange = (event) => {
    const { value } = event.target;
    setFileName(value);
  };
  const clearSelection = () => {
    setInputKey(Date.now());
    setSelectedFile('');
  };
  // On file upload (click the upload button)
  const onFileUpload = async (e) => {
    e.preventDefault();
    if (selectedFile !== '') {
      try {
        // Create an object of formData
        const data = new FormData();
        // Update the data object
        data.append('name', fileName);
        data.append('myFile', selectedFile);
        // Request made to the backend api
        // Send data object
        const response = await axios.post('http://localhost:5000/upload', data);
        // eslint-disable-next-line no-console
        console.log(response);
        if (response.status === 200) {
          setInputKey(Date.now());
          setSelectedFile('');
          setFileName('');
          setSuccessMessage('The file is successfully uploaded');
          setFailMessage('');
        }
      } catch (error) {
        setFailMessage('Error: file apploading failed');
        setSuccessMessage('');
      }
    } else setFailMessage('Error: No File Selected');
  };

  return (
    <UploadFile
      selectedFile={selectedFile}
      fileName={fileName}
      onFileChange={onFileChange}
      onFileNameChange={onFileNameChange}
      onFileUpload={onFileUpload}
      title="Upload Locally"
      success={successMessage}
      fail={failMessage}
      resetInput={clearSelection}
      inputKey={inputKey}
    />
  );
};

export default LocalUpload;
