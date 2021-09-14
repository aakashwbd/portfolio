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
      color: "#7C8587",
      fontSize: 30,
      fontWeight: "bold",
      letterSpacing: "0.3rem",
      borderBottom: "2px solid #7C8587",
     
    },
    skill: {
      fontSize: 18,
      fontWeight: "bold",
      fontFamily: "Poppins",
      color: "#7C8587",
    },
  });
  const Skills = () => {
    const classes = useStyles();
    return (
      <Box my={5}>
        <Box>
          <Typography className={classes.title}>Skills</Typography>
        </Box>
        <Box>
          <List>
            <ListItem className={classes.skill}>
              <ListItemText primary="React" />
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Skills;
  