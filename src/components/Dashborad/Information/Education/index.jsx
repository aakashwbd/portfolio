import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React from "react";
import { useState } from "react";
import { useStyles } from "../Styled";
import { useEffect } from "react";
import EducationInput from "./EducationInput";

const Education = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState();
  const handleClick = () => {
    setExpanded(!expanded);
  };

  // const [educattionLavel, setEducationLevel] = useState("");

  // const handleChange = (event) => {
  //   setEducationLevel(event.target.value);
  // };
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

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <EducationInput/>
            {/* <Box>
              <Grid container>
                <Grid item sm={12}>
                  <InputLabel id="select">Education Level</InputLabel>
                  <Select
                    fullWidth
                    labelId="select"
                    id="select"
                    value={educattionLavel}
                    onChange={handleChange}
                  >
                    <MenuItem value={"B.Sc"}>B.Sc</MenuItem>
                    <MenuItem value={"M.Sc"}>M.Sc</MenuItem>
                    <MenuItem value={"B.B.A"}>B.B.A</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Box>
            <Box my={3}>
              <Grid container spacing={2}>
                <Grid item sm={8}>
                  <TextField
                    fullWidth
                    placeholder="Degree Name"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextField
                    type="number"
                    fullWidth
                    placeholder="Duration in Year"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sm={8}>
                  <TextField
                    fullWidth
                    placeholder="Institute Name"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextField
                    fullWidth
                    placeholder="Grades/CGPA"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                  />
                </Grid>
              </Grid> 
              <Grid container spacing={2}>
                <Grid item sm={4}>
                  <TextField
                    fullWidth
                    placeholder="Start"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextField
                    fullWidth
                    placeholder="End"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
            </Box> */}
            

            <Box mt={2} textAlign="right">
              <Button
                variant="contained"
                size="small"
                className={classes.btnColor}
              >
                Save
              </Button>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Education;
