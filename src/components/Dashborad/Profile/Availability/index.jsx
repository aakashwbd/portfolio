import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import React, { useState } from "react";
import useStyles from "../Styled";
import EditIcon from "@material-ui/icons/Edit";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CloseIcon from "@material-ui/icons/Close";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

const Availability = () => {
  // use material ui
  const classes = useStyles();

  //   dialog box open and close
  const [dialogBox, setDialogBox] = useState(false);
  const handleClickDialogOpen = () => {
    setDialogBox(true);
  };
  const handleClickDialogClose = () => {
    setDialogBox(false);
  };

  //set radio button for remote job
  const [remoteJobValue, setRemoteJobValue] = useState();
  const handleChangeRemoteValue = (event) => {
    setRemoteJobValue(event.target.value);
  };

  //set radio button for full time work
  const [fullTimeJobValue, setFullTimeJobValue] = useState();
  const handleChangeFullTimeValue = (event) => {
    setFullTimeJobValue(event.target.value);
  };
  return (
    <Box px={1} py={3}>
      {/* Showing information in Card Component */}
      <Container maxWidth="md">
        <Grid container justifyContent="space-between">
          <Grid item sm={6}>
            <ListItem alignItems="center">
              <ListItemIcon className={classes.listIcon}>
                <CalendarTodayIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.availability}>
                  Availability
                </Typography>
              </ListItemText>
            </ListItem>
          </Grid>

          <Grid item sm={5}>
            <Box textAlign="right">
              <ListItem>
                <ListItemText>
                  <Typography className={classes.availability}>
                    Full Time
                  </Typography>
                  <Typography style={{fontSize: 14}}>Ready to start in 1 week</Typography>
                </ListItemText>
                <ListItemIcon>
                  <IconButton onClick={handleClickDialogOpen}>
                    <EditIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* user input data in dialog box */}
      <Dialog
        open={dialogBox}
        onClose={handleClickDialogClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="dialog-area"
      >
        <DialogTitle id="dialog-area">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sm={8}>
              <Typography className={classes.dialogTitle}>
                Please update your availability
              </Typography>
            </Grid>
            <Grid item sm={2}>
              <Box textAlign="right">
                <IconButton onClick={handleClickDialogClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box mt={3}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Are you actively looking for a remote job?
              </FormLabel>
              <RadioGroup
                value={remoteJobValue}
                onChange={handleChangeRemoteValue}
              >
                <FormControlLabel
                  label="Ready to Interview"
                  control={<Radio />}
                  value="interview"
                />
                <FormControlLabel
                  label="Open to Offers"
                  control={<Radio />}
                  value="offers"
                />
                <FormControlLabel
                  label="Unavailable for Jobs"
                  control={<Radio />}
                  value="unavailable"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box mt={2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Are you interested in full-time work (8hrs/day, 40hrs/week)?
              </FormLabel>
              <RadioGroup
                value={fullTimeJobValue}
                onChange={handleChangeFullTimeValue}
              >
                <FormControlLabel label="Yes" control={<Radio />} value="yes" />
                <FormControlLabel
                  label="No, Only Part Time"
                  control={<Radio />}
                  value="partTime"
                />
                <FormControlLabel
                  label="I can start part-time immediately and then switch to full-time within a month"
                  control={<Radio />}
                  value="both"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogClose} variant="outlined">
            Cancle
          </Button>
          <Button variant="outlined">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Availability;
