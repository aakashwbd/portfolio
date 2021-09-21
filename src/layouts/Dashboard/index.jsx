import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Sidebar from "../../components/Dashborad/Sidebar";

const useStyles = makeStyles({
  bg: {
    height: "100%",
    width: "100%",
    background: "#f5f5f5",
  },
});

const Dashboard = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Grid container>
        <Grid item sm={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={10} className={classes.bg}>
          <Container maxWidth="xl">{children}</Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
