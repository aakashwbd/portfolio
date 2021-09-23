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
import moment from "moment";

const Experience = () => {
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
    companyName: "",
    designation: "",
    startDate: "",
    endDate: "",
  });

  // reset form
  const resetForm = () => {
    setForm((prevState) => ({
      ...prevState,

      companyName: "",
      designation: "",
      startDate: "",
      endDate: "",
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

    let experiences = [];
    if (currentUser && currentUser.profile && currentUser.profile.experiences) {
      experiences = [...currentUser.profile.experiences];
    } else {
      experiences = [];
    }

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
  const [dialogTitle, setDialogTitle] = useState("Add New Experience");

  const editHandler = (index) => {
    setDialogOpen(true);

    setDialogTitle("update Experience");

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

  //   traingins delete
  const deleteHandeler = (index) => {
    let experiences = [
      ...currentUser?.profile?.experiences?.filter((item, i) => i !== index),
    ];

    let formData = {
      experiences: experiences,
    };
    dispatch(updateProfile(formData));
  };

  return (
    <Box px={1} py={3}>
      <Container>
        <Box m={2}>
          <Typography className={classes.portionTitle}>Experience</Typography>
        </Box>

        <Box m={2}>
          <Box>
            {currentUser?.profile?.experiences?.map((item, i) => (
              <Box my={2}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item sm={8} lg={8}>
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
                        textTransform: "capitalize",

                        margin: "3px 0px ",
                      }}
                    >
                      {item?.companyName}
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Gordita",
                        fontSize: 14,
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      {item?.designation}
                    </Typography>
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
            add experience
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
              label="company name"
              name="companyName"
              value={form.companyName}
              onChange={(e) => formInputValue("companyName", e.target.value)}
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              label="designation"
              name="designation"
              value={form.designation}
              onChange={(e) => formInputValue("designation", e.target.value)}
            />
          </Box>
          <Box my={2}>
            <TextField
              type="date"
              variant="outlined"
              fullWidth
              size="small"
              label="start date"
              name="startDate"
              value={form.startDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => formInputValue("startDate", e.target.value)}
            />
          </Box>
          <Box my={2}>
            <TextField
              type="date"
              variant="outlined"
              fullWidth
              size="small"
              label="end date"
              name="endDate"
              InputLabelProps={{
                shrink: true,
              }}
              value={form.endDate}
              onChange={(e) => formInputValue("endDate", e.target.value)}
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

export default Experience;
