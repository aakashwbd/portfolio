import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Typography,
  Radio,
  Avatar,
  makeStyles,
  Container,
} from "@material-ui/core";
import { useState } from "react";
import { resumeOne, resumeThree, resumeTwo } from "../../../constant/_icon";
import Dashboard from "../../../layouts/Dashboard";

const useStyles = makeStyles({
  wrapper: {
    minHeight: "100vh",
    height: "100%",
    width: "100%",
  },
  avatar: {
    height: 300,
    width: 200,
    borderRadius: 0,
    "& .MuiAvatar-img": {
      objectFit: "contain",
    },
  },
});
const SelectTemplate = () => {
  const classes = useStyles();
  const [radioValue, setRadioValue] = useState();

  const changeHandler = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <Dashboard>
      <Box className={classes.wrapper}>
        <Container maxWidth="md">
          <FormControl component="fieldset">
            <RadioGroup row value={radioValue} onChange={changeHandler}>
              <Box mt={5}>
                <FormControlLabel
                  value="template1"
                  label={<Avatar src={resumeOne} className={classes.avatar} />}
                  control={<Radio />}
                  labelPlacement="Top"
                  placeholder="template1"
                />
                <FormControlLabel
                  value="template2"
                  label={<Avatar src={resumeTwo} className={classes.avatar} />}
                  control={<Radio />}
                  labelPlacement="Top"
                  placeholder="template2"
                />
                <FormControlLabel
                  value="template3"
                  label={
                    <Avatar src={resumeThree} className={classes.avatar} />
                  }
                  control={<Radio />}
                  labelPlacement="Top"
                  placeholder="template3"
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Container>
      </Box>
    </Dashboard>
  );
};

export default SelectTemplate;
