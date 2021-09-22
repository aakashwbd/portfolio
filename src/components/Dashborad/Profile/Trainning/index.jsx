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

const Trainning = () => {
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
    courseName: "",
    duration: "",
    instituteName: "",
    instituteLocation: "",
  });

  // reset form
  const resetForm = () => {
    setForm((prevState) => ({
      ...prevState,
      courseName: "",
      duration: "",
      instituteName: "",
      instituteLocation: "",
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
  const [dialogTitle, setDialogTitle] = useState("Add New Trainning");

  const editHandler = (index) => {
    setDialogTitle("update Trainings");

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
    let traingins = [
      ...currentUser?.profile?.traingins?.filter((item, i) => i !== index),
    ];

    let formData = {
      traingins: traingins,
    };
    dispatch(updateProfile(formData));
  };

  return (
    <Box px={1} py={3}>
      <Container>
        <Box m={2}>
          <Typography className={classes.portionTitle}>Trainnings</Typography>
        </Box>

        <Box m={2}>
          <Box>
            {currentUser?.profile?.trainings?.map((item, i) => (
              <Grid container>
                <Grid item sm={8}>
                  <Typography>course Name{item?.courseName} </Typography>
                  <Typography>Duraiton{item?.duration}</Typography>
                  <Typography>institute name {item?.instituteName}</Typography>
                  <Typography>
                    Instititue Location {item?.instituteLocation}
                  </Typography>
                </Grid>

                <Grid item sm={2}>
                  <IconButton onClick={() => editHandler(i)}>
                    <EditIcon />
                  </IconButton>

                  <IconButton onClick={() => deleteHandeler(i)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>

        <Box>
          <Button variant="outlined" onClick={addHandler}>
            add trainning
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
              label="Course name"
              name="courseName"
              value={form.courseName}
              onChange={(e) => formInputValue("courseName", e.target.value)}
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              label="Duration"
              name="duration"
              value={form.duration}
              onChange={(e) => formInputValue("duration", e.target.value)}
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              label="Instititue Name"
              name="instituteName"
              value={form.instituteName}
              onChange={(e) => formInputValue("instituteName", e.target.value)}
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              label="Instititue Location"
              name="instituteLocation"
              value={form.instituteLocation}
              onChange={(e) =>
                formInputValue("instituteLocation", e.target.value)
              }
            />
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

export default Trainning;
