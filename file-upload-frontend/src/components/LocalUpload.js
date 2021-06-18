/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import axios from 'axios';
import UploadFile from './UploadFile';

const LocalUpload = () => {
  const [selectedFile, setSelectedFile] = useState('');
  const [fileName, setFileName] = useState('');
  // On file select 
  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const onFileNameChange = (event) => {
    const { value } = event.target;
    setFileName(value);
  };
  // On file upload (click the upload button)
  const onFileUpload = (e) => {
    e.preventDefault();
    // Create an object of formData
    const data = new FormData();
    // Update the data object
    data.append('name', fileName);
    data.append('myFile', selectedFile);
  
    // Request made to the backend api
    // Send data object
    axios.post('http://localhost:5000/upload', data)
      .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
      setSelectedFile('');
      setFileName('');
      // eslint-disable-next-line no-console
      console.log('The file is successfully uploaded');
      }).catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error);
      });
  };
  
  return (
    <UploadFile 
      selectedFile={selectedFile}
      fileName={fileName}
      onFileChange={onFileChange}
      onFileNameChange={onFileNameChange}
      onFileUpload={onFileUpload}
    />
  ); 
};

export default LocalUpload;
