import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useStyle } from "./style";

const About = () => {
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
                  About
                </Typography>
                <Box my={2}>
                  <Typography
                    style={{
                      textTransform: "capitalize",
                      textAlign: "justify",
                      fontFamily: "Gordita",
                    }}
                  >
                    {currentUser?.profile?.summary}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4} lg={4}>
            <Grid item sm={12}>
              <Typography className={classes.specialzationTitle}>
                Trainings
              </Typography>
              <Box>
                <Box>
                  {currentUser?.profile?.trainings?.map((item, i) => (
                    <Box my={2}>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Grid item sm={8} lg={8}>
                          <Typography>
                            Training on : {item?.courseName}
                          </Typography>
                          <Typography>
                            Duraiton: {item?.duration} months
                          </Typography>
                          <Typography>
                            institute name : {item?.instituteName}
                          </Typography>
                          <Typography>
                            Instititue Location : {item?.instituteLocation}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
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

export default About;
