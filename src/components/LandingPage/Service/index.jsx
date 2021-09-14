import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { shadow } from "../../../constant/_icon";

import _info from "../../../constant/_info";
import Portait from "../../shared/Portait";
import { useStyles } from "./styled";

const Service = () => {
  const classes = useStyles();
  const { service_info } = _info;
  return (
    <Container id="service" className={classes.wrapper} maxWidth="lg">
      <Typography className={classes.title}>Service</Typography>
      <Box mb={5}>
        <Typography className={classes.subTitle}>
          Building Digital Product
        </Typography>
        <Typography className={classes.subTitle}>
          with Better Experience
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {service_info.map((item, i) => (
          <Grid item xs={12} sm={3} key={i}>
            <Card elevation={0} className={classes.card}>
              <CardContent>
                <Portait h={60} w={60} src={item.img} />
                <Typography className={classes.cardTitle}>
                  {item.title}
                </Typography>
                <Typography className={classes.CardSubTitle}>
                  {item.subTitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Service;
