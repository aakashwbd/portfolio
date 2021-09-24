import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { hero3 } from "../../../constant/_icon";

import CopyRight from "./CopyRight";
import SendIcon from "@material-ui/icons/Send";
const useStyle = makeStyles({
  wrapper: {
    paddingTop: 50,
    marginTop: 100,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  heroBg: {
    height: "100%",
    width: "100%",
    marginTop: 6,
  },
  title: {
    fontSize: 24,
    color: "rgba(255, 255, 255, 0.7)",
    textTransform: "uppercase",
    letterSpacing: "0.2rem",

    "@media(max-width:1366px)": {
      fontSize: 20,
    },
    "@media(max-width:600px)": {
      fontSize: 16,
    },
    "@media(max-width:400px)": {
      fontSize: 12,
      textAlign: "center",
    },
  },
  subTitle: {
    fontSize: 45,
    background: `-webkit-linear-gradient(#BCFFA6, #FF3767)`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    margin: "20px 0px",

    "@media(max-width:1366px)": {
      fontSize: 36,
    },
    "@media(max-width:600px)": {
      fontSize: 30,
    },
    "@media(max-width:400px)": {
      fontSize: 18,
      textAlign: "center",
    },
  },

  hero3: {
    height: "100%",
    width: "100%",
    maxWidth: 300,
    borderRadius: 0,
    marginLeft: "auto",
    "& .MuiAvatar-img": {
      objectFit: "cover ",
    },
  },
  sendBtn: {
    background: "#FF8267",
    color: "white",
    "&:hover": {
      color: "black",
      background: "#FF8257",
    },
  },
  btnBox: {
    textAlign: "right",
    "@media(max-width:600px)": {
      textAlign: "center",
    },
  },
});

const Footer = () => {
  const classes = useStyle();

  return (
    <>
      <Box id="contact" className={classes.wrapper}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={7}>
            <Container maxWidth="sm">
              <Box>
                <Typography className={classes.title}>Hire me</Typography>
                <Typography className={classes.subTitle}>
                  Stay Chill & Tell <br /> Your Plan
                </Typography>
              </Box>
              <Grid container justifyContent="space-between" spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    fullWidth
                    variant="filled"
                    placeholder="Name"
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    fullWidth
                    variant="filled"
                    placeholder="Email"
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    size="medium"
                    fullWidth
                    placeholder="Massage"
                    variant="filled"
                    multiline
                    minRows={5}
                    className={classes.input}
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid>
              </Grid>
              <Box mt={4} mb={2} className={classes.btnBox}>
                <Button endIcon={<SendIcon />} className={classes.sendBtn}>
                  send
                </Button>
              </Box>
            </Container>
          </Grid>
          <Grid item sm={2}>
            <Box className={classes.heroBg}>
              <Hidden smDown>
                <Avatar className={classes.hero3} src={hero3} />
              </Hidden>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <CopyRight />
    </>
  );
};

export default Footer;
