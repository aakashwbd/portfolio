import { Avatar, Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import {
  amazon,
  google,
  hero1,
  logitech,
  slack,
} from "../../../constant/_icon";

import { useStyles } from "./styled";

// import FacebookIcon from "@material-ui/icons/Facebook";
const Home = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Box className={classes.hero}>
              <Box className={classes.heroImg}>
                <Avatar src={hero1} className={classes.homePrfImg} />
              </Box>

              <Box className={classes.heroTitle}>
                <Typography className={classes.title}>
                  Willy James Wonker
                </Typography>
                <Typography className={classes.subtitle}>
                  UI UX Designer Product Designer
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.client}>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid xs={6} sm={2}>
              <Avatar src={slack} className={classes.clientImg} />
            </Grid>
            <Grid xs={6} sm={2}>
              <Avatar src={amazon} className={classes.clientImg} />
            </Grid>
            <Grid xs={6} sm={2}>
              <Avatar src={logitech} className={classes.clientImg} />
            </Grid>
            <Grid xs={6} sm={2}>
              <Avatar src={google} className={classes.clientImg} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
