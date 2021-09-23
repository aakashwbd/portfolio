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
import { tmpThreeHero } from "../../../../constant/_icon";
import Contact from "./Contact";
import Education from "./Education";
import PersonalLife from "./PersonalLife";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

const useStyles = makeStyles({
  heroBg: {
    width: "100%",
    height: "250px",
    background: "rgba(112, 131, 148, 0.58);",
    // background: `url(${tempTwoBg}) no-repeat left top `,
    backgroundSize: "cover",
    position: "relative",
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
  },
  prfImgBox: {
    position: "absolute",
    top: 140,
    left: "50%",

    transform: "translateX(-50%)",
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
    color: "black",
    // fontWeight: "bold",
    fontFamily: "Questrial",
    letterSpacing: "0.3rem",
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.3)",
    fontWeight: "bold",
    fontFamily: "Questrial",
    letterSpacing: "0.3rem",
    margin: "10px 0px",
  },
  titleBox: {
    marginTop: 150,
    borderBottom: "2px solid  rgba(196, 196, 196, 0.3)",
    textAlign: "center",
  },
  border: {
    height: "100%",
    borderRight: "3px solid rgba(196, 196, 196, 0.3)",
  },
});
const TemplateThree = () => {
  const classes = useStyles();

  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Box>
      <Box className={classes.heroBg}></Box>
      <Box className={classes.prfImgBox}>
        <Avatar src={tmpThreeHero} className={classes.prfImg} />
      </Box>
      <Container maxWidth="lg">
        <Box className={classes.titleBox}>
          <Typography className={classes.title}>
            {currentUser?.profile?.firstName} {""}
            {currentUser?.profile?.lastName}
          </Typography>
          <Typography className={classes.subtitle}>
            {currentUser?.profile?.role}
          </Typography>
        </Box>
        <Grid container>
          <Grid item sm={6}>
            <Box className={classes.border}>
              <Box>
                <PersonalLife />
              </Box>
              <Box>
                <Skills />
              </Box>
              <Box>
                <Contact />
              </Box>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box mx={5}>
              <Box>
                <Education />
              </Box>
              <Box>
                <WorkExperience />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TemplateThree;
