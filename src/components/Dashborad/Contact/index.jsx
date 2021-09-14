import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import { useStyles } from '../Information/Styled';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Contact = () => {

    const classes = useStyles();
    const [addressInfo, setAddressInfo] = useState();
    const [email, setEmail] = useState();
    const [contactInfo, setContactInfo] = useState();
  
    const submitBtn = () => {
      let contact_data = {
        address: addressInfo,
        email: email,
      };
  
      setContactInfo(contact_data);
      localStorage.setItem("contact", JSON.stringify(contact_data));
  
      console.log(contactInfo);
    };
    return (
        <Box>
            <Typography>Contact Info</Typography>

            {/* <Button endIcon={<AddCircleRoundedIcon/>} >add education</Button> */}
            <Grid container>
      <Grid item sm={4}>
        <Grid container>
          <Grid item sm={12}>
            {/* <Typography>
              <FiberManualRecordIcon className={classes.icon} />
              Work Experience
            </Typography> */}
            <Grid container spacing={1} justifyContent="space-between">
              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  placeholder="Address"
                  size="small"
                  fullWidth
                  
                  onChange={(e) => setAddressInfo(e.target.value)}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Email"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
            </Grid>
        <Grid container spacing={1} justifyContent="space-between">
              {/* <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  //   label="From"
                  size="small"
                  type="date"
                  fullWidth
                //   onChange={(e) => setFrom(e.target.value)}
                />
              </Grid>  */}
              {/* <Grid item sm={6}>
                <TextField
                  size="small"
                  variant="outlined"
                  //   label="To"
                  type="date"
                //   onChange={(e) => setTo(e.target.value)}
                />
              </Grid> */}
            </Grid>
            {/* <Box mt={1}>
              <TextField
                variant="outlined"
                placeholder="description"
                fullWidth
                minRows="5"
                // onChange={(e) => setDescription(e.target.value)}
              />
            </Box> */}
            <Box mt={5}>
              <Button
                mt={1}
                variant="contained"
                onClick={submitBtn}
                className={classes.btn}
              >
                add
              </Button>
            </Box>

            {/* <Button variant="contained" onClick={tempOne}>
              view template
            </Button> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
        </Box>
    )
}

export default Contact
