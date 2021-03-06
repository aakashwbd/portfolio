import React from "react";

import { Box, Card, Container } from "@material-ui/core";
import ProfileInformation from "./ProfileInformation";

import Dashboard from "../../../layouts/Dashboard";
import Availability from "./Availability";
import useStyles from "./Styled";
import Role from "./Role";
import Education from "./Education";
import Skills from "./Skills";
import Trainning from "./Trainning";
import Experience from "./Experience";
import Language from "./Language";

const Profile = () => {
  const classes = useStyles();
  return (
    <Dashboard>
      <Container className={classes.wrapper}>
        <Box mt={5}>
          <Card className={classes.prfileCard} elevation={0}>
            <ProfileInformation />
          </Card>
        </Box>
        <Box mt={0.5}>
          <Card className={classes.availalbityCard} elevation={0}>
            <Availability />
          </Card>
        </Box>
        <Box mt={0.5}>
          <Card className={classes.availalbityCard} elevation={0}>
            <Role />
          </Card>
        </Box>
        <Box mt={0.5}>
          <Card className={classes.availalbityCard} elevation={0}>
            <Skills />
          </Card>
        </Box>
        <Box mt={0.5}>
          <Card className={classes.availalbityCard} elevation={0}>
            <Education />
          </Card>
        </Box>

        <Box mt={0.5}>
          <Card className={classes.availalbityCard} elevation={0}>
            <Experience />
          </Card>
        </Box>

        <Box mt={0.5}>
          <Card elevation={0}>
            <Trainning />
          </Card>
        </Box>
        <Box mt={0.5}>
          <Card elevation={0}>
            <Language />
          </Card>
        </Box>
      </Container>
    </Dashboard>
  );
};

export default Profile;
