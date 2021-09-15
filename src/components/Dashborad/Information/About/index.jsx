import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";


import {useStyles} from '../Styled'
import axios from "axios";


const About = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState();
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const [about, setAbout] = useState({
    description: ''
  })
  const handelInput = (e) => {
    setAbout({...about, [e.target.name]: e.target.value})
  }
  const aboutBtn = (e) => {
    e.preventDefault();

    axios
    .post(`http://127.0.0.1:8000/api/information/about`, about)
    .then((res) => {});
  };
  return (
    <Box>
      <Card elevation={0} className={classes.card}>
        <CardHeader className={classes.cardTitle}
          title="About Me"
          action={
            <IconButton onClick={handleClick} className={classes.cardIcon}>
              {!expanded ? <AddCircleOutlineIcon /> : <HighlightOffIcon />}
            </IconButton>
          }
        />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box>
              <TextField
                fullWidth
                placeholder="Description"
                InputProps={{ disableUnderline: true }}
                className={classes.textField}
                multiline
                minRows="6"
                onChange={handelInput}
                name='description'
                value={about.description}
              />
            </Box>

            <Box mt={2} textAlign="right">
              <Button
                variant="contained"
                size="small"
                className={classes.btnColor}
                onClick={aboutBtn}
              >
                save
              </Button>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default About;
