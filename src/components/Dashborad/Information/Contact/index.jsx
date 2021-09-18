import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
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
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { useState } from "react";
import { useStyles } from "../Styled";
import { useEffect } from "react";
import { ClassRounded, Close } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import { Autocomplete } from "@material-ui/lab";
import { useSelector } from "react-redux";
// auto field data
const division_data = [
  {
    title: "Dhaka",
  },
  {
    title: "Rajshahi",
  },
];
const addressLabel_data = [
  {
    title: "Present",
  },
  {
    title: "Parmanent",
  },
];
const district_data = [
  {
    title: "Manikganj",
  },
  {
    title: "Dhaka",
  },
];
const emailLabel_data = [
  {
    title: "Private",
  },
  {
    title: "Work",
  },
];
const Contact = () => {
  const classes = useStyles();

  // redux current user
  const { currentUser } = useSelector((state) => state.auth);

  // collapse
  const [expanded, setExpanded] = useState();
  const handleExpandedClick = () => {
    setExpanded(!expanded);
  };

  // dialog open and close
  const [dialog, setDialog] = useState(false);
  const handleDialog = () => {
    setDialog(true);
  };
  const handleDialogClose = () => {
    setDialog(false);
  };

  // add phone number field
  const [addPhoneField, setAddPhoneFiled] = useState([""]);

  const addPhoneBtn = (index) => {
    if (index !== addPhoneField.length - 1) {
      let addItems = [...addPhoneField];
      let formate = addItems.filter((item, i) => i !== index);

      setAddPhoneFiled(formate);
    } else {
      setAddPhoneFiled((prevState) => [...prevState, ""]);
    }
  };
  // contact form data and submit
  const [contactForm, setContactForm] = useState({
    addressLabel: "",
    streetAddress: "",
    division: "",
    district: "",
    phone: [],
    email: [],
  });

  const contactFormInput = (e) => {
    // setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };
  const contactFormSubmit = () => {
    // dispatch(updateProfile(contactForm));
  };

  return (
    <Box>
      <Card elevation={0} className={classes.card}>
        <CardHeader
          className={classes.cardTitle}
          title="Contact Information"
          action={
            <IconButton
              onClick={handleExpandedClick}
              className={classes.cardIcon}
            >
              {!expanded ? <AddCircleOutlineIcon /> : <HighlightOffIcon />}
            </IconButton>
          }
        />

        <Dialog
          maxWidth="sm"
          fullWidth
          open={dialog}
          onClose={handleDialogClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Contact Information</DialogTitle>

          <DialogContent>
            <Box mt={2}>
              <Autocomplete
                id="Address"
                fullWidth
                options={addressLabel_data}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Your Address"
                    variant="outlined"
                  />
                )}
              />

              <Box mt={2}>
                <TextField
                  variant="outlined"
                  label="Street Address"
                  fullWidth
                  // onChange={profileFormInput}
                  // name="name"
                  // value={profileForm.name}
                />
              </Box>

              <Box mt={2}>
                <Autocomplete
                  id="division"
                  fullWidth
                  options={division_data}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Division"
                      variant="outlined"
                    />
                  )}
                />
              </Box>

              <Box mt={2}>
                <Autocomplete
                  id="district"
                  fullWidth
                  options={district_data}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="District"
                      variant="outlined"
                    />
                  )}
                />
              </Box>
            </Box>

            <Box mt={2}>
              {addPhoneField.map((item, i) => (
                <Box mt={2}>
                  <Grid container alignItems="center" key={i}>
                    <Grid item sm={10}>
                      <TextField
                        type="number"
                        fullWidth
                        variant="outlined"
                        label="Phone No"
                      />
                    </Grid>
                    <Grid item sm={2}>
                      <IconButton onClick={() => addPhoneBtn(i, item)}>
                        {i !== addPhoneField.length - 1 ? (
                          <Close />
                        ) : (
                          <AddCircleOutlineIcon />
                        )}
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Box>

            <Box mt={2}>
              {/* <Autocomplete
                id="emailLabel"
                fullWidth
                options={emailLabel_data}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Add Another Mail"
                    variant="outlined"
                  />
                )}
              /> */}
              <TextField
                fullWidth
                variant="outlined"
                label="Add Another Mail"
              />
            </Box>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Cancel
            </Button>
            <Button
              // onClick={profileFormSubmit}
              color="primary"
            >
              update
            </Button>
          </DialogActions>
        </Dialog>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <CardHeader
              action={
                <IconButton onClick={handleDialog}>
                  <EditOutlinedIcon />
                </IconButton>
              }
            />
            <Grid container>
              <Grid item sm={6}>
                <ListItem>
                  <ListItemIcon>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary={currentUser?.email} />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="phone"
                    // primary={currentUser?.profile?.dob}
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="address"
                    // primary={currentUser?.profile?.dob}
                  />
                </ListItem>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Contact;
