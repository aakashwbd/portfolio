import {
  Avatar,
  Box,
  Container,
  Grid,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { tempFourBg, tmpTwoHero } from "../../../../constant/_icon";

const useStyle = makeStyles({
  wrapper: {
    height: 250,
    width: "100%",
    background: `url(${tempFourBg}) no-repeat top center`,
    backgroundSize: "100% 100%",
    // textAlign: 'right'
  },
  heroFour: {
    height: 200,
    width: 200,
    // top: 100,
    // right: 300,
    // position: 'absolute',

    "& .MuiAvatar-Img": {
      objectFit: "cover",
    },
  },
  title: {
    fontSize: 36,
  },
  subTitle: {
    fontSize: 20,
  },
});
const TemplateFour = () => {
  const classes = useStyle();
  return (
    <Box>
      <Box className={classes.wrapper}>
        <Box pt={5}>
          <Container maxWidth="md">
            <Grid container justifyContent="space-between">
              <Grid item>
                <Box>
                  <Typography className={classes.title}>
                    JACKOB SCOTT
                  </Typography>
                  <Typography className={classes.subTitle}>
                    PRODUCT DESIGNER. ANALYTICS
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Avatar src={tmpTwoHero} className={classes.heroFour} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box>
          <Stepper>
              <Step>
                  <StepLabel />
              </Step>
          </Stepper>
      </Box>
    </Box>
  );
};

export default TemplateFour;
