import { List, ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyled } from "./styled";

const NavList = () => {
  const classes = useStyled();
  return (
    <List className={classes.navList}>
      <ListItem className={classes.listText}>
        <Link to="#service" component="a">
          Service
        </Link>
      </ListItem>
      <ListItem className={classes.listText}>
        <Link to="#portfolio" component="a">
          Portfolio
        </Link>
      </ListItem>
      <ListItem className={classes.listText}>
        <Link to="#contact" component="a">
          Contact Me
        </Link>
      </ListItem>
      {/* <ListItem  className={classes.listText}>
                <Link to='/dashboard' >Dashboard</Link>
            </ListItem>  */}
      <ListItem className={classes.listText}>
        <Link to="/login">Login</Link>
      </ListItem>
    </List>
  );
};

export default NavList;
