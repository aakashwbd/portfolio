import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

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
    textTransform: "uppercase",
  },
  designation: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#7C8587",
  },
});
const Skills = () => {
  const classes = useStyles();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Box my={5}>
      <Box>
        <Typography className={classes.title}>Skills</Typography>
      </Box>
      <Box>
        {currentUser &&
          currentUser?.profile?.skills?.map((item, i) => (
            <>
              <Box mt={2}>
                <Grid container alignItems="center">
                  <Grid item sm={2} key={i}>
                    <Typography className={classes.designation}>
                      {item?.competency?.title}
                    </Typography>
                  </Grid>

                  <Grid item sm={6}>
                    <Typography className={classes.designation}>
                      {item?.skillName}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Skills;
