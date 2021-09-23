import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  title: {
    color: "rgba(0, 0, 0, 0.3)",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: "0.3rem",
  },
  degree: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#7C8587",
  },
  course: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#7C8587",
  },
  institute: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#7C8587",
  },
});
const WorkExperience = () => {
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Box my={5}>
      <Box>
        <Typography className={classes.title}>Work Experience</Typography>
      </Box>
      <Box>
        {currentUser?.profile?.experiences?.map((item, i) => (
          <Box my={2}>
            {/* <Grid container>
                      <Grid item sm={12} lg={8}> */}
            {item?.startDate && (
              <Typography className={classes.date}>
                {moment(item?.startDate).format("MMM YYYY")}-{" "}
                {moment(item?.endDate).format("MMM YYYY")}
              </Typography>
            )}
            <Typography className={classes.designation}>
              {item?.designation}
            </Typography>
            <Typography className={classes.companyName}>
              {item?.companyName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WorkExperience;
