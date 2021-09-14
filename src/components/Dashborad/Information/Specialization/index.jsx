import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
const useStyle = makeStyles({
  splBtn: {
    background: "#9289F3",
    color: "white",
  },
  bg: {
    background: "#FFFFFF",
    padding: "10px 25px",
    borderRadius: 8,
  },
});

const Specialization = () => {
  const classes = useStyle();

  const [skills, setSkills] = useState();
  const [specialization, setSpecilaization] = useState();

  const subBtn = () => {
    let carts = JSON.parse(localStorage.getItem("specailizationItem")) || [];

    let spl = {
      skill: specialization,
    };

    carts = [...carts, spl];
    setSpecilaization(spl);
    localStorage.setItem("specailizationItem", JSON.stringify(carts));

    console.log(skills);
  };

  return (
    <Box>
      <Typography>Specailizations</Typography>

      <TextField
        placeholder="Add Your Skills"
        size="small"
        onChange={(e) => setSkills(e.target.value)}
        InputProps={{ disableUnderline: true }}
        className={classes.bg}
      />
      <Button variant="contained" className={classes.splBtn} onClick={subBtn}>
        Add
      </Button>
    </Box>
  );
};

export default Specialization;
