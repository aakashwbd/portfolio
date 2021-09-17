import { Box, Fab } from "@material-ui/core";
import React, { useState } from "react";
import Home from "../../components/LandingPage/Home";
import Navbar from "../../components/LandingPage//Navbar";
import { makeStyles } from "@material-ui/core";
import Service from "../../components/LandingPage/Service";
import Footer from "../../components/LandingPage/Footer";
import Portfolio from "../../components/LandingPage/Portfolio";
import Static from "../../components/LandingPage/Static";
import { noise } from "../../constant/_icon";

export const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#3A5029",
    background: `url(${noise}) no-repeat top center`,
    backgroundSize: "100% 100%",
  },
  color: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "50%",
    right: 0,
  },
});
const Landing = () => {
  const classes = useStyles();
  const [color, setColor] = useState("");


  
  return (
    <Box className={classes.wrapper} style={{ backgroundColor: color }}>
      <Navbar />
      <Home />
      <Service />
      <Static />
      <Portfolio />
      <Footer />
      <Box className={classes.color}>
        <Fab
          size="small"
          style={{ background: "#3A5029" }}
          onClick={() => setColor("#3A5029")}
        />
        <Fab
          size="small"
          style={{ background: "#003638" }}
          onClick={() => setColor("#003638")}
        />
        <Fab
          size="small"
          style={{ background: "#22577A" }}
          onClick={() => setColor("#22577A")}
        />
        <Fab
          size="small"
          style={{ background: "#231E23" }}
          onClick={() => setColor("#231E23")}
        />
      </Box>
    </Box>
  );
};

export default Landing;
