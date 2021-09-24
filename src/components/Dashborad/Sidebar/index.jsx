import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";

import AccountTreeIcon from "@material-ui/icons/AccountTree";
import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../stores/actions/authActions";
const useStyles = makeStyles({
  wrapper: {
    position: "fixed",
    height: "100%",
    minHeight: "100vh",
    width: 265,
    padding: "5px 10px",
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
  active: {
    background:
      "linear-gradient(180deg, #9289F3 0%, rgba(139, 137, 243, 0.81) 100%)",
    color: "white",
    borderRadius: 3,
    boxShadow: "0px 4px 4px rgba(146, 137, 243, 0.26)",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    history.push("/");
    dispatch(logout());
  };
  return (
    <Box className={classes.wrapper}>
      <List>
        <Box>
          <ListItem>
            <ListItemText secondary="Dashboard" />
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
          <Link
            to="/select_template"
            // activeClassName="active"
            className={classes.a}
          >
            <ListItem button className={classes.list}>
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary="Select Template" />
              {/* <Link to="/select_template">Template</Link> */}
            </ListItem>
          </Link>
        </Box>
        <Box>
          <ListItem onClick={logoutHandler} button className={classes.list}>
            <ListItemIcon onClick={logoutHandler}>
              <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </Box>
      </List>
    </Box>
  );
};

export default Sidebar;
