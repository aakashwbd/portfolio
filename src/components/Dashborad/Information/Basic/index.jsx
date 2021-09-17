import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  IconButton,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React, { useEffect } from "react";

import { useState } from "react";
import { useStyles } from "../Styled";

import EditIcon from "@material-ui/icons/Edit";

import BasicInput from "./BasicInput";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../../stores/actions/authActions";
import { useSelector } from "react-redux";

const Basic = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const classes = useStyles();

  const [expanded, setExpanded] = useState();
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const [basic, setBasic] = useState({
    name: "",
    dob: "",
    bloodGroup: "",
    maritialStatus: "",
    nationality: "",
    nid: "",
    birthCertificate: "",
    passport: "",
  });

  const handleInput = (e) => {
    setBasic({ ...basic, [e.target.name]: e.target.value });
  };

  const basicSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProfile(basic));
    setShowForm(!showForm);
  };

  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleEditOpen = () => {
    setShowForm(!showForm);
  };

  const [showForm, setShowForm] = useState();

  console.log(basic);

  return (
    <Box>
      {showForm && (
        <Card elevation={0} className={classes.card}>
          <CardHeader title="Basic Information" />

          <CardContent>
            <Box>
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item sm={12}>
                  <TextField
                    fullWidth
                    placeholder="Name"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={handleInput}
                    name="name"
                    value={basic.name}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Nationality"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={handleInput}
                    name="nationality"
                    value={basic.nationality}
                  />
                </Grid>

                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="NID No"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={handleInput}
                    name="nid"
                    value={basic.nid}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item sm={6}>
                  <TextField
                    type="number"
                    fullWidth
                    placeholder="Birth Certificate No"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={handleInput}
                    name="birthCertificate"
                    value={basic.birthCertificate}
                  />
                </Grid>

                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="Passport No"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={handleInput}
                    name="passport"
                    value={basic.passport}
                  />
                </Grid>
              </Grid>

              <Box my={2}>
                <Grid
                  container
                  spacing={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item sm={6}>
                    <InputLabel id="selct">Maritial Status</InputLabel>
                    <Select
                      fullWidth
                      labelId="select"
                      label="Blood Group"
                      id="select"
                      name="maritialStatus"
                      value={basic.maritialStatus}
                      disableUnderline
                      onChange={handleInput}
                    >
                      <MenuItem value={"Married"}>Married</MenuItem>
                      <MenuItem value={"Single"}>Single</MenuItem>
                      <MenuItem value={"Divorce"}>Divorce</MenuItem>
                    </Select>
                  </Grid>

                  <Grid item sm={6}>
                    <InputLabel id="selct">Blood Group</InputLabel>
                    <Select
                      fullWidth
                      labelId="select"
                      label="Blood Group"
                      id="select"
                      name="bloodGroup"
                      value={basic.bloodGroup}
                      disableUnderline
                      onChange={handleInput}
                    >
                      <MenuItem value={"A+"}>A+</MenuItem>
                      <MenuItem value={"A-"}>A-</MenuItem>
                      <MenuItem value={"B+"}>B+</MenuItem>
                      <MenuItem value={"B-"}>B-</MenuItem>
                      <MenuItem value={"AB+"}>AB+</MenuItem>
                      <MenuItem value={"AB-"}>AB-</MenuItem>
                      <MenuItem value={"O+"}>O+</MenuItem>
                      <MenuItem value={"O-"}>O-</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Box>
              <Grid container>
                <Grid item sm={6}>
                  <TextField
                    // variant="outlined"
                    type="date"
                    fullWidth
                    label="Date of Birth"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleInput}
                    name="dob"
                    value={basic.dob}
                  />
                </Grid>
              </Grid>

              <Box mt={2} textAlign="right">
                <Button
                  variant="contained"
                  size="small"
                  className={classes.btnColor}
                  onClick={basicSubmit}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </CardContent>
          {/* </Collapse> */}
        </Card>
      )}
      <Card>
        {!showForm && (
          <Box>
            <CardHeader
              title="Basic Information"
              action={
                <IconButton onClick={handleEditOpen}>
                  <EditIcon />
                </IconButton>
              }
            />
            {/* 
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Update</DialogTitle>
              <DialogContent>
                <BasicInput />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Update
                </Button>
              </DialogActions>
            </Dialog> */}

            <CardContent>
              <Grid container>
                <Grid item>
                  <Typography variant="h5">
                    {currentUser?.profile?.name}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item sm={6}>
                  <Typography variant="subtitle1">
                    Blood Group: {currentUser?.profile?.bloodGroup}
                  </Typography>

                  <Typography variant="subtitle1">
                    DoB: {currentUser?.profile?.dob}{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    Maritial Status: {currentUser?.profile?.maritialStatus}
                  </Typography>
                  <Typography variant="subtitle1">
                    Nationality: {currentUser?.profile?.nationality}
                  </Typography>
                </Grid>

                <Grid item sm={6}>
                  <Typography variant="subtitle1">
                    NID: {currentUser?.profile?.nid}
                  </Typography>
                  <Typography variant="subtitle1">
                    Birth Reg No:{currentUser?.profile?.birthCertificate}
                  </Typography>
                  <Typography variant="subtitle1">
                    Passport:{currentUser?.profile?.passport}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default Basic;
