import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";
import { useState } from "react";
import { useStyles } from "../Styled";
import { useEffect } from "react";

const Skills = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState();
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const [radio, setRadio] = useState();

  const handleChange = (event) => {
    setRadio(event.target.value);
  };

  return (
    <Box>
      <Card elevation={0} className={classes.card}>
        <CardHeader
          className={classes.cardTitle}
          title="Skills"
          action={
            <IconButton onClick={handleClick} className={classes.cardIcon}>
              {!expanded ? <AddCircleOutlineIcon /> : <HighlightOffIcon />}
            </IconButton>
          }
        />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>


            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  placeholder="Skill"
                  InputProps={{ disableUnderline: true }}
                  className={classes.textField}
                  // onChange={(e) => setName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Box my={3}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Skill Level</FormLabel>
                <RadioGroup value={radio} onChange={handleChange}>
                  <FormControlLabel
                    value="Beginner"
                    control={<Radio />}
                    label="Beginner"
                  />
                  <FormControlLabel
                    value="Intermediate"
                    control={<Radio />}
                    label="Intermediate"
                  />
                  <FormControlLabel
                    value="Semi-Expert"
                    control={<Radio />}
                    label="Semi-Expert"
                  />
                  <FormControlLabel
                    value="Expert"
                    control={<Radio />}
                    label="Expert"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <Box mt={2} textAlign="right">
              <Button
                variant="contained"
                size="small"
                className={classes.btnColor}

              >
                add more
              </Button>
            </Box>
            
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Skills;
