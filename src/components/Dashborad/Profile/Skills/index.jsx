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
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Avatar,
} from "@material-ui/core";

import React, { useEffect, useState } from "react";
import useStyles from "../Styled";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { Autocomplete } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../../stores/actions/authActions";

const skills_lavel = [
  {
    title: "Begineer",
  },
  {
    title: "Expert",
  },
  {
    title: "Advanced",
  },
];
const Skills = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  // use material ui
  const classes = useStyles();

  //   dialog box open and close
  const [dialogBox, setDialogBox] = useState(false);
  const handleClickDialogOpen = () => {
    setDialogBox(true);
  };
  const handleClickDialogClose = () => {
    setDialogBox(false);
  };

  // skill form
  const [skillForm, setSkillForm] = useState([
    {
      skillName: "",
      year: "",
      competency: "",
    },
  ]);

  useEffect(() => {
    if (currentUser && currentUser.profile && currentUser.profile.skills) {
      setSkillForm(currentUser.profile.skills || []);
    }
  }, [currentUser]);

  // const skillInputValue = (e) => {
  //   setSkillForm({ ...skillForm, [e.target.name]: e.target.value });
  // };

  const skillFormSubmit = () => {
    dispatch(updateProfile({ skills: skillForm }));
    setDialogBox(false);
  };

  const fieldChangeHandler = (field, index, value) => {
    let skills = [...skillForm];

    skills.forEach((item, i) => {
      if (i === index) {
        item[field] = value;
      }
    });

    setSkillForm((prevState) => skills);
  };

  const deleteSkillItem = (index) => {
    let skills = [...skillForm.filter((item, i) => i !== index)];

    console.log(skills);
    setSkillForm(skills);
  };

  useEffect(() => {
    if (skillForm && skillForm.length) {
      let skillLength = skillForm.length;

      let skill = {
        skillName: "",
        year: "",
        competency: "",
      };

      let status = false;

      if (
        skillForm[skillLength - 1]["skillName"] !== "" &&
        skillForm[skillLength - 1]["year"] !== "" &&
        skillForm[skillLength - 1]["competency"] !== ""
      ) {
        status = true;
      }

      // Object.keys(skillForm[skillLength - 1]).forEach((key) => {
      //     console.log(skillForm[skillLength - 1][key])
      //     status = skillForm[skillLength - 1][key] !== "";
      // });

      if (status) {
        setSkillForm((prevState) => [...prevState, skill]);
      }
    }
  }, [skillForm]);

  console.log(skillForm);
  // useEffect(() => {
  //   if ( skillForm && skillForm) {

  //   }
  // }, [skillForm]);
  return (
    <Box px={1} py={3}>
      {/* Showing information in Card Component */}
      <Container maxWidth="md">
        <Box m={2}>
          <Grid container justifyContent="space-between">
            <Grid item sm={4}>
              <Typography className={classes.portionTitle}>Skills</Typography>
            </Grid>
            <Grid item sm={4}>
              <Box textAlign="right">
                <IconButton onClick={handleClickDialogOpen}>
                  <EditIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          {skillForm &&
            skillForm.map((item, i) => (
              <>
                <Box mt={2}>
                  <Grid container alignItems="center">
                    <Grid item sm={2} key={i}>
                      <Typography
                        style={{
                          fontFamily: "Gordita",
                          fontWeight: "bold",
                        }}
                      >
                        {item?.competency?.title}
                      </Typography>
                    </Grid>
                    <Grid item sm={6}>
                      <Typography>{item?.skillName}</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </>
            ))}
        </Box>
      </Container>

      {/* user input data in dialog box */}
      <Dialog
        open={dialogBox}
        onClose={handleClickDialogClose}
        fullWidth
        // style={{maxWidth: '90%', margin: 'auto'}}
        maxWidth="md"
        aria-labelledby="dialog-area"
      >
        <DialogTitle id="dialog-area">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sm={8}>
              <Typography className={classes.dialogTitle}>Skills</Typography>
            </Grid>
            <Grid item sm={2}>
              <Box textAlign="right">
                <IconButton onClick={handleClickDialogClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box>
            <Box>
              <Typography style={{ fontFamily: "Gordita", fontSize: 14 }}>
                Add your skills, years of experience and how competent you are
                with each of them.
              </Typography>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        fontFamily: "Gordita",
                        width: 200,
                      }}
                    >
                      Skills
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        fontFamily: "Gordita",
                        width: 200,
                      }}
                    >
                      Years of Professional <br /> Experience
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        fontFamily: "Gordita",
                        width: 300,
                      }}
                    >
                      Competency
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        fontFamily: "Gordita",
                      }}
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {skillForm.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell style={{ width: 200 }}>
                        <TextField
                          variant="outlined"
                          size="small"
                          name="skillName"
                          required
                          value={item.skillName}
                          onChange={(e) =>
                            fieldChangeHandler("skillName", i, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell style={{ width: 200 }}>
                        <TextField
                          fullWidth
                          required
                          type="number"
                          size="small"
                          variant="outlined"
                          name="year"
                          value={item.year}
                          onChange={(e) =>
                            fieldChangeHandler("year", i, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Autocomplete
                          size="small"
                          fullWidth
                          required
                          value={item.competency}
                          options={skills_lavel}
                          onChange={(e, data) =>
                            fieldChangeHandler("competency", i, data)
                          }
                          getOptionLabel={(option) => option.title}
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        {i ? (
                          <IconButton onClick={() => deleteSkillItem(i)}>
                            <CloseIcon />
                          </IconButton>
                        ) : null}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogClose} variant="outlined">
            Cancel
          </Button>
          <Button variant="outlined" onClick={skillFormSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Skills;
