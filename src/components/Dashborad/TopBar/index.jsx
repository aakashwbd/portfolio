import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  TextField,
  Toolbar,
} from "@material-ui/core";
import React from "react";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
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
    // boxShadow: 0
  },
  //   avatar: {
  //       height: 30,
  //       width: 30
  //   }
  list: {
    padding: 0,
  },
  textField: {
    "&.MuiInputBase-input": {
      border: "none",
    },
  },
});

const TopBar = () => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar className={classes.topbar} elevation={0}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sm={5}>
              <TextField
                className={classes.textField}
                placeholder="search..."
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sm={5}>
              <Grid
                container
                alignItems="center"
                // justifyContent="space-between"
              >
                <Grid item sm={2}>
                  <Button>English</Button>
                </Grid>

                <Grid item sm={2}>
                  <Badge badgeContent={5} color="secondary">
                    <NotificationsNoneOutlinedIcon color="primary" />
                  </Badge>
                </Grid>

                <Grid item sm={4}>
                  <List className={classes.list}>
                    <ListItem>
                      <ListItemText primary="John Doe" secondary="Admin" />

                      <ListItemAvatar>
                        <Avatar src={hero1} className={classes.avatar} />
                      </ListItemAvatar>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
