import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useStyle } from "./style";

const Skills = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const classes = useStyle();

  return (
    <Box>
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item sm={6} lg={4}>
            <Grid container>
              <Grid item sm={12}>
                <Typography className={classes.specialzationTitle}>
                  Availablity
                </Typography>
                <Box my={2}>
                  <Typography
                    style={{
                      textTransform: "capitalize",
                      textAlign: "justify",
                      fontFamily: "Gordita",
                    }}
                  >
                    {currentUser?.profile?.fullTimeJob}
                  </Typography>
                  <Typography style={{ fontSize: 14 }}>
                    {currentUser?.profile?.salary} BDT/month
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4} lg={4}>
            <Grid item sm={12}>
              <Typography className={classes.specialzationTitle}>
                Skills
              </Typography>
              <Box>
                <Box>
                  {currentUser &&
                    currentUser?.Profile?.Skills?.map((item, i) => (
                      <>
                        <Box mt={2}>
                          <Grid container alignItems="center">
                            <Grid item sm={2} key={i}>
                              <Typography
                                style={{
                                  fontFamily: "Gordita",
                                  fontWeight: "bold",
                                }}
                              >
                                {item?.competency?.title}
                              </Typography>
                            </Grid>

                            <Grid item sm={6}>
                              <Typography>{item?.skillName}</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </>
                    ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
