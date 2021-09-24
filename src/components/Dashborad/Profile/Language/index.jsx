import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import useStyles from "../Styled";
import { updateProfile } from "../../../../stores/actions/authActions";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useEffect } from "react";
import { Autocomplete } from "@material-ui/lab";
const proficiency_data = [
  {
    title: "High",
  },
  {
    title: "Low",
  },
  {
    title: "Medium",
  },
];
const label = [
  {
    title: "High",
  },
  {
    title: "Low",
  },
  {
    title: "Medium",
  },
];
const Language = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  // dialog box open and close
  const [dialogOpen, setDialogOpen] = useState(false);

  const addHandler = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };

  // form
  const [form, setForm] = useState({
    languageName: "",
  });

  // reset form
  const resetForm = () => {
    setForm((prevState) => ({
      ...prevState,
      languageName: "",
    }));
  };

  //form input value
  const formInputValue = (field, value) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // form submit
  const formSubmit = () => {
    setDialogOpen(false);

    let trainings = [];
    if (currentUser && currentUser.profile && currentUser.profile.trainings) {
      trainings = [...currentUser.profile.trainings];
    } else {
      trainings = [];
    }

    if (editStatus.status) {
      trainings = [
        ...trainings.filter((item, i) => i !== editStatus.index),
        form,
      ];
    } else {
      trainings = [...trainings, form];
    }

    let formData = {
      trainings: trainings,
    };

    dispatch(
      updateProfile(formData, () => {
        // setAddDialogBox(false);
        setEditStatus({ status: false, index: 0 });
        resetForm();
      })
    );
  };

  // edit status
  const [editStatus, setEditStatus] = useState({
    status: false,
    index: 0,
  });

  // edit form dialog
  const [dialogTitle, setDialogTitle] = useState("Add New Language");

  const editHandler = (index) => {
    setDialogOpen(true);

    setDialogTitle("Update Language");

    let training = {};

    currentUser?.profile?.trainings.forEach((item, i) => {
      if (i === index) {
        training = item;
      }
    });

    setEditStatus({
      status: true,
      index: index,
    });

    setForm((prevState) => ({
      ...prevState,
      ...training,
    }));
  };

  //   traingins delete
  const deleteHandeler = (index) => {
    let trainings = [
      ...currentUser?.profile?.trainings?.filter((item, i) => i !== index),
    ];

    let formData = {
      trainings: trainings,
    };
    dispatch(updateProfile(formData));
  };

  return (
    <Box px={1} py={3}>
      <Container>
        <Box m={2}>
          <Typography className={classes.portionTitle}>
            Language Skills and Proficiency
          </Typography>
        </Box>

        <Box m={2}>
          <Box>
            {currentUser?.profile?.trainings?.map((item, i) => (
              <Box my={2}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item sm={8} lg={8}>
                    <Typography className={classes.training}>
                      Language : {item?.courseName}
                    </Typography>
                    <Typography className={classes.training}>
                      Proficiency: {item?.duration}
                    </Typography>
                    {/* <Typography className={classes.training}>
                      institute name : {item?.instituteName}
                    </Typography>
                    <Typography className={classes.training}>
                      Instititue Location : {item?.instituteLocation}
                    </Typography> */}
                  </Grid>

                  <Grid item sm={2} lg={2}>
                    <Box textAlign="right">
                      <IconButton onClick={() => editHandler(i)}>
                        <EditIcon />
                      </IconButton>

                      <IconButton onClick={() => deleteHandeler(i)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>

        <Box m={2}>
          <Button variant="outlined" onClick={addHandler}>
            add Language
          </Button>
        </Box>
      </Container>

      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="dialog-area"
      >
        <DialogTitle id="dialog-area">
          <Typography>{dialogTitle}</Typography>
        </DialogTitle>
        <DialogContent>
          <Box my={2}>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              label="Language Name"
              name="languageName"
              value={form.languageName}
              onChange={(e) => formInputValue("languageName", e.target.value)}
            />
          </Box>
          <Box my={2}>
            <Typography>Proficiency</Typography>
            <Box mt={2}>
              <Autocomplete
                size="small"
                fullWidth
                options={proficiency_data}
                getOptionLabel={(option) => option.title}
                renderInput={(data) => (
                  <TextField {...data} label="Reading" variant="outlined" />
                )}
              />
            </Box>
            <Box mt={2}>
              <Autocomplete
                size="small"
                fullWidth
                options={proficiency_data}
                getOptionLabel={(option) => option.title}
                renderInput={(data) => (
                  <TextField {...data} label="Writting" variant="outlined" />
                )}
              />
            </Box>
            <Box mt={2}>
              <Autocomplete
                size="small"
                fullWidth
                options={proficiency_data}
                getOptionLabel={(option) => option.title}
                renderInput={(data) => (
                  <TextField {...data} label="Listening" variant="outlined" />
                )}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={formSubmit}>
            {editStatus.status ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Language;
