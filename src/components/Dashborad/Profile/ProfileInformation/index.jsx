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
  TextareaAutosize,
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

// country
const country_data = [
  {
    title: "Bangladesh",
  },
  {
    title: "India",
  },
];
const ProfileInformation = () => {
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
  // input form data
  // const [profileForm, setProfileForm] = useState();

  // add phone filed
  // const [phoneFiled, setPhoneFiled] = useState();

  // adding phone button
  // const addPhoneBtn = (index) => {
  //   if (index !== phoneFiled.length - 1) {
  //     let addItems = [...phoneFiled];
  //     let formate = addItems.filter((item, i) => i !== index);

  //     setPhoneFiled(formate);
  //   } else {
  //     setPhoneFiled((prevState) => [...prevState, ""]);
  //   }
  // };

  // upload image funciton
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
                  Akash Kumar Das
                </Typography>
                <Typography className={classes.profileCountry}>
                  Bangladesh
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
        {/* 
        <Grid container>
          <Grid item sm={8}> */}
        <Box p={2}>
          <Typography className={classes.aboutMe}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nostrum odio quasi perferendis vel deserunt autem vitae quo amet
            voluptatum ad dolorem deleniti eius adipisci veritatis perspiciatis
            totam explicabo, tempora at accusantium officiis vero. Quibusdam
            magni veritatis qui, aut architecto laboriosam distinctio.
            Voluptatum quidem provident maiores, nisi est incidunt, sequi
            deserunt natus harum, temporibus quasi fuga ullam placeat. Molestiae
            repellat recusandae eveniet sequi deserunt culpa saepe suscipit
            doloribus officia quae at atque magnam numquam asperiores vero aut
            ex architecto vitae itaque veniam, beatae aliquam voluptatem
            doloremque totam. Itaque reprehenderit, explicabo eaque possimus
            maiores eos laborum quae dolore tempora enim illum!
          </Typography>
        </Box>

        {/* </Grid>
        </Grid> */}

        <Grid
          container
          alignItems="center"
          spacing={3}
          justifyContent="space-between"
        >
          <Grid item sm={3}>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <EmailIcon size="small" />
              </ListItemIcon>
              <ListItemText  primary="aakash@gmail.com" />
            </ListItem>
          </Grid>

          <Grid item sm={3}>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <PhoneIcon  size="small" />
              </ListItemIcon>
              <ListItemText primary="01880876280" />
            </ListItem>
          </Grid>

          <Grid item sm={4}>
            <Grid container>
              <Grid item sm={4}>
                <Box textAlign="right">
                  <Tooltip title="linkedin username" placement="top">
                    <LinkedInIcon />
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item sm={4}>
                <Box textAlign="right">
                  <Tooltip title="Github username" placement="top">
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
                />
              </Grid>

              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  label="Last Name"
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={2}>
            <Autocomplete
              id="country"
              fullWidth
              options={country_data}
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
            />
          </Box>

          {/* <Box mt={2}>
            {phoneFiled.map((item, i) => (
              <Grid container alignItems="center" spacing={1} key={i}>
                <Grid item sm={8}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Phone"
                    required
                  />
                </Grid>
                <Grid item sm={2}>
                  <IconButton onClick={() => addPhoneBtn(i, item)}>
                    {i !== phoneFiled.length - 1 ? (
                      <CloseIcon />
                    ) : (
                      <AddCircleOutlineIcon />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Box>  */}
          <Box mt={2}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item sm={8}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Phone"
                  required
                />
              </Grid>
              <Grid item sm={2}>
                <IconButton>
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>

          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Github username (optional)"
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Linkedin username (optional)"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogClose} variant="outlined">
            Cancle
          </Button>
          <Button variant="outlined" className={classes.saveBtn}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileInformation;
