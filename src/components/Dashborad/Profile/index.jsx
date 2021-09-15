import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Icon,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { hero1 } from "../../../constant/_icon";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Dashboard from "../../../layouts/Dashboard";

import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import Photos from "../Information/Photos ";
const useStyles = makeStyles({
  prfImg: {
    height: 210,
    width: "100%",
    borderRadius: 3,
    background: "black",
    "&.MuiAvatar-Img": {
      objectFit: "cover",
    },
  },
  title: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Montserrat",
  },
  name: {
    fontFamily: "Montserrat",
    fontSize: 20,
    color: "#000000",
    marginBottom: 10,
  },
  proffesion: {
    fontSize: 16,
    color: "#000000",
    fontFamily: "Montserrat",
  },
  descriptionTitle: {
    fontSize: 25,
    //  color: 'red'
  },
  descriptionSubTitle: {
    fontSize: 20,
  },
});
const Profile = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dashboard>
      <Container maxWidth="md">
        <Box my={3}>
          <Card>
            <CardHeader
              title="Profile"
              action={
                <IconButton onClick={handleClickOpen}>
                  <EditOutlinedIcon />
                </IconButton>
              }
            />

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Profile</DialogTitle>

              <DialogContent>
                <Photos />
                <Box mt={2}>
                  <TextField label="Name" fullWidth />
                </Box>
                <Box mt={2}>
                  <TextField label="Email" fullWidth />
                </Box>
                <Box mt={2}>
                  <TextField label="Phone" fullWidth />
                </Box>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  update
                </Button>
              </DialogActions>
            </Dialog>

            <CardContent>
              <Grid container>
                <Grid item sm={2}>
                  <Avatar />
                </Grid>

                <Grid item sm={4}>
                  <Typography>Akash Kumar Das</Typography>
                  <Typography>La-24, Road-01, Merul</Typography>
                </Grid>

                <Grid item sm={4}>
                  <Typography>aakash@gmail.com</Typography>
                  <Typography>phone</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box my={3}>
          <Card>
            <CardHeader
              title="Basic Information"
              action={
                <IconButton>
                  <EditOutlinedIcon />
                </IconButton>
              }
            />

            <CardContent>
              <Grid container>
                <Grid item sm={4}>
                  <Typography>Blood Group</Typography>
                  <Typography>Date of Birth</Typography>
                  <Typography>Maritial Status</Typography>
                  <Typography>Nationality</Typography>
                </Grid>

                <Grid item sm={4}>
                  <Typography>Nid No</Typography>
                  <Typography>Birth Certificate No</Typography>
                  <Typography>Passport No</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Box my={3}>
          <Card>
            <CardHeader
              title="Education"
              action={
                <IconButton>
                  <EditOutlinedIcon />
                </IconButton>
              }
            />

            <CardContent>
              <Box>
                <Typography>Bachelor of Science (B.Sc)</Typography>
                <Typography>
                  Computer Science and Engineering (C.S.E)
                </Typography>
                <Typography>
                  Bangladesh Institute of Science and Technolog (B.I.S.T)
                </Typography>
                <Typography>01 January, 2015 - 01 Novemver, 2019</Typography>
                <Typography>Duration: 4yrs</Typography>
                <Typography>CGPA: 0 </Typography>
              </Box>

              <Box my={3}>
                <Button variant="contained">add more</Button>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box my={3}>
          <Card>
            <CardHeader
              title="Experience"
              action={
                <IconButton>
                  <EditOutlinedIcon />
                </IconButton>
              }
            />

            <CardContent>
              <Box>
                <Typography>Developer</Typography>
                <Typography>Project X</Typography>
                <Typography>Nikunjo</Typography>
                <Typography>01 January, 2015 - 01 Novemver, 2019</Typography>
              </Box>

              <Box my={3}>
                <Button variant="contained">add more</Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Dashboard>
  );
};

export default Profile;
