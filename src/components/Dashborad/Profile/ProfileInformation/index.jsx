import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
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

const ProfileInformation = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  // profile input data state
  const [profileForm, setProfileForm] = useState({
    fullName: "",
    dob: "",
    bloodGroup: "",
    maritialStatus: "",
    nationality: "",
    nidNo: "",
    birthCertificateNo: "",
    passportNo: "",
  });
  const profileFormInput = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };
  const profileFormSubmit = (e) => {
    e.preventDefault();

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


  return (
    <Card>
      <CardHeader
        title="Profile"
        action={
          <IconButton onClick={handleDialog}>
            <EditOutlinedIcon />
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
        <DialogTitle id="form-dialog-title">Profile</DialogTitle>

        <DialogContent>
          <Box mt={2}>
            <TextField
              variant="outlined"
              label="Full Name"
              fullWidth
              onChange={profileFormInput}
              name="fullName"
              value={profileForm.fullName}
            />
          </Box>

          <Box mt={2}>
            <FormControl fullWidth>
              {/* <InputLabel id="emailLabel">Email</InputLabel>
              <Select
                variant="outlined"
                labelId="emailLabel"
                // id="demo-simple-select"
                value={email}
                label="Email"
                onChange={handleEmail}
              >
                <MenuItem value="personal">Personal</MenuItem>
                <MenuItem value="work">Work</MenuItem>
              </Select> */}

              <TextField
                variant="outlined"
                label="Email"
                fullWidth
                onChange={profileFormInput}
                name="email"
                value={profileForm.email}
              />
            </FormControl>
          </Box>

          <Box mt={2}>
            <TextField variant="outlined" label="Phone" fullWidth />
          </Box>

          <Box mt={2}>
            <TextField
              variant="outlined"
              label="Date of Birth"
              onChange={profileFormInput}
              name="dob"
              value={profileForm.dob}
              fullWidth
            />
          </Box>

          <Box mt={2}>
            <TextField
              variant="outlined"
              label="Blood Group"
              fullWidth
              onChange={profileFormInput}
              name="bloodGroup"
              value={profileForm.bloodGroup}
            />
          </Box>

          <Box mt={2}>
            <TextField variant="outlined" label="Maritial Status" fullWidth />
          </Box>

          <Box mt={2}>
            <TextField variant="outlined" label="Nationality" fullWidth />
          </Box>
          <Box mt={2}>
            <TextField variant="outlined" label="NID No" fullWidth />
          </Box>
          <Box mt={2}>
            <TextField
              variant="outlined"
              label="Birth Registration No"
              fullWidth
            />
          </Box>

          <Box mt={2}>
            <TextField variant="outlined" label="Passport No" fullWidth />
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

      <CardContent>
        <Grid container alignItems="center">
          <Grid item sm={3}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary={currentUser?.profile?.name}
                  secondary={currentUser?.profile?.nationality}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={3}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <MailOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={currentUser?.profile?.email} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary={currentUser?.profile?.phone} />
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={3}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CakeIcon />
                </ListItemIcon>
                <ListItemText primary={currentUser?.profile?.dob} />
              </ListItem>

              <ListItem>
                <ListItemText>
                  <Typography component='span'>Maritial Status: </Typography>
                  <Typography component='span'>
                    {currentUser?.profile?.maritialStatus}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={2}>
            <List>
              <ListItem>
                <ListItemText primary="NID No:" />
                <ListItemText primary={currentUser?.profile?.nidNo} />
              </ListItem>
            </List>
          </Grid>

          <Grid item sm={3}>
            <List>
              <ListItem>
                <ListItemText primary="Birth Reg No:" />

                <ListItemText
                  primary={currentUser?.profile?.birthCertificateNo}
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Passport No:" />
                <ListItemText primary={currentUser?.profile?.passportNo} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfileInformation;
