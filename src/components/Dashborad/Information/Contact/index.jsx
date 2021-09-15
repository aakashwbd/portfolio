import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";
import { useState } from "react";
import { useStyles } from "../Styled";
import { useEffect } from "react";
import { Close } from "@material-ui/icons";

const address_data = [
  {
    value: "Present",
    label: "Present",
  },
  {
    value: "Permanent",
    label: "Permanent",
  },
  {
    value: "Street",
    label: "Street",
  },
];

const Contact = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState();
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const [address, setAddress] = useState(null);

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  const [add, setAdd] = useState([""]);
  const addBtn = (index, value) => {
    if (index !== add.length - 1) {
      let addItems = [...add] ;
      let formate = addItems.filter((item, i) => i !== index);
      setAdd(formate);
    } else {
      setAdd((prevState) => [...prevState, ""]);
    }
    console.log(index);
  };
  console.log(add)
  // const phoneChange = ()=> {

  // }
  return (
    <Box>
      <Card elevation={0} className={classes.card}>
        <CardHeader
          className={classes.cardTitle}
          title="Contact Information"
          action={
            <IconButton onClick={handleClick} className={classes.cardIcon}>
              {!expanded ? <AddCircleOutlineIcon /> : <HighlightOffIcon />}
            </IconButton>
          }
        />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box>
              <TextField
                id="standard-select-currency"
                select
                fullWidth
                label="Select"
                value={address}
                onChange={handleChange}
                // className={classes.textField}
                helperText="Please select your address"
              >
                {address_data.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            {address === "Present" && (
              <Box mt={2}>
                <Grid container spacing={1}>
                  <Grid item sm={3}>
                    <TextField
                      fullWidth
                      placeholder="Holding No"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item sm={3}>
                    <TextField
                      fullWidth
                      placeholder="Road No"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item sm={3}>
                    <TextField
                      fullWidth
                      placeholder="city"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item sm={3}>
                    <TextField
                      fullWidth
                      placeholder="Zip Code"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                    />
                  </Grid>
                </Grid>
              </Box>
            )}

            {address === "Permanent" && (
              <Box mt={2}>
                <Grid container spacing={1}>
                  <Grid item sm={6}>
                    <TextField
                      fullWidth
                      placeholder="Village"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      fullWidth
                      placeholder="P.O"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item sm={6}>
                    <TextField
                      fullWidth
                      placeholder="P.S"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      fullWidth
                      placeholder="Dist"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                    />
                  </Grid>
                </Grid>
              </Box>
            )}

            <Box mt={3}>
              <Typography>Phone No</Typography>
              {add.map((item, i) => (
                <Grid container key={i}>
                  <Grid item sm={8}>
                    <TextField
                      fullWidth
                      placeholder="Phone"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                      // onChange={phoneChange}
                    />
                  </Grid>
                  <Grid item sm={2}>
                    <IconButton onClick={() => addBtn(i, item)}>
                      {i !== add.length - 1 ? (
                        <Close />
                      ) : (
                        <AddCircleOutlineIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
            </Box>

            <Box mt={2}>
              <Typography>E-mail</Typography>

              <Grid container>
                <Grid item sm={6}>
                <TextField
                      fullWidth
                      type='mail'
                      placeholder="Email"
                      InputProps={{ disableUnderline: true }}
                      className={classes.textField}
                   
                    />
                </Grid>
              </Grid>
            </Box>

            <Box mt={2} textAlign="right">
              <Button
                variant="contained"
                size="small"
                className={classes.btnColor}
      
              >
                Save
              </Button>
            </Box>

           
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Contact;