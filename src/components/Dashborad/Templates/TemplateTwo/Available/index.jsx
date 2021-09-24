import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

import React from "react";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  title: {
    width: 100,
    color: "#7C8587",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: "0.3rem",
    borderBottom: "2px solid #7C8587",
    textTransform: "uppercase",
  },
  designation: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#7C8587",
  },
});
const Available = () => {
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Box my={5}>
      <Box>
        <Typography className={classes.title}>Available</Typography>
      </Box>
      <Box mt={2}>
        <Typography className={classes.designation}>
          {currentUser?.profile?.fullTimeJob}
        </Typography>
        <Typography className={classes.designation}>
          {currentUser?.profile?.salary} BDT/month
        </Typography>
      </Box>
    </Box>
  );
};

export default Available;
