import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  title: {
    color: "rgba(0, 0, 0, 0.3)",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: "0.3rem",
    margin: "40px 0px",
  },
  details: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#7C8587",
    textAlign: "justify",
  },
});
const PersonalLife = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box>
        <Typography className={classes.title}>About</Typography>
      </Box>
      <Box>
        <Typography className={classes.details}>
          {currentUser?.profile?.summary}
        </Typography>
      </Box>
    </Container>
  );
};

export default PersonalLife;
