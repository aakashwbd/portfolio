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


const About = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState();
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const completeBtn = () => {
    setExpanded(!expanded);
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
              />
            </Box>

            <Box mt={2} textAlign="right">
              <Button
                variant="contained"
                size="small"
                className={classes.btnColor}
                onClick={completeBtn}
              >
                Complete
              </Button>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default About;
