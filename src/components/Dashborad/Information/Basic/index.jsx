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

    axios({
      method: "patch",
      url: "http://127.0.0.1:8000/api/auth/update",
      data: basic,
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    }).then((res) => {});
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <BasicInput />

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
              <Typography>Name: </Typography>
              <Typography>Blood Group: </Typography>
              <Typography>Dob: </Typography>
              <Typography>Maritial Status: </Typography>
              <Typography>Nationality: </Typography>
              <Typography>NID: </Typography>
              <Typography>Birth Reg No: </Typography>
            </CardContent>
          </Box>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Basic;
