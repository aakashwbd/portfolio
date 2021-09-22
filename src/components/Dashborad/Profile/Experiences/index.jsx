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
import useStyles from "../Styled";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Autocomplete } from "@material-ui/lab";
import { updateProfile } from "../../../../stores/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";

const Experiences = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  // use material ui
  const classes = useStyles();

  const [addDialogBox, setAddDialogBox] = useState(false);

  const [editStatus, setEditStatus] = useState({
    status: false,
    index: 0,
  });

  const [dialogTitle, setDialogTitle] = useState("Add New Experience");

  const handleClickDialogOpen = (index) => {
    setAddDialogBox(true);
    setDialogTitle("Update Experience");

    let experience = {};

    currentUser?.profile?.experiences.forEach((item, i) => {
      if (i === index) {
        experience = item;
      }
    });

    setEditStatus({
      status: true,
      index: index,
    });

    setForm((prevState) => ({
      ...prevState,
      ...experience,
    }));
  };
  // education delete
  const handleClickDelete = (index) => {
    let experiences = [
      ...currentUser?.profile?.experiences?.filter((item, i) => i !== index),
    ];
    // setEducationFrom(experiences);

    let formData = {
      experiences: experiences,
    };
    dispatch(updateProfile(formData));
  };

  // education form

  const [form, setForm] = useState({
    companyName: "",
    role: "",
    startDate: "",
    endDate: "",
  });

  const resetForm = () => {
    setForm((prevState) => ({
      ...prevState,

      companyName: "",
      role: "",
      startDate: "",
      endDate: "",
    }));
  };

  const educationInputValue = (field, value) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const educationFormSubmit = () => {
    let experiences = [...currentUser?.profile?.experiences];

    if (editStatus.status) {
      experiences = [
        ...experiences.filter((item, i) => i !== editStatus.index),
        form,
      ];
    } else {
      experiences = [...experiences, form];
    }

    let formData = {
      experiences: experiences,
    };

    dispatch(
      updateProfile(formData, () => {
        setAddDialogBox(false);
        setEditStatus({ status: false, index: 0 });
        resetForm();
      })
    );
  };

  // add experience
  const addEducation = () => {
    setAddDialogBox(true);
    setDialogTitle("Add New Experience");
  };

  const handleClickAddDialogClose = () => {
    setAddDialogBox(false);
  };

  console.log("form", form);
  console.log("exp", currentUser?.profile?.experiences);

  return (
    <Box px={1} py={3}>
      {/* Showing information in Card Component */}
      <Container maxWidth="md">
        <Box m={2}>
          <Typography className={classes.portionTitle}>Experience</Typography>
        </Box>

        <Box m={2}>
          <Box>
            {currentUser?.profile?.experiences?.map((item, i) => (
              <Box mb={1}>
                <Grid container key={i}>
                  <Grid item xs={12} sm={8} lg={8}>
                    {item?.startDate && (
                      <Typography
                        style={{ fontFamily: "Gordita", fontSize: 12 }}
                      >
                        {moment(item?.startDate).format("MMM YYYY")}-{" "}
                        {moment(item?.endDate).format("MMM YYYY")}
                      </Typography>
                    )}
                    <Typography
                      style={{
                        fontFamily: "Gordita",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {item?.companyName}
                    </Typography>
                    <Typography style={{ fontFamily: "Gordita", fontSize: 14 }}>
                      {item?.role}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8} lg={4}>
                    <Box textAlign="right">
                      <IconButton onClick={() => handleClickDialogOpen(i)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton onClick={() => handleClickDelete(i)}>
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
          <Box mt={2}>
            <Button variant="outlined" onClick={addEducation}>
              Add Experince
            </Button>
          </Box>
        </Box>
      </Container>

      {/* user input data in dialog box */}
      <Dialog
        open={addDialogBox}
        onClose={handleClickAddDialogClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="dialog-area"
      >
        <DialogTitle>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sm={8}>
              <Typography className={classes.dialogTitle}>
                {dialogTitle}
              </Typography>
            </Grid>
            <Grid item sm={2}>
              <Box textAlign="right">
                <IconButton onClick={handleClickAddDialogClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box my={2}>
            <TextField
              variant="outlined"
              label="Company Name"
              size="small"
              fullWidth
              name="companyName"
              // value={educationForm[educationForm.length - 1]?.degree}
              value={form?.companyName}
              onChange={(e) =>
                educationInputValue("companyName", e.target.value)
              }
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              label="Role"
              size="small"
              fullWidth
              name="role"
              // value={educationForm[educationForm.length - 1]?.institute}
              value={form.role}
              onChange={(e) => educationInputValue("role", e.target.value)}
            />
          </Box>
          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  variant="outlined"
                  type="date"
                  fullWidth
                  label="Start Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="startDate"
                  // value={educationForm[educationForm.length - 1]?.startDate}
                  value={form.startDate}
                  onChange={(e) =>
                    educationInputValue("startDate", e.target.value)
                  }
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  size="small"
                  variant="outlined"
                  type="date"
                  fullWidth
                  label="End Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="endDate"
                  // value={educationForm[educationForm.length - 1]?.endDate}
                  value={form.endDate}
                  onChange={(e) =>
                    educationInputValue("endDate", e.target.value)
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickAddDialogClose} variant="outlined">
            Cancel
          </Button>
          <Button variant="outlined" onClick={educationFormSubmit}>
            {editStatus.status ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Experiences;
