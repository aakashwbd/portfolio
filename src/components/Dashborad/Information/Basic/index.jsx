import {
  Avatar,
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
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CakeIcon from "@material-ui/icons/Cake";
import PhoneIcon from "@material-ui/icons/Phone";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../../stores/actions/authActions";
import { useStyles } from "../Styled";
import { Autocomplete } from "@material-ui/lab";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

// dami data
const bloodGroup_data = [
  {
    title: "A+",
  },
  {
    title: "A-",
  },
  {
    title: "B+",
  },
  {
    title: "B-",
  },
  {
    title: "AB+",
  },
  {
    title: "AB-",
  },
  {
    title: "O+",
  },
  {
    title: "O-",
  },
];
const maritialStatus_data = [
  {
    title: "Single",
  },
  {
    title: "Married",
  },
  {
    title: "Divorce",
  },
  {
    title: "Others",
  },
];

const ProfileInformation = () => {
  // style
  const classes = useStyles();

  // store dispatch
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  // profile input data state
  const [profileForm, setProfileForm] = useState({
    name: "",
    dob: "",
    bloodGroup: null,
    maritialStatus: "",
    nationality: "",
    nid: "",
    birthCertificate: "",
    passport: "",
  });
  const profileFormInput = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const onChangeBloodGroup = (data) => {
    setProfileForm({ ...profileForm, bloodGroup: data });
  }; 
  
  const onChangeMatialStatus = (data) => {
    setProfileForm({ ...profileForm, maritialStatus: data });
  };

  const profileFormSubmit = () => {
    // e.preventDefault();

    dispatch(updateProfile(profileForm));

    setDialog(false);
  };

  // dialog open and close
  const [dialog, setDialog] = useState(false);

  const handleDialog = () => {
    setDialog(true);
  };

  const handleDialogClose = () => {
    setDialog(false);
  };

  // collapse
  const [expanded, setExpanded] = useState();
  const handleExpandedClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={0} className={classes.card}>
      <CardHeader
        className={classes.cardTitle}
        title="Basic Information"
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
        <DialogTitle id="form-dialog-title">Basic Information</DialogTitle>

        <DialogContent>
          <Box mt={2}>
            <TextField
              variant="outlined"
              label="Full Name"
              fullWidth
              onChange={profileFormInput}
              name="name"
              value={profileForm.name}
            />
          </Box>

          <Box mt={2}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              variant="outlined"
              label="Date of Birth"
              onChange={profileFormInput}
              name="dob"
              value={profileForm.dob}
              fullWidth
            />
          </Box>

          <Box mt={2}>
            <Autocomplete
              id="bloodGroup"
              fullWidth
              // value={profileForm.bloodGroup || []}
              onChange={(e, newValue) =>{onChangeBloodGroup(newValue)}}
              options={bloodGroup_data}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} label="Blood Group" variant="outlined" />
              )}
            />
          </Box>

          <Box mt={2}>
            {/* <TextField
              variant="outlined"
              label="Maritial Status"
              fullWidth
              onChange={profileFormInput}
              name="maritialStatus"
              value={profileForm.maritialStatus}
            /> */}
            <Autocomplete
              id="maritialStatus"
              fullWidth
              // value={profileForm.bloodGroup || []}
              onChange={(e, newValue) =>{onChangeMatialStatus(newValue)}}
              options={maritialStatus_data}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Maritial Status"
                  variant="outlined"
                />
              )}
            />
          </Box>

          <Box mt={2}>
            <TextField
              variant="outlined"
              label="Nationality"
              fullWidth
              onChange={profileFormInput}
              name="nationality"
              value={profileForm.nationality}
            />
          </Box>
          <Box mt={2}>
            <TextField
              type="number"
              variant="outlined"
              label="NID No"
              fullWidth
              onChange={profileFormInput}
              name="nid"
              value={profileForm.nid}
            />
          </Box>
          <Box mt={2}>
            <TextField
              variant="outlined"
              label="Birth Registration No"
              type="number"
              fullWidth
              onChange={profileFormInput}
              name="birthCertificate"
              value={profileForm.birthCertificate}
            />
          </Box>

          <Box mt={2}>
            <TextField
              type="number"
              variant="outlined"
              label="Passport No"
              fullWidth
              onChange={profileFormInput}
              name="passport"
              value={profileForm.passport}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={profileFormSubmit} color="primary">
            update
          </Button>
        </DialogActions>
      </Dialog>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <CardHeader
            action={
              <IconButton onClick={handleDialog}>
                <EditOutlinedIcon />
              </IconButton>
            }
          /> */}
          <Grid container>
            <Grid item sm={6}>
              <ListItem>
                <ListItemText className={classes.showListName}>
                  {/* <Typography component="span" >full name: </Typography> */}
                  <Typography className={classes.showListName}>
                    {currentUser?.profile?.name}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  <Typography component="span">Date of Birth: </Typography>
                  <Typography component="span">
                    {currentUser?.profile?.dob}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  <Typography component="span">Nationality: </Typography>
                  <Typography component="span">
                    {currentUser?.profile?.nationality}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography component="span">Matial Status: </Typography>
                  <Typography component="span">
                    {currentUser?.profile?.maritialStatus?.title}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item sm={6}>
              <ListItem>
                <ListItemText>
                  <Typography component="span">Blood Group: </Typography>
                  <Typography component="span">
                    {currentUser?.profile?.bloodGroup?.title}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText>
                  <Typography component="span">NID No: </Typography>
                  <Typography component="span">
                    {currentUser?.profile?.nid}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography component="span">Birth Reg No: </Typography>
                  <Typography component="span">
                    {currentUser?.profile?.birthCertificate}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography component="span">Passport No: </Typography>
                  <Typography component="span">
                    {currentUser?.profile?.passport}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProfileInformation;
