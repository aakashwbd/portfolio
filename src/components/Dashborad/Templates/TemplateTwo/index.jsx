import {
  Avatar,
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { tempTwoBg, tmpTwoHero } from "../../../../constant/_icon";
import Contact from "./Contact";
import Education from "./Education";
import PersonalLife from "./PersonalLife";
import Skills from "./Skills";
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
              <Box>
                <Typography className={classes.title}>
                  TIMOTHY STUART
                </Typography>
                <Typography className={classes.subtitle}>
                  MARKETING ASSISTANT
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="md">
        <Grid container justifyContent="space-between">
          <Grid item sm={4}>
            <Container maxWidth="sm">
              <PersonalLife />
              <Contact />
              <Education />
            </Container>
          </Grid>
          <Grid item sm={4}>
            <Skills />
            <WorkExperience />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TemplateTwo;
