import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";

import AccountTreeIcon from "@material-ui/icons/AccountTree";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  wrapper: {
    position: "fixed",
    height: "100%",
    minHeight: "100vh",
    width: 265,
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

  return (
    <Box className={classes.wrapper}>
      <List>
        <Box>
          <ListItem>
            <ListItemText secondary="User" />
          </ListItem>
          <Link to="/dashboard" className={classes.a}>
            <ListItem button className={classes.list}>
              <ListItemIcon>
                <PermIdentityOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>
        </Box>

        <Box>
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
      </List>
    </Box>
  );
};

export default Sidebar;
