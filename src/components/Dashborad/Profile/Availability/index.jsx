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
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import React, { useEffect, useState } from "react";
import useStyles from "../Styled";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../../stores/actions/authActions";

const Availability = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
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
    console.log(event.target.value);
  };

  // available form
  const [availableForm, setAvailableForm] = useState({
    remoteJob: "",
    fullTimeJob: "",
  });

  const availableFromSubmit = () => {
    if (fullTimeJobValue) {
      setAvailableForm((prevState) => ({
        ...prevState,
        fullTimeJob: fullTimeJobValue,
      }));
    }

    let formData = {
      fullTimeJob: fullTimeJobValue,
    };
    setDialogBox(false);
    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (currentUser && currentUser.profile) {
      setFullTimeJobValue(currentUser.profile);
    }
  }, [currentUser]);
  return (
    <Box px={1} py={3}>
      {/* Showing information in Card Component */}
      <Container maxWidth="md">
        <Grid container justifyContent="space-between" spacing={1}>
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
                    {/* Full Time */}
                    {currentUser?.profile?.fullTimeJob}
                  </Typography>
                  <Typography style={{ fontSize: 14 }}>
                    {/* Ready to start in 1 week */}
                  </Typography>
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
          {/* <Box mt={3}>
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
          </Box> */}

          <Box mt={2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Are you interested in full-time work (8hrs/day, 40hrs/week)?
              </FormLabel>
              <RadioGroup
                value={fullTimeJobValue}
                onChange={handleChangeFullTimeValue}
              >
                <FormControlLabel
                  label="Yes"
                  control={<Radio />}
                  value="Full Time"
                />
                <FormControlLabel
                  label="No, Only Part Time"
                  control={<Radio />}
                  value="No, Only Part Time"
                />
                <FormControlLabel
                  label="I can start part-time immediately and then switch to full-time within a month"
                  control={<Radio />}
                  value="I can start part-time immediately and then switch to full-time within a month"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogClose} variant="outlined">
            Cancel
          </Button>
          <Button variant="outlined" onClick={availableFromSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Availability;
