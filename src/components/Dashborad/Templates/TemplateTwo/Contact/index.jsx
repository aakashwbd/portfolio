import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import PhoneIcon from "@material-ui/icons/Phone";
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
  listText: {
    fontSize: 18,
    fontFamily: "Poppins",
    color: "#7C8587",
  },
});
const Contact = () => {
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Box my={5}>
      <Box>
        <Typography className={classes.title}>Contact</Typography>
      </Box>
      <Box>
        <List>
          <ListItem className={classes.listText}>
            <ListItemAvatar>
              <RoomIcon />
            </ListItemAvatar>
            <ListItemText primary={currentUser?.profile?.countries?.title} />
          </ListItem>
          <ListItem className={classes.listText}>
            <ListItemAvatar>
              <EmailIcon />
            </ListItemAvatar>
            <ListItemText primary={currentUser?.email} />
          </ListItem>
          <ListItem className={classes.listText}>
            <ListItemAvatar>
              <PhoneIcon />
            </ListItemAvatar>
            <ListItemText primary="0195001231" />
          </ListItem>
          <ListItem className={classes.listText}>
            <ListItemAvatar>
              <LinkedInIcon />
            </ListItemAvatar>
            <ListItemText primary={currentUser?.profile?.linkedinUserName} />
          </ListItem>
          <ListItem className={classes.listText}>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary={currentUser?.profile?.githubUserName} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Contact;
