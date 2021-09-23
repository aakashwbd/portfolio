import {
  Avatar,
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
  Tooltip,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import React, { useState } from "react";
import useStyles from "../Styled";
import EditIcon from "@material-ui/icons/Edit";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CloseIcon from "@material-ui/icons/Close";

import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../../stores/actions/authActions";
import { useEffect } from "react";

// country
const country_data = [
  {
    title: "Bangladesh",
  },
  {
    title: "India",
  },
  {
    title: "Pakistan",
  },
  {
    title: "Sri Lanka",
  },
];
const ProfileInformation = () => {
  // use material ui style
  const classes = useStyles();

  //   dialog box open and close
  const [dialogBox, setDialogBox] = useState(false);
  const handleClickDialogOpen = () => {
    setDialogBox(true);
  };
  const handleClickDialogClose = () => {
    setDialogBox(false);
  };

  // profile data input
  const [profileForm, setProfileForm] = useState({
    firstName: "",
    lastName: "",
    countries: null,
    summary: "",
    githubUserName: "",
    linkedinUserName: "",
    phone: "",
  });

  const profileFormInput = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const profileFormSubmit = () => {
    dispatch(
      updateProfile({
        ...profileForm,
        phone: formValues,
      })
    );
    // dispatch(updateProfile(formValues));
    setDialogBox(false);
  };
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);

  useEffect(() => {
    if (currentUser && currentUser.profile) {
      setProfileForm(currentUser.profile);
    }
  }, [currentUser]);

  const onChangeCountry = (data) => {
    setProfileForm({ ...profileForm, countries: data });
  };

  const [formValues, setFormValues] = useState([]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i] = e.target.value;
    setFormValues(newFormValues);
  };
  const addHandler = () => {
    setFormValues([...formValues, ""]);
  };
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  return (
    <Box px={1} py={3}>
      {/* Showing information in Card Component */}
      <Container maxWidth="md">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item sm={8}>
            <ListItem>
              <ListItemIcon className={classes.listImg}>
                <Avatar className={classes.profileImge} />
              </ListItemIcon>

              <ListItemText>
                <Typography className={classes.profileName}>
                  {currentUser?.profile?.firstName}{" "}
                  {currentUser?.profile?.lastName}
                </Typography>
                <Typography className={classes.profileCountry}>
                  {currentUser?.profile?.countries?.title}
                </Typography>
              </ListItemText>
            </ListItem>
          </Grid>

          <Grid item sm={2}>
            <Box textAlign="right">
              <IconButton onClick={handleClickDialogOpen}>
                <EditIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box p={2}>
          <Typography className={classes.aboutMe}>
            {currentUser?.profile?.summary}
          </Typography>
        </Box>

        <Grid
          container
          alignItems="center"
          spacing={1}
          justifyContent="space-between"
        >
          <Grid item sm={7}>
            <Grid container justifyContent="space-between">
              <Grid item sm={3}>
                <ListItem>
                  <ListItemIcon className={classes.listIcon}>
                    <EmailIcon size="small" />
                  </ListItemIcon>
                  <ListItemText primary={currentUser?.email} />
                </ListItem>
              </Grid>
              <Grid item sm={3}>
                {currentUser?.profile?.phone?.map((item, i) => (
                  <ListItem>
                    <ListItemIcon className={classes.listIcon}>
                      <PhoneIcon size="small" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={2}>
            <Grid container spacing={5}>
              <Grid item sm={2}>
                <Box textAlign="center">
                  <Tooltip
                    title={currentUser?.profile?.linkedinUserName}
                    placement="top"
                  >
                    <LinkedInIcon />
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item sm={2}>
                <Box textAlign="right">
                  <Tooltip
                    title={currentUser?.profile?.githubUserName}
                    placement="top"
                  >
                    <GitHubIcon />
                  </Tooltip>
                </Box>
              </Grid>
            </Grid>
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
            <Grid item sm={6}>
              <Typography className={classes.dialogTitle}>
                Profile Informaiton
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Box textAlign="right">
                <IconButton onClick={handleClickDialogClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box>
            <Box my={2}>
              <Typography className={classes.dashboardFont}>
                Profile Picture
              </Typography>
            </Box>

            <Grid container alignItems="center" spacing={2}>
              <Grid item sm={3}>
                <Avatar className={classes.uploadImage} />
              </Grid>

              <Grid item sm={4}>
                <Button variant="outlined">upload image</Button>
              </Grid>
            </Grid>
          </Box>

          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  label="First Name"
                  required
                  fullWidth
                  name="firstName"
                  value={profileForm.firstName}
                  onChange={profileFormInput}
                />
              </Grid>

              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  label="Last Name"
                  required
                  fullWidth
                  name="lastName"
                  value={profileForm.lastName}
                  onChange={profileFormInput}
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={2}>
            <Autocomplete
              id="country"
              fullWidth
              options={country_data}
              value={profileForm.countries}
              onChange={(e, newValue) => {
                onChangeCountry(newValue);
              }}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country of Residence"
                  variant="outlined"
                />
              )}
            />
          </Box>

          <Box mt={2}>
            <TextField
              variant="outlined"
              required
              fullWidth
              minRows="6"
              multiline
              label="Summary About Yourself"
              name="summary"
              value={profileForm.summary}
              onChange={profileFormInput}
            />
          </Box>

          <Box mt={2}>
            <Box>
              {formValues.map((item, i) => (
                <Box mt={2}>
                  <Grid container>
                    <Grid item sm={10} key={i}>
                      <TextField
                        size="small"
                        fullWidth
                        variant="outlined"
                        label="Phone "
                        name="phone"
                        value={item}
                        onChange={(e) => handleChange(i, e)}
                      />
                    </Grid>
                    <Grid item sm={2}>
                      {i ? (
                        <IconButton onClick={() => removeFormFields(i)}>
                          <CloseIcon />
                        </IconButton>
                      ) : null}
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Box>
            <Box>
              <IconButton onClick={() => addHandler()}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          </Box>

          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Github username (optional)"
                  name="githubUserName"
                  value={profileForm.githubUserName}
                  onChange={profileFormInput}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Linkedin username (optional)"
                  name="linkedinUserName"
                  value={profileForm.linkedinUserName}
                  onChange={profileFormInput}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogClose} variant="outlined">
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={profileFormSubmit}
            className={classes.saveBtn}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileInformation;
