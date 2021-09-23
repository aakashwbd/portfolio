import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  title: {
    width: 100,
    color: "#7C8587",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: "0.3rem",
    borderBottom: "2px solid #7C8587",
    margin: "40px 0px",
    textTransform: "uppercase",
  },
  details: {
    fontSize: 18,
    fontFamily: "Poppins",
    color: "#7C8587",
    textAlign: "justify",
  },
});
const PersonalLife = () => {
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Box>
      <Box>
        <Typography className={classes.title}>About </Typography>
      </Box>
      <Box>
        <Typography className={classes.details}>
          {currentUser?.profile?.summary}
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonalLife;
