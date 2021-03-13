import React, { useState } from 'react';
import {
  Button,
  Typography,
  makeStyles,
  CircularProgress,
  Container,
  Grid,
} from '@material-ui/core';

import useFileUpload from './FileUpload';

// directly taken from Jason's sample repo
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  imageSelector: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(1),
    width: '100%',
  },
  imageUploader: {
    width: '10%',
    margin: theme.spacing(1),
  },
}));

export default function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const classes = useStyles();

  const selectFile = (event) => {
    const { files } = event.target;
    setSelectedFile(files[0]);
  };

  const progressUpdater = (event) => {
    setUploadProgress(Math.round((100 * event.loaded)) / event.total);
  };

  const upload = () => {
    if (selectedFile) {
      useFileUpload('image', selectedFile, progressUpdater)
        .then(() => {
          setSelectedFile(null);
        })
        .catch((err) => {
          setError(err);
          setUploadProgress(0);
        });
    }
  };

  return (
    <Grid className={classes.root}>
      <Container className={classes.imageSelector}>
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: 'none' }}
            type="file"
            onChange={selectFile}
          />
          <Button
            variant="contained"
            color="inherit"
            component="span"
          >
            Choose your image:
          </Button>
          { !selectedFile
            ? (<Typography> File Selected: none </Typography>)
            : (
              <Typography>
                File Selected:
                {` ${selectedFile.name}`}
              </Typography>
            ) }
        </label>
      </Container>
      <Button
        variant="contained"
        color="inherit"
        className={classes.imageUploader}
        disabled={!selectedFile}
        onClick={upload}
      >
        Give Us The Pic!
      </Button>
      <CircularProgress variant="determinate" value={uploadProgress} />
      { error ? <div> Something is not quite right! </div> : null }
    </Grid>
  );
}
