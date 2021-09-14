import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
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

import axios from "axios";

const Basic = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState();

  const handleClick = () => {
    setExpanded(!expanded);
  };

  // const [name, setName] = useState();

  // const [basicInfo, setBasicInfo] = useState();

  // const completeBtn = () => {
  //   let carts = JSON.parse(localStorage.getItem("basicInformaiton")) || [];

  //   let basicinfo_data = {
  //     name: name,
  //   };

  //   carts = [...carts, basicinfo_data];
  //   setBasicInfo(basicinfo_data);

  //   localStorage.setItem("basicInformaion", JSON.stringify(carts));

  //   console.log(basicInfo);

  //   // setExpanded(!expanded);
  // };

  // const [showInfo, setShowInfo] = useState();

  // useEffect(() => {
  //   let basicInfoCart =
  //     JSON.parse(localStorage.getItem("basicInformaiton")) || [];

  //   setShowInfo(basicInfoCart);
  // }, []);
  const [basic, setBasic] = useState({
    name: "",
    dob: "",
    bloodGroup: "",
    maritialStatus: "",
    nationality: "",
    nid: "",
    birthCertificate: "",
  });

  const handleInput = (e) => {
    setBasic({ ...basic, [e.target.name]: e.target.value });
  };

  const basicSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: basic.name,
      dob: basic.dob,
      bloodGroup: basic.bloodGroup,
      maritialStatus: basic.maritialStatus,
      nationality: basic.nationality,
      nid: basic.nid,
      birthCertificate: basic.birthCertificate,
    };
    // console.log(data)
    axios
      .post(`http://127.0.0.1:8000/api/information/basic`, data)
      .then((res) => {});

   
  };

  const [showData, setShowData] = useState([]);

  const getShow = () => {
    axios.get(`http://127.0.0.1:8000/api/information/basic`).then((res) => {
      console.log(res);
     
    });
  };
  // useEffect(() => {
  //   getShow();
  // }, []);

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
                  type="date"
                  fullWidth
                  placeholder="Date of Birth"
                  InputProps={{ disableUnderline: true }}
                  className={classes.textField}
                  onChange={handleInput}
                  name="dob"
                  value={basic.dob}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  placeholder="Blood Group"
                  InputProps={{ disableUnderline: true }}
                  className={classes.textField}
                  onChange={handleInput}
                  name="bloodGroup"
                  value={basic.bloodGroup}
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
                  fullWidth
                  placeholder="Birth Certificate No"
                  InputProps={{ disableUnderline: true }}
                  className={classes.textField}
                  onChange={handleInput}
                  name="birthCertificate"
                  value={basic.birthCertificate}
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
          </CardContent>

          <Box>
            <Button onClick={getShow}>show</Button>
            <Typography>Name:</Typography>
            <Typography>B.G: </Typography>
            {/* {showData} */}
          </Box>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Basic;
