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

import moment from "moment";
// educcation label
const education_label_data = [
  {
    title: "Bachelor (or equivalent)",
  },
  {
    title: "Doctorate (or equivalent)",
  },
  {
    title: "HSC (or O'level)",
  },
  {
    title: "SSC (or A'level)",
  },
  {
    title: "M. Sc. ",
  },
];
const Education = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  // use material ui
  const classes = useStyles();

  //   dialog box open and close
  const [dialogBox, setDialogBox] = useState(false);
  const [addDialogBox, setAddDialogBox] = useState(false);
  const [editStatus, setEditStatus] = useState({
    status: false,
    index: 0,
  });
  const [dialogTitle, setDialogTitle] = useState("Add New Education");

  const handleClickDialogOpen = (index) => {
    setAddDialogBox(true);
    setDialogTitle("Update education experience");

    let education = {};

    currentUser?.profile?.educations.forEach((item, i) => {
      if (i === index) {
        education = item;
      }
    });

    setEditStatus({
      status: true,
      index: index,
    });

    setForm((prevState) => ({
      ...prevState,
      ...education,
    }));
  };
  const handleClickDialogClose = () => {
    setDialogBox(false);
  };
  // education delete
  const handleClickDelete = (index) => {
    let educations = [
      ...currentUser?.profile?.educations?.filter((item, i) => i !== index),
    ];
    // setEducationFrom(educations);

    let formData = {
      educations: educations,
    };
    dispatch(updateProfile(formData));
  };

  // education form
  const [educationForm, setEducationFrom] = useState([]);

  const [form, setForm] = useState({
    educationLabel: null,
    degree: "",
    institute: "",
    startDate: "",
    endDate: "",
  });

  const resetForm = () => {
    setForm((prevState) => ({
      ...prevState,
      educationLabel: null,
      degree: "",
      institute: "",
      startDate: "",
      endDate: "",
    }));
  };

  const educationInputValue = (field, value) => {
    // let educations = [...educationForm];

    // educations.forEach((item, i) => {
    //   if (i === index) {
    //     console.log("Here");
    //     item[field] = value;
    //   }
    // });
    // setEducationFrom(educations);
    setForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // console.log("educationform", educationForm);

  const educationFormSubmit = () => {
    let educations = [...currentUser?.profile?.educations];

    if (editStatus.status) {
      educations = [
        ...educations.filter((item, i) => i !== editStatus.index),
        form,
      ];
    } else {
      educations = [...educations, form];
    }

    let formData = {
      educations: educations,
    };

    dispatch(
      updateProfile(formData, () => {
        setAddDialogBox(false);
        setEditStatus({ status: false, index: 0 });
        resetForm();
      })
    );
  };

  // useEffect(() => {
  //   if (currentUser && currentUser.profile && currentUser.profile.educations) {
  //     setEducationFrom(currentUser.profile.educations || []);
  //   }
  // }, [currentUser]);

  // education lavel
  // const onChangeEducation = (data) => {
  //   setEducationFrom({ ...educationForm, educationLabel: data });
  // };

  // add education
  const addEducation = () => {
    setAddDialogBox(true);
    setDialogTitle("Add New Education");
    // setEducationFrom((prevState) => [
    //   ...prevState,
    //   {
    //     educationLabel: null,
    //     degree: "",
    //     institute: "",
    //     startDate: "",
    //     endDate: "",
    //   },
    // ]);
  };

  const handleClickAddDialogClose = () => {
    setAddDialogBox(false);
  };

  console.log(educationForm);

  return (
    <Box px={1} py={3}>
      {/* Showing information in Card Component */}
      <Container maxWidth="md">
        <Box m={2}>
          <Typography className={classes.portionTitle}>Education</Typography>
        </Box>

        <Box m={2}>
          <Box>
            {currentUser?.profile?.educations?.map((item, i) => (
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
                      {item?.institute}
                    </Typography>
                    <Typography style={{ fontFamily: "Gordita", fontSize: 14 }}>
                      {item?.degree}
                    </Typography>
                    <Typography style={{ fontFamily: "Gordita", fontSize: 14 }}>
                      {item?.educationLabel?.title}
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
              Add Education
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
        <DialogTitle id="dialog-area">
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
            <Autocomplete
              size="small"
              id="educationLabel"
              fullWidth
              // value={educationForm[educationForm.length - 1]?.educationLabel}
              value={form.educationLabel}
              onChange={(e, newValue) =>
                educationInputValue("educationLabel", newValue)
              }
              options={education_label_data}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Label of Education"
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              label="Degree"
              size="small"
              fullWidth
              name="degree"
              // value={educationForm[educationForm.length - 1]?.degree}
              value={form?.degree}
              onChange={(e) => educationInputValue("degree", e.target.value)}
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              label="Institute"
              size="small"
              fullWidth
              name="institute"
              // value={educationForm[educationForm.length - 1]?.institute}
              value={form.institute}
              onChange={(e) => educationInputValue("institute", e.target.value)}
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

export default Education;
