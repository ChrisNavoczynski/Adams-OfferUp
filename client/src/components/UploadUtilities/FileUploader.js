import React, { useState } from 'react';
import {
  Button,
  Typography,
  CircularProgress,
  makeStyles,
} from '@material-ui/core';

import useFileUpload from './FileUpload';

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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(1),
    width: '100%',
  },
  imageUploader: {
    width: '10vw',
    margin: theme.spacing(1),
  },
}));

export default function FileUploader() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const classes = useStyles();

  const selectFiles = (event) => {
    const { files } = event.target;
    setSelectedFiles(files);
  };

  const progressUpdater = (event) => {
    setUploadProgress(Math.round((100 * event.loaded)) / event.total);
  };

  const upload = () => {
    console.log('files to upload', selectedFiles);
    if (selectedFiles) {
      useFileUpload('image', selectedFiles, progressUpdater)
        .then((response) => {
          console.log(response.data.message);
          setSelectedFiles(null);
        })
        .catch((err) => {
          setError(err);
          setUploadProgress(0);
        });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.imageSelector}>
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: 'none' }}
            type="file"
            onChange={selectFiles}
          />
          <Button
            variant="contained"
            color="primary"
            component="span"
          >
            Choose an image:
          </Button>
        </label>
        { selectedFiles ? (
          <Typography>
            {selectedFiles.name}
          </Typography>
        ) : <div>Select a File</div> }
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.imageUploader}
        disabled={!selectedFiles}
        onClick={upload}
      >
        Upload
      </Button>
      <CircularProgress variant="determinate" value={uploadProgress} />
      { error ? <div> Whoops! </div> : null }
    </div>
  );
}
