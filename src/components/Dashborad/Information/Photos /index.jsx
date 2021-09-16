import {
  Box,
  makeStyles,
  
} from "@material-ui/core";
import React from "react";
import { DropzoneArea } from 'material-ui-dropzone';
const useStyles = makeStyles({
  wrapper: {
    height: "50%",
    width: '50%',
    
  }
});

const Photos = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
     <DropzoneArea
    acceptedFiles={['image/*']}
    dropzoneText={"Drag and drop an image here or click"}
    onChange={(files) => console.log('Files:', files)}
  />
    </Box>
   
  );
};

export default Photos;
