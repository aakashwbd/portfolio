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
} from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";
import { useState } from "react";
import { useStyles } from "../Styled";
import { useEffect } from "react";

const Experience = () => {
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
          title="Experience"
          action={
            <IconButton onClick={handleClick} className={classes.cardIcon}>
              {!expanded ? <AddCircleOutlineIcon /> : <HighlightOffIcon />}
            </IconButton>
          }
        />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  placeholder="Company Name"
                  InputProps={{ disableUnderline: true }}
                  className={classes.textField}
                  // onChange={(e) => setName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextField
                  fullWidth
                  placeholder="Designation"
                  InputProps={{ disableUnderline: true }}
                  className={classes.textField}
                  // onChange={(e) => setName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  placeholder="From"
                  InputProps={{ disableUnderline: true }}
                  className={classes.textField}
                  // onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  placeholder="To"
                  InputProps={{ disableUnderline: true }}
                  className={classes.textField}
                  // onChange={(e) => setName(e.target.value)}
                />
              </Grid>
            </Grid> 
             <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  placeholder="Spectial Achievements"
                  InputProps={{ disableUnderline: true }}
                  className={classes.textField}
                  // onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  placeholder="Projects"
                  InputProps={{ disableUnderline: true }}
                  className={classes.textField}
                  // onChange={(e) => setName(e.target.value)}
                />
              </Grid>
            </Grid>

            <Box mt={2} textAlign="right">
              {/* <Button
                variant="contained"
                size="small"
                className={classes.btnColor}
                onClick={completeBtn}
              >
                complete
              </Button> */}
              <Button
                variant="contained"
                size="small"
                className={classes.btnColor}
                onClick={completeBtn}
              >
                add more
              </Button>
            </Box>
          </CardContent>

          {/* <CardContent>
            <Box>{name}</Box>
          </CardContent> */}
        </Collapse>
      </Card>
    </Box>
  );
};

export default Experience;
