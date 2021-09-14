import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandLess, ExpandMore, Home } from "@material-ui/icons";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  wrapper: {
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    padding: "50px 10px",
    backgroundColor: " #FFFFFF",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.03)",
    fontFamily: "Montserrat",
  },
  list: {
    "&:hover": {
      background:
        "linear-gradient(180deg, #9289F3 0%, rgba(139, 137, 243, 0.81) 100%)",
      color: "white",
      borderRadius: 3,
      boxShadow: "0px 4px 4px rgba(146, 137, 243, 0.26)",
    },
  },
  a: {
    color: "#000000",
    textDecoration: "none !important",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState();

  const handleClick = () => {
    setOpen(!open);
  };

  // const history = useHistory()

  // const link = ()=>{
  //   history.push('/dashboardhome')
  // }
  return (
    <Box className={classes.wrapper}>
      <List>
        <Box>
        <Link to="/dashboardhome" className={classes.a}>
          <ListItem button className={classes.list}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='Dashboard'/>
           
          
          
          </ListItem>
          </Link>
        </Box>
        <Box my={5}>
          <ListItem>
            <ListItemText secondary="User" />
          </ListItem>
          <Link to="/profile" className={classes.a}>
            <ListItem button className={classes.list}>
              <ListItemIcon>
                <PermIdentityOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>
          <Link to="/information" className={classes.a}>
            <ListItem button className={classes.list}>
              <ListItemIcon>
                <InfoOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Information" />
            </ListItem>
          </Link>
        </Box>

        <Box mb={5}>
          <ListItem button onClick={handleClick}>
            <ListItemText secondary="Saved" />
          </ListItem>
          <ListItem button className={classes.list} onClick={handleClick}>
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary="Templates" />

            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} unmountOnExit>
            <List>
              <ListItem button className={classes.list}>
                <Link to="/template1" className={classes.a}>
                  Template One
                </Link>
              </ListItem>

              <ListItem button className={classes.list}>
                <Link to="/template2" className={classes.a}>
                  Template Two
                </Link>
              </ListItem>

              <ListItem button className={classes.list}>
                <Link to="/template3" className={classes.a}>
                  Template Three
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </Box>

        <Box>
          <ListItem>
            <ListItemText secondary="Others" />
          </ListItem>
          <ListItem button className={classes.list}>
            <ListItemIcon>
              <ChatBubbleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>
          <ListItem button className={classes.list}>
            <ListItemIcon>
              <EmailOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItem>
        </Box>
      </List>
    </Box>
  );
};

export default Sidebar;
