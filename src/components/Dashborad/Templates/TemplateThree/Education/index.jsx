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
import React from "react";
const useStyles = makeStyles({
  title: {
    width: 100,
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
const Educaiton = () => {
  const classes = useStyles();
  return (
    <Box my={5}>
      <Box>
        <Typography className={classes.title}>Education</Typography>
      </Box>
      <Box>
        <List>
          <ListItem className={classes.degree}>
            <ListItemText primary="Computer Science and Engineering" />
          </ListItem>
          <ListItem className={classes.course}>
            <ListItemText primary="Bachelor of Science" />
          </ListItem>
          <ListItem className={classes.institute}>
            <ListItemText primary="Bangladesh Institute of Science and Technology" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Educaiton;
