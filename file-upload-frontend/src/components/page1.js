/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import axios from 'axios';
import {
 Grid, Typography, Button, TextField, makeStyles 
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  xMargin: {
    margin: '1rem 0'
  },
  yMargin: {
    margin: '0 1rem'
  }
}));

const FirstPage = () => {
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
            {fileName !== '' ? fileName : selectedFile.name}
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

  const classes = useStyles();

  return (
    <Grid container justify="center" item xs={12} spacing={2} style={{ margin: 'auto' }}>
      <Grid container justify="center" item xs={12}>
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          Upload locally
        </Typography>
      </Grid>
      <Grid container justify="center" direction="column" item xs={12}>
        <form onSubmit={onFileUpload}>
          <Grid container justify="center" item xs={12} className={classes.xMargin}>
            <TextField
              type="file"
              name="file"
              // value={selectedFile}
              variant="outlined"
              onChange={onFileChange}
            />
          </Grid>
          <Grid container justify="center" item xs={12} className={classes.xMargin}>
            <TextField
              type="text"
              label="File Name" 
              variant="outlined"
              className={classes.yMargin}
              name="fileName"
              value={fileName}
              onChange={onFileNameChange}
            />
            {/* </Grid>
          <Grid container justify="center" item xs={12}> */}
            <Button variant="contained" type="submit" className={classes.yMargin}>
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
