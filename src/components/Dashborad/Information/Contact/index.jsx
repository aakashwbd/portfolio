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
import React from "react";
import { useState } from "react";
import { useStyles } from "../Styled";
import { useEffect } from "react";

const Contact = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState();
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const [name, setName] = useState();

  const [basicInfo, setBasicInfo] = useState();

  const completeBtn = () => {
    let carts = JSON.parse(localStorage.getItem("basicInformaiton")) || [];

    let basicinfo_data = {
      name: name,
    };

    carts = [...carts, basicinfo_data];
    setBasicInfo(basicinfo_data);

    localStorage.setItem("basicInformaion", JSON.stringify(carts));

    console.log(basicInfo);

    // setExpanded(!expanded);
  };

  const [showInfo, setShowInfo] = useState();

  useEffect(() => {
    let basicInfoCart =
      JSON.parse(localStorage.getItem("basicInformaiton")) || [];

    setShowInfo(basicInfoCart);
  }, []);
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
            <Box my={2}>
              <Typography>Present Address</Typography>

              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="House"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Road"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="city"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Zip code"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box my={2}>
              <Typography>Parmanent Address</Typography>

              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="House"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Road"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="city"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Zip code"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box my={2}>
              <Typography>Phone</Typography>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Phone"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Alternative Phone"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.btnColor}
                >
                  add
                </Button>
              </Box>
            </Box>
            <Box my={2}>
              <Typography>Mail</Typography>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Mail"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Alternative Mail"
                    InputProps={{ disableUnderline: true }}
                    className={classes.textField}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.btnColor}
                >
                  add
                </Button>
              </Box>
            </Box>

            <Box mt={2} textAlign="right">
              <Button
                variant="contained"
                size="small"
                className={classes.btnColor}
                onClick={completeBtn}
              >
                Complete
              </Button>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Contact;
