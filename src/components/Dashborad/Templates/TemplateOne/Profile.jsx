import { Avatar, Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { tmpOneHero } from "../../../../constant/_icon";

import { useStyle } from "./style";

import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const classes = useStyle();
  return (
    <Box py={5} className={classes.wrapper}>
      <Container maxWidth="md">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sm={2}>
            <Box>
              <Typography className={classes.prfTitle}>
                {currentUser?.profile?.firstName} <br />
                {currentUser?.profile?.lastName}
              </Typography>
              <Typography className={classes.prfSubTitle}>
                {currentUser?.profile?.role}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={3}>
            <Box>
              <Avatar className={classes.heroPrf} src={tmpOneHero} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
