import {
  Avatar,
  Box,
  Container,
  Grid,
  Icon,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { hero1 } from "../../../constant/_icon";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Dashboard from "../../../layouts/Dashboard";
const useStyles = makeStyles({
  prfImg: {
    height: 210,
    width: "100%",
    borderRadius: 3,
    background: "black",
    "&.MuiAvatar-Img": {
      objectFit: "cover",
    },
  },
  title: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Montserrat",
  },
  name: {
    fontFamily: "Montserrat",
    fontSize: 20,
    color: "#000000",
    marginBottom: 10,
  },
  proffesion: {
    fontSize: 16,
    color: "#000000",
    fontFamily: "Montserrat",
  },
  descriptionTitle: {
    fontSize: 25,
    //  color: 'red'
  },
  descriptionSubTitle: {
    fontSize: 20,
  },
});
const Profile = () => {
  const classes = useStyles();
  return (
    <Dashboard>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <Avatar src={hero1} className={classes.prfImg} />
            </Grid>
            <Grid item sm={6}>
              <Typography className={classes.title}>Name</Typography>
              <Typography className={classes.name}>
                Willy James Wonker
              </Typography>
              <Typography className={classes.title}>
                Profession Title
              </Typography>
              <Typography className={classes.proffesion}>
                UI/UX Designer
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Typography>Phone No</Typography>
          <Typography>+ 88 012555555555</Typography>
          <Box>
            <Typography>Social Links</Typography>
            <Box>
              <FacebookIcon />
              <TwitterIcon />
            </Box>
          </Box>
        </Grid>
        <Grid contianer>
          <Grid item sm={6}>
            <Box>
              <Typography className={classes.descriptionTitle}>
                Proffesional Objective
              </Typography>
              <Typography className={classes.DescriptionSubTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                tempore a maxime tenetur veniam? Tempore fugiat commodi vel
                dignissimos reprehenderit?
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default Profile;
