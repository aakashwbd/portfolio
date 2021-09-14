import {
  Box,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { hero2 } from "../../../constant/_icon";
import _info from "../../../constant/_info";
import Portait from "../../shared/Portait";
const useStyles = makeStyles({
  wrapper: {
    // marginTop: 100,
    height: 500,
    width: "100%",
  },
  title: {
    padding: "100px 0px",
    fonFamily: "Poppins",
    letterSpacing: "0.2em",
    fontSize: 30,
    color: "rgba(255, 255, 255, 0.7)",
    "@media(max-width:1366px)": {
      fontSize: 20,
    },
    "@media(max-width:600px)": {
      padding: "30px 0px",
      textAlign: "center",
    },
  },
  
  countTitle: {
    textAlign: "center",
    marginRight: 20,
    fontSize: 45,
    fontWeight: "bold",
    background: `-webkit-linear-gradient(#BCFFA6, #FF3767)`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "@media(max-width:1366px)": {
      fontSize: 38,
    },
  },
  countSubTile: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    background: `-webkit-linear-gradient(#BCFFA6, #FF3767)`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",

    "@media(max-width:1366px)": {
      fontSize: 22,
    },
  },
});
const Static = () => {
  const classes = useStyles();
  const { stat_info } = _info;
  return (
    <Box className={classes.wrapper}>
      <Grid container>
        <Grid item sm={2}>
          <Hidden smDown>
            <Portait src={hero2} h={500} w={"100%"} />
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Container maxWidth="lg">
            <Typography className={classes.title}>Statistic</Typography>
            <Grid container justifyContent="space-between" spacing={2}>
              {stat_info.map((item, i) => (
                <Grid item sm={3} md={3} xs={12} key={i}>
                  <Typography className={classes.countTitle}>
                    {item.count}
                  </Typography>
                  <Typography className={classes.countSubTile}>
                    {item.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Static;
