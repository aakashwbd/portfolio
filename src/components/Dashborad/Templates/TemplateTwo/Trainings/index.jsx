import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
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
  skill: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#7C8587",
  },
});
const Trainings = () => {
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Box my={5}>
      <Box>
        <Typography className={classes.title}>Trainings</Typography>
      </Box>
      <Box mt={5}>
        {currentUser?.profile?.trainings?.map((item, i) => (
          <Box my={2}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item sm={8} lg={8}>
                <Typography className={classes.skill}>
                  Training on : {item?.courseName}
                </Typography>
                <Typography className={classes.skill}>
                  Duraiton: {item?.duration} months
                </Typography>
                <Typography className={classes.skill}>
                  institute name : {item?.instituteName}
                </Typography>
                <Typography className={classes.skill}>
                  Instititue Location : {item?.instituteLocation}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Trainings;
