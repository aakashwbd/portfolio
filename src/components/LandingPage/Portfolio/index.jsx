import {
  Avatar,
  Box,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { one, three, two } from "../../../constant/_icon";
import Portait from "../../shared/Portait";
const useStyles = makeStyles({
  wrapper: {
    marginTop: 100,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 24,
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.7)",
    letterSpacing: "0.2em",
    "@media(max-width:1366px)": {
      fontSize: 18,
    },
    "@media(max-width:600px)": {
      fontSize: 16,
    },
  },
  subTitle: {
    fontSize: 45,
    background: `-webkit-linear-gradient(#BCFFA6, #FF3767)`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    textAlign: "center",
    margin: "15px",
    "@media(max-width:1366px)": {
      fontSize: 38,
      paddingBottom:30
    },  
    "@media(max-width:600px)": {
      fontSize: 25,
    },
  },
  avatar1: {
    height: 500,
    width: "100%",
    borderRadius: 10,

    "& .MuiAvatar-img": {
      objectFit: "cover ",
    },
    "@media(max-width:600px)": {
      height: 250,
      width: "100%",
      "& .MuiAvatar-img": {
        objectFit: "contain ",
        borderRadius: 20,
      },
    },
  },
  avatar2: {
    height: 240,
    width: "100%",
    borderRadius: 10,
    marginBottom: 20,
    "& .MuiAvatar-img": {
      objectFit: "cover ",
    },
  },
  avatar3: {
    height: 240,
    width: "100%",
    borderRadius: 10,

    "& .MuiAvatar-img": {
      objectFit: "cover ",
    },
    "@media(max-width:600px)": {
      height: 180,
      width: "100%",
      "& .MuiAvatar-img": {
        objectFit: "contain ",
        borderRadius: 20,
      },
    },
  },
});
const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box id="portfolio" className={classes.wrapper}>
      <Container maxWidth="lg">
        <Typography className={classes.title}>PORTFOLIO</Typography>
        <Typography className={classes.subTitle}>Selected Workds</Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Avatar className={classes.avatar1} src={one} />
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <Grid spacing={2}>
                <Avatar className={classes.avatar} src={two} />
                <Avatar className={classes.avatar} src={three} />
              </Grid> */}
              <Hidden smDown>
                <Avatar className={classes.avatar2} src={two} />
              </Hidden>

              <Avatar className={classes.avatar3} src={three} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
