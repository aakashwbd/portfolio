import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import { logo } from "../../../constant/_icon";
import { useStyled } from "./styled";
import NavList from "./NavList";
// import Signup from "../Account/Signup";

import CloseIcon from "@material-ui/icons/Close";
import { Link, useHistory } from "react-router-dom";
// import Signup from "../../Account/Signup";

const Navbar = () => {
  const [appScroll, setAppScroll] = useState(false);

  const renderAppBarBackaground = () => {
    if (window.scrollY > 50) {
      setAppScroll(true);
    } else {
      setAppScroll(false);
    }
  };

  useEffect(() => {
    renderAppBarBackaground();
    window.addEventListener("scroll", renderAppBarBackaground);
  }, [renderAppBarBackaground]);

  console.log(window.scrollY, appScroll);

  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerHandler = (status) => {
    setOpenDrawer(status);
  };

  const classes = useStyled();

  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <AppBar
      className={`${classes.appBar} ${appScroll && classes.appBarColorClass}`}
      elevation={0}
      position="fixed"
    >
      <Toolbar>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={12}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item sm={2} md={5} lg={4}>
                  <Button onClick={handleClick} className={classes.logoBtn}>
                    <Avatar src={logo} />
                  </Button>
                </Grid>

                <Grid item sm={10} md={5} lg={8}>
                  <Hidden mdUp>
                    <Box textAlign="right">
                      <IconButton onClick={drawerHandler}>
                        <MenuIcon fontSize="large" />
                      </IconButton>
                    </Box>

                    <SwipeableDrawer
                      className={classes.drawer}
                      open={openDrawer}
                      onClose={() => drawerHandler(false)}
                    >
                      <IconButton
                        className={classes.closebtn}
                        onClick={() => drawerHandler(false)}
                      >
                        <CloseIcon />
                      </IconButton>
                      <NavList />
                      <Box className={classes.resumeBox}>
                        <Link className={classes.button} to="/template1">
                          view resume
                        </Link>
                      </Box>
                    </SwipeableDrawer>
                  </Hidden>
                  <Hidden smDown>
                    <Grid container alignItems="center">
                      <Grid item sm={8}>
                        <NavList />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Box textAlign="right">
                          <Link className={classes.button} to="/template1">
                            view resume
                          </Link>
                        </Box>
                      </Grid>
                    </Grid>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
