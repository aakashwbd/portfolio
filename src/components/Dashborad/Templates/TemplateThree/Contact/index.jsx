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
import { useSelector } from "react-redux";

import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  title: {
    color: "rgba(0, 0, 0, 0.3)",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: "0.3rem",
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
        <ListItem>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary={currentUser?.profile?.countries?.title} />
        </ListItem>

        {currentUser?.profile?.phone?.map((item, i) => (
          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <PhoneIcon size="small" />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}

        <ListItem>
          <ListItemIcon>
            <MailOutlineIcon />
          </ListItemIcon>
          <ListItemText primary={currentUser?.email} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary={currentUser?.profile?.githubUserName} />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary={currentUser?.profile?.linkedinUserName} />
        </ListItem>
      </Box>
    </Box>
  );
};

export default Contact;
