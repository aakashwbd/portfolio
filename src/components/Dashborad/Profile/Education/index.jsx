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
  TextField,
  Typography,
} from "@material-ui/core";

import React, { useState } from "react";
import useStyles from "../Styled";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Autocomplete } from "@material-ui/lab";
import { updateProfile } from "../../../../stores/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
// educcation label
const education_label_data = [
  {
    title: "Bachelor (or equivalent)",
  },
  {
    title: "Doctorate (or equivalent)",
  },
];
const Education = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  // use material ui
  const classes = useStyles();

  //   dialog box open and close
  const [dialogBox, setDialogBox] = useState(false);
  const [addDialogBox, setAddDialogBox] = useState(false);

  const handleClickDialogOpen = () => {
    setDialogBox(true);
  };
  const handleClickDialogClose = () => {
    setDialogBox(false);
  };
  // education delete
  const handleClickDelete = () => {};

  // education form
  const [educationForm, setEducationFrom] = useState({
    educationLabel: null,
    degree: "",
    institute: "",
    startDate: "",
    endDate: "",
  });

  const educationInputValue = (e) => {
    setEducationFrom({ ...educationForm, [e.target.name]: e.target.value });
  };

  const educationFormSubmit = () => {
    dispatch(updateProfile(educationForm));
    setDialogBox(false);
  };

  useEffect(() => {
    if (currentUser && currentUser.profile) {
      setEducationFrom(currentUser.profile);
    }
  }, [currentUser]);

  // education lavel
  const onChangeEducation = (data) => {
    setEducationFrom({ ...educationForm, educationLabel: data });
  };

  // add education
  const addEducation = () => {
    setAddDialogBox(true);
  };

  const handleClickAddDialogClose = () => {
    setAddDialogBox(false);
  };
  return (
    <Box px={1} py={3}>
      {/* Showing information in Card Component */}
      <Container maxWidth="md">
        <Box m={2}>
          <Typography className={classes.portionTitle}>Education</Typography>
        </Box>

        <Box m={2}>
          <Grid container justifyContent="space-between">
            <Grid item sm={8}>
              <Box>
                {currentUser?.profile?.startDate && (
                  <Typography style={{ fontFamily: "Gordita", fontSize: 12 }}>
                    {moment(currentUser?.profile?.startDate).format("MMM YYYY")}
                    - {moment(currentUser?.profile?.endDate).format("MMM YYYY")}
                  </Typography>
                )}

                <Typography
                  style={{
                    fontFamily: "Gordita",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {currentUser?.profile?.institute}
                </Typography>
                <Typography style={{ fontFamily: "Gordita", fontSize: 14 }}>
                  {currentUser?.profile?.degree}
                </Typography>
                <Typography style={{ fontFamily: "Gordita", fontSize: 14 }}>
                  {currentUser?.profile?.educationLabel?.title}
                </Typography>
              </Box>
              <Box mt={2}>
                <Button variant="outlined" onClick={addEducation}>
                  Add Education
                </Button>
              </Box>
            </Grid>
            <Grid item sm={2}>
              <Box textAlign="right">
                <IconButton onClick={handleClickDialogOpen}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={handleClickDelete}>
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
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
                Update education experience
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
          <Box my={2}>
            <Autocomplete
              size="small"
              id="education_label"
              fullWidth
              value={educationForm.educationLabel}
              onChange={(e, newValue) => {
                onChangeEducation(newValue);
              }}
              options={education_label_data}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Label of Education"
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              label="Degree"
              size="small"
              fullWidth
              name="degree"
              value={educationForm.degree}
              onChange={educationInputValue}
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              label="Institute"
              size="small"
              fullWidth
              name="institute"
              value={educationForm.institute}
              onChange={educationInputValue}
            />
          </Box>
          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  variant="outlined"
                  type="date"
                  fullWidth
                  label="Start Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="startDate"
                  value={educationForm.startDate}
                  onChange={educationInputValue}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  variant="outlined"
                  type="date"
                  fullWidth
                  label="End Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="endDate"
                  value={educationForm.endDate}
                  onChange={educationInputValue}
                />
              </Grid>
            </Grid>
          </Box>

          {/* <Box mt={2}>
                
          </Box> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogClose} variant="outlined">
            Cancel
          </Button>
          <Button variant="outlined" onClick={educationFormSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* add education dialog */}

      <Dialog
        open={addDialogBox}
        onClose={handleClickDialogClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="dialog-area"
      >
        <DialogTitle id="dialog-area">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sm={8}>
              <Typography className={classes.dialogTitle}>
                Update education experience
              </Typography>
            </Grid>
            <Grid item sm={2}>
              <Box textAlign="right">
                <IconButton onClick={handleClickAddDialogClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box my={2}>
            <Autocomplete
              size="small"
              id="education_label"
              fullWidth
              value={educationForm.educationLabel}
              onChange={(e, newValue) => {
                onChangeEducation(newValue);
              }}
              options={education_label_data}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Label of Education"
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              label="Degree"
              size="small"
              fullWidth
              name="degree"
              value={educationForm.degree}
              onChange={educationInputValue}
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              label="Institute"
              size="small"
              fullWidth
              name="institute"
              value={educationForm.institute}
              onChange={educationInputValue}
            />
          </Box>
          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  variant="outlined"
                  type="date"
                  fullWidth
                  label="Start Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="startDate"
                  value={educationForm.startDate}
                  onChange={educationInputValue}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  variant="outlined"
                  type="date"
                  fullWidth
                  label="End Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="endDate"
                  value={educationForm.endDate}
                  onChange={educationInputValue}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickAddDialogClose} variant="outlined">
            Cancel
          </Button>
          <Button variant="outlined" onClick={educationFormSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Education;
