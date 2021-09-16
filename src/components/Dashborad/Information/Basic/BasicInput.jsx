import { Box, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";


import { useStyles } from "../Styled";


const BasicInput = () => {

  
    const classes = useStyles();

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
  return (
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
            type="date"
            fullWidth
            label="Date of Birth"
            InputLabelProps={{
              shrink: true,
              disableUnderline: true,
            }}
            // InputProps={{ disableUnderline: true }}
            className={classes.dob}
            // variant='outlined'
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
  );
};

export default BasicInput;
