/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
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

const UploadFile = ({
 selectedFile, fileName, onFileUpload, onFileChange, onFileNameChange
 }) => {
  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile !== '') {
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

export default UploadFile;
