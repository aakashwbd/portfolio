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
    color: "#7C8587",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: "0.3rem",
    borderBottom: "2px solid #7C8587",
    textTransform: "uppercase",
  },
  degree: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#7C8587",
  },
  course: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#7C8587",
  },
  institute: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#7C8587",
  },
  date: {
    fontSize: 12,
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

      <Box mt={2}>
        {currentUser?.profile?.educations?.map((item, i) => (
          <Box my={3}>
            <Grid container>
              <Grid item>
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
                <Typography className={classes.degree}>
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
