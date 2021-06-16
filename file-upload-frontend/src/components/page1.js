/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import axios from 'axios';
import {
 Grid, Typography, Button, TextField 
} from '@material-ui/core';

const FirstPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
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
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          File Upload using React
        </Typography>
      </Grid>
      <Grid container justify="center" direction="column" item xs={12}>
        <form onSubmit={onFileUpload}>
          <Grid container justify="center" item xs={12}>
            <Typography>File Name:</Typography>
            <TextField
              type="text"
              name="fileName"
              onChange={onFileNameChange}
            />
          </Grid>
          <Grid container justify="center" item xs={12}>
            <TextField
              type="file"
              name="file"
              onChange={onFileChange}
            />
          </Grid>
          <Grid container justify="center" item xs={12}>
            <Button variant="contained" type="submit">
              Upload
            </Button>
          </Grid>
        </form>
      </Grid>
      <Grid container justify="center" item xs={12}>
        {fileData()}
      </Grid>
    </Grid>
  ); 
};

export default FirstPage;
