/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import axios from 'axios';
import {
 Grid, Typography, Button, TextField 
} from '@material-ui/core';

const FirstPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };
  
  // On file upload (click the upload button)
  const onFileUpload = (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append(
      'myFile',
      selectedFile,
      selectedFile.name
    );
  
    // eslint-disable-next-line no-console
    console.log(...formData);
    // Details of the uploaded file
    // eslint-disable-next-line no-console
    console.log(selectedFile);
    
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    // Request made to the backend api
    // Send formData object
    axios.post('http://localhost:5000/upload', formData, config)
      .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
      // eslint-disable-next-line no-console
      console.log('The file is successfully uploaded');
      }).catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error);
      });
  };
  
  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
        <Grid item>
          <Typography variant="h4">File Details:</Typography>
          <Typography>
            File Name:
            {' '}
            {selectedFile.name}
          </Typography>
          <Typography>
            File Type:
            {' '}
            {selectedFile.type}
          </Typography>
          <Typography>
            Last Modified:
            {' '}
            {selectedFile.lastModifiedDate.toDateString()}
          </Typography>
        </Grid>
      );
    } 
      return (
        <Grid>
          <Typography>Choose before Pressing the Upload button</Typography>
        </Grid>
      );
  };
  return (
    <Grid container justify="center" item xs={12} spacing={2} style={{ margin: 'auto' }}>
      <Grid container justify="center" item xs={12}>
        <Typography variant="h3">
          File Upload using React
        </Typography>
      </Grid>
      <Grid container justify="center" item xs={12}>
        <form onSubmit={onFileUpload}>
          <TextField type="file" name="file" onChange={onFileChange} />
          <Button variant="contained" type="submit">
            Upload
          </Button>
        </form>
      </Grid>
      <Grid container justify="center" item xs={12}>
        {fileData()}
      </Grid>
    </Grid>
); 
};

export default FirstPage;
