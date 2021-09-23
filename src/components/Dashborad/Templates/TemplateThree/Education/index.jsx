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
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  title: {
    width: 100,
    color: "rgba(0, 0, 0, 0.3)",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: "0.3rem",
  },
  degree: {
    fontSize: 12,
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
  date: {
    fontSize: 10,
    fontFamily: "Poppins",
    color: "#7C8587",
  },
});
const Educaiton = () => {
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Box my={5}>
      <Box>
        <Typography className={classes.title}>Education</Typography>
      </Box>
      <Box>
        {currentUser?.profile?.educations?.map((item, i) => (
          <Box mt={2}>
            <Grid container>
              <Grid item sm={5} lg={4}>
                {item?.startDate && (
                  <Typography className={classes.date}>
                    {moment(item?.startDate).format("MMM YYYY")} -
                    {moment(item?.endDate).format("MMM YYYY")}
                  </Typography>
                )}
                <Typography className={classes.degree}>
                  {item.degree}
                </Typography>
                <Typography className={classes.degree}>
                  {item.educationLabel.title}
                </Typography>
                <Typography className={classes.institute}>
                  {item.institute}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Educaiton;
