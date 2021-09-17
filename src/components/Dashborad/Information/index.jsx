import { Box, Grid } from "@material-ui/core";
import React from "react";

import Contact from "./Contact";
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
        <Grid item sm={6}>
          <Box>
            <Photos />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Grid>
            <Box mt={1}>
              <Basic />
            </Box>

            <Box mt={1}>
              <About />
            </Box>

            <Box mt={1}>
              <Contact />
            </Box>

            <Box mt={1}>
              <Education />
            </Box>

            <Box mt={1}>
              <Experience />
            </Box>

            <Box mt={1}>
              <Trainings />
            </Box>
          </Grid>
        </Grid>

        <Grid item sm={6}>
          <Grid>
            <Box mt={1}>
              <Summary />
            </Box>

            <Box mt={1}>
              <Skills />
            </Box>

            <Box mt={1}>
              <Awards />
            </Box>

            <Box mt={1}>
              <Certificates />
            </Box>
            <Box mt={1}>
              <Referrence />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default Information;
