import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,

  IconButton,
  TextField,
} from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React from "react";
import { useState } from "react";
import { useStyles } from "../Styled";
import { useEffect } from "react";

const Education = () => {
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
          title="Education Background"
          action={
            <IconButton onClick={handleClick} className={classes.cardIcon}>
              {!expanded ? <AddCircleOutlineIcon /> : <HighlightOffIcon />}
            </IconButton>
          }
        />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box my={2}>
              <TextField
                fullWidth
                placeholder="Degree Name"
                InputProps={{ disableUnderline: true }}
                className={classes.textField}
                // onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box my={2}>
              <TextField
                fullWidth
                placeholder="Course Name"
                InputProps={{ disableUnderline: true }}
                className={classes.textField}
                // onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box my={2}>
              <TextField
                fullWidth
                placeholder="Institute Name"
                InputProps={{ disableUnderline: true }}
                className={classes.textField}
                // onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box my={2}>
              <TextField
                fullWidth
                placeholder="Duration"
                InputProps={{ disableUnderline: true }}
                className={classes.textField}
                // onChange={(e) => setName(e.target.value)}
              />
            </Box>

            
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

export default Education;
