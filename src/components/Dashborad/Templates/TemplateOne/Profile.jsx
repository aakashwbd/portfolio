import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { tmpOneHero } from "../../../../constant/_icon";

import { useStyle } from "./style";

// import { useDispatch } from "react-redux";
// import { updateProfile } from "../../../../stores/actions/authActions";
// import { useSelector } from "react-redux";

const Profile = () => {

  // const { currentUser } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  
  const [specailize, setSpecialize] = useState([]);
  useEffect(() => {
    let specatilizationCarts = JSON.parse(localStorage.getItem("specailizationItem")) || [];

    setSpecialize(specatilizationCarts);
  }, []);
  const classes = useStyle();
  return (
    <Box py={5} className={classes.wrapper}>
      <Container maxWidth="md">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sm={2}>
            <Box>
              <Typography className={classes.prfTitle}>
                YAEL <br />
                AMARI
              </Typography>
              <Typography className={classes.prfSubTitle}>
                Graphics Designer
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={2}>
            <Box>
              <Avatar className={classes.heroPrf} src={tmpOneHero} />
            </Box>
          </Grid>
        </Grid>

        <Box pt={5}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item sm={1}></Grid>
            <Grid item sm={4}>
              <Box>
                <Typography className={classes.specialzationTitle}>
                  Specializations
                </Typography>
              </Box>
              {specailize.map((item, i) => (
                <List key={i}>
                  <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary={item?.skill}
                    />
                  </ListItem>
                  {/* <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary={item?.skill}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary={item?.skill}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary={item?.skill}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary={item?.skill}
                    />
                  </ListItem> */}
                </List>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
