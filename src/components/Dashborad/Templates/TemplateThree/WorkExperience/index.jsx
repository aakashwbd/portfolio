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
    return (
      <Box my={5}>
        <Box>
          <Typography className={classes.title}>Work Experience</Typography>
        </Box>
        <Box>
          <List>
            <ListItem className={classes.degree}>
              <ListItemText primary="Position" />
            </ListItem>
            <ListItem className={classes.course}>
              <ListItemText primary="Role" />
            </ListItem>
            <ListItem className={classes.institute}>
              <ListItemText primary="From" />
            </ListItem>
            <ListItem className={classes.institute}>
              <ListItemText primary="To" />
            </ListItem>
            <ListItem className={classes.institute}>
              <ListItemText primary="Description" />
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };
  
  export default WorkExperience;
  
