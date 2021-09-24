import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Contact from "./Contact";
import Education from "./Education";
import PersonalLife from "./PersonalLife";
import Profile from "./Profile";
import Trainings from "./Trainings";
import Skills from "./Skills";

import WorkExperience from "./WorkExperience";
import Available from "./Available";

const useStyles = makeStyles({
  bg: {
    background: "white",
  },
  box: {
    margin: 12,
  },
});
const TemplateTwo = () => {
  const classes = useStyles();
  return (
    <Box>
      <Profile />
      <Box className={classes.box}>
        <Grid container justifyContent="space-between" spacing={3}>
          <Grid item sm={6} className={classes.bg}>
            <Container maxWidth="sm">
              <PersonalLife />
              <Contact />
              <Education />
            </Container>
          </Grid>
          <Grid item sm={6}>
            <Container maxWidth="sm">
              <Trainings />
              <WorkExperience />
              <Skills />
              <Available />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TemplateTwo;
