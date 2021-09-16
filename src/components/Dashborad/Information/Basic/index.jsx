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
  InputLabel,
  Select,
} from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React, { useEffect } from "react";
import { useState } from "react";
import { useStyles } from "../Styled";

import EditIcon from "@material-ui/icons/Edit";

import axios from "axios";
import BasicInput from "./BasicInput";

const Basic = () => {

  const [bloodData, setBloodData] = useState("o+");
  
  const handleChange = (event) => {
    setBloodData(event.target.value);
  };
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

  const [fieldShow, setFieldShow] = useState();

  const basicSubmit = (e) => {
    e.preventDefault();

    setFieldShow(!fieldShow);

    axios({
      method: "patch",
      url: "http://127.0.0.1:8000/api/auth/update",
      data: basic,
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    }).then((res) => {});
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [show, setShow] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/auth/me",
      data: basic,
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    }).then((res) => {
      if (res.data.status == "done") {
        console.log(res.data.data);
        setShow(res.data.data);
      }
    });
  }, []);

  // console.log()

  return (
    <Box>
      <Card elevation={0} className={classes.card}>
        <CardHeader
          className={classes.cardTitle}
          title="Basic Information"
          action={
            <IconButton onClick={handleClick} className={classes.cardIcon}>
              {!expanded ? <AddCircleOutlineIcon /> : <HighlightOffIcon />}
            </IconButton>
          }
        />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {/* <BasicInput /> */}
            {!fieldShow && (
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
                    variant='outlined'
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
                  <Grid item sm={6}>
                 

                    {/* <InputLabel id="select">Blood Group</InputLabel> */}
                    <Select
                      fullWidth
                      labelId="select"
                      label='Blood Group'
                      id="select"
                      value={bloodData}
                      disableUnderline
                      onChange={handleChange}
                      // className={classes.textField}
                    >
                      <MenuItem value={"blood Group"}>blood Group</MenuItem>
                      <MenuItem value={"O+"}>O+</MenuItem>
                      <MenuItem value={"O-"}>O-</MenuItem>
                    
                    </Select>
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
                      placeholder="Maritial Status"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                      onChange={handleInput}
                      name="maritialStatus"
                      value={basic.maritialStatus}
                    />
                  </Grid>

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
                </Grid>
                <Grid container spacing={1}>
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
              </Box>
            )}

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
          </CardContent>
          {fieldShow && (
            <Box>
              <CardHeader
                action={
                  <IconButton onClick={handleClickOpen}>
                    <EditIcon />
                  </IconButton>
                }
              />

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
              </Dialog>

              <CardContent>
                <Typography className={classes.name}>
                  {show?.profile?.name}
                </Typography>
                <Typography>
                  Blood Group:{show?.profile?.bloodGroup}{" "}
                </Typography>
                <Typography>Dob:{show?.profile?.dob} </Typography>
                <Typography>
                  Maritial Status:{show?.profile?.maritialStatus}{" "}
                </Typography>
                <Typography>
                  Nationality: {show?.profile?.nationality}
                </Typography>
                <Typography>NID: {show?.profile?.nid}</Typography>
                <Typography>
                  Birth Reg No:{show?.profile?.birthCertificate}{" "}
                </Typography>
                <Typography>Passport:{show?.profile?.passport} </Typography>
              </CardContent>
            </Box>
          )}
        </Collapse>
      </Card>
    </Box>
  );
};

export default Basic;
