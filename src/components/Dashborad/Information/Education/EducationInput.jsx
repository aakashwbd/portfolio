import { Box, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "../Styled";
const EducationInput = () => {
    const classes = useStyles();

  
    const [educattionLavel, setEducationLevel] = useState("");
  
    const handleChange = (event) => {
      setEducationLevel(event.target.value);
    };
  return (
    <Box>
      <Box>
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
      </Box>
    </Box>
  );
};

export default EducationInput;
