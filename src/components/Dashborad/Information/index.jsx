import { Box, Container, Grid } from "@material-ui/core";
import React from "react";

import Contact from "./Contact";
import Specialization from "./Specialization";
import Dashboard from "../../../layouts/Dashboard";
import Basic from "./Basic";
import Photos from "./Photos ";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Trainings from "./Trainings";
import Summary from "./Summary";
import Skills from "./Skills";
import Awards from "./Awards";
import Certificates from "./Certificates";
import Referrence from "./Referrence";

const Information = () => {
  return (
    <Dashboard>
      <Grid container>
        <Grid item>
          <Box>
            <Photos />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Grid>
            <Box my={2}>
              <Basic />
            </Box>

            <Box mt={2}>
              <About />
            </Box>

            <Box mt={2}>
              <Contact />
            </Box>

            <Box mt={2}>
              <Education />
            </Box>

            <Box mt={2}>
              <Experience />
            </Box>

            <Box mt={2}>
              <Trainings />
            </Box>
          </Grid>
        </Grid>

        <Grid item sm={6}>
          <Grid>
            <Box mt={2}>
              <Summary />
            </Box>

            <Box mt={2}>
              <Skills />
            </Box>

            <Box mt={2}>
              <Awards />
            </Box>

            <Box mt={2}>
              <Certificates />
            </Box>
            <Box mt={2}>
              <Referrence />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* <Box>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item sm={5}>
            <Photos />
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="space-between">
          <Grid item sm={5}>
            <Basic />
          </Grid>
          <Grid item sm={5}>
            <Trainings />
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="space-between">
          <Grid item sm={5}>
            <About />
          </Grid>
          <Grid item sm={5}>
            <Contact />
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="space-between">
          <Grid item sm={5}>
            <Education />
          </Grid>
          <Grid item sm={5}>
            <Experience />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item sm={5}>
            <Summary />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={5}>
            <Skills />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={5}>
            <Awards />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={5}>
            <Certificates />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={5}>
            <Referrence />
          </Grid>
        </Grid>
      </Box> */}
    </Dashboard>
  );
};

export default Information;