import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";

import { useStyles } from "../Styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateProfile } from "../../../../stores/actions/authActions";

const About = () => {
  const classes = useStyles();

  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [aboutForm, setAboutForm] = useState({
    aboutDescripton: "",
  });

  const handleInput = (e) => {
    setAboutForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [showForm, setShowForm] = useState();

  const submitBtn = (e) => {
    e.preventDefault();

    dispatch(updateProfile(aboutForm));
    setShowForm(!showForm);
  };

  const handleClickEdit = (e) => {
    setShowForm(!showForm);
    
    setAboutForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box>
      {showForm && (
        <Card elevation={0} className={classes.card}>
          <CardHeader title="About Me" />

          <CardContent>
            <Box>
              <TextField
                fullWidth
                placeholder="Description"
                InputProps={{ disableUnderline: true }}
                className={classes.textField}
                multiline
                minRows="6"
                onChange={handleInput}
                name="aboutDescripton"
                value={aboutForm.aboutDescripton}
              />
            </Box>

            <Box mt={2} textAlign="right">
              <Button
                variant="contained"
                size="small"
                className={classes.btnColor}
                onClick={submitBtn}
              >
                save
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
      {!showForm && (
        <Card>
          <CardHeader
            title="About Me"
            action={
              <IconButton onClick={handleClickEdit}>
                <EditIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="body">
              {currentUser?.profile?.aboutDescripton}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default About;
