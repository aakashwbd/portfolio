import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Dialog,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React from "react";
import { useState } from "react";
import { useStyles } from "../Styled";
import { useEffect } from "react";
import EducationInput from "./EducationInput";

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const Education = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState();
  const handleClick = () => {
    setExpanded(!expanded);
  };

  // edit education btn 
  const editEducationBtn =()=>{
    
  }
  return (
    <Box>
      <Card elevation={0} className={classes.card}>
        <CardHeader
          className={classes.cardTitle}
          title="Education Background"
          action={
            <IconButton onClick={handleClick} className={classes.cardIcon}>
              {!expanded ? <AddCircleOutlineIcon /> : <HighlightOffIcon />}
            </IconButton>
          }
        />
        {/* <Dialog>
  
</Dialog> */}

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <CardHeader
              action={
                <IconButton onClick={editEducationBtn}>
                  <EditOutlinedIcon />
                </IconButton>
              }
            />
            <Grid container alignItems="center" justifyContent="center">
              <Grid item sm={10}>
                <Typography>Bachelor of Science</Typography>
                <Typography>Computer Scince</Typography>
                <Typography>2010-2011</Typography>
              </Grid>
            </Grid>
            {/* <EducationInput />

            <Box mt={2} textAlign="right">
              <Button
                variant="contained"
                size="small"
                className={classes.btnColor}
              >
                Save
              </Button>
            </Box> */}
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Education;
