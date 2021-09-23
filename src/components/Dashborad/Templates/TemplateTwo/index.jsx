import {
  Avatar,
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { tempTwoBg, tmpTwoHero } from "../../../../constant/_icon";
import Contact from "./Contact";
import Education from "./Education";
import PersonalLife from "./PersonalLife";
import Trainings from "./Trainings";

import WorkExperience from "./WorkExperience";

const useStyles = makeStyles({
  heroBg: {
    width: "100%",
    height: "250px",
    // background: 'crimson',
    background: `url(${tempTwoBg}) no-repeat left top `,
    backgroundSize: "cover",
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  prfImg: {
    height: 200,
    width: 200,

    "& .MuiAvatar-Img": {
      objectFit: "cover",
    },
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
const TemplateTwo = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.heroBg}>
        <Container maxWidth="md" className={classes.container}>
          <Grid container alignItems="center">
            <Grid item sm={6}>
              <Avatar src={tmpTwoHero} className={classes.prfImg} />
            </Grid>
            <Grid item sm={6}>
              <Box textAlign="right">
                <Typography className={classes.title}>
                  {currentUser?.profile?.firstName}{" "}
                  {currentUser?.profile?.lastName}
                </Typography>
                <Typography className={classes.subtitle}>
                  {currentUser?.profile?.role}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="md">
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item sm={6}>
              <PersonalLife />
              <Contact />
              <Education />
            </Grid>
            <Grid item sm={6}>
              <Trainings />
              <WorkExperience />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default TemplateTwo;
