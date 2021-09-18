import {
  AppBar,
  Avatar,
  Box,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { hero1 } from "../../../constant/_icon";

const useStyles = makeStyles({
  topbar: {
    height: 60,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    padding: "0px !important",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.03)",
  },
});

const TopBar = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const classes = useStyles();
  return (
    <Box>
      <AppBar className={classes.topbar} elevation={0}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="flex-end">
            <Grid item sm={2}>
              <ListItem>
                <ListItemText primary={currentUser?.username} />
                <ListItemAvatar>
                  <Avatar src={hero1} className={classes.avatar} />
                </ListItemAvatar>
              </ListItem>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
