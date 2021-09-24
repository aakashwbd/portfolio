import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useStyle } from "./style";

import { useSelector } from "react-redux";
import moment from "moment";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const classes = useStyle();
  return (
    <Box>
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item sm={4} lg={4}>
            <Grid container>
              <Grid item sm={12}>
                <Typography className={classes.specialzationTitle}>
                  Contact <br /> Information
                </Typography>
                <Box>
                  <ListItem>
                    <ListItemIcon>
                      <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={currentUser?.profile?.countries?.title}
                    />
                  </ListItem>
                  {currentUser?.profile?.phone?.map((item, i) => (
                    <ListItem>
                      <ListItemIcon className={classes.listIcon}>
                        <PhoneIcon size="small" />
                      </ListItemIcon>

                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                  <ListItem>
                    <ListItemIcon>
                      <MailOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={currentUser?.email} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={currentUser?.profile?.githubUserName}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={currentUser?.profile?.linkedinUserName}
                    />
                  </ListItem>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4} lg={4}>
            <Grid item sm={12}>
              <Typography className={classes.specialzationTitle}>
                Work <br /> Experience
              </Typography>
              <Box>
                {currentUser?.profile?.experiences?.map((item, i) => (
                  <Box my={2}>
                    {item?.startDate && (
                      <Typography
                        style={{
                          fontFamily: "Gordita",
                          fontSize: 12,
                        }}
                      >
                        {moment(item?.startDate).format("MMM YYYY")}-{" "}
                        {moment(item?.endDate).format("MMM YYYY")}
                      </Typography>
                    )}
                    <Typography
                      style={{
                        fontFamily: "Gordita",
                        fontSize: 14,
                        fontWeight: "bold",
                        textTransform: "capitalize",

                        margin: "5px 0px ",
                      }}
                    >
                      {item?.designation}
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Gordita",
                        fontSize: 18,
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      {item?.companyName}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
