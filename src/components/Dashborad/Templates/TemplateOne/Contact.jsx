import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useStyle } from "./style";
import { useEffect } from "react";
const Contact = () => {

  const [experience, setExperience] = useState([]);
  
  const [contactInfo, setContactInfo] = useState();

  useEffect(() => {
    let experienceCarts = JSON.parse(localStorage.getItem("experience")) || [];

    setExperience(experienceCarts);
    setContactInfo(JSON.parse(localStorage.getItem("contact")));
  }, []);

  console.log(experience);
  const classes = useStyle();
  return (
    <Box>
      <Container maxWidth="md">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sm={4}>
            <Box pt={5}>
              <Box>
                <Typography className={classes.specialzationTitle}>
                  COntact <br /> Information
                </Typography>
              </Box>
              <List>
                <ListItem>
                  <ListItemText
                    className={classes.specializeItem}
                    primary={contactInfo?.address}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className={classes.specializeItem}
                    primary={contactInfo?.email}
                  />
                </ListItem>
                {/* <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary="Digital product design"
                    />
                  </ListItem> */}
              </List>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box pt={5}>
              <Box>
                <Typography className={classes.specialzationTitle}>
                  Work Experience
                </Typography>
              </Box>
              {experience.map((item, i) => (
                <List key={i}>
                  <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary={item?.Company}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary={item?.Role}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary={item?.From}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary={item?.To}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.specializeItem}
                      primary={item?.Description}
                    />
                  </ListItem>
                </List>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
