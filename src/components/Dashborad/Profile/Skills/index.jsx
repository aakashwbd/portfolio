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
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  InputAdornment,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Avatar,
} from "@material-ui/core";

import React, { useState } from "react";
import useStyles from "../Styled";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import CloseIcon from "@material-ui/icons/Close";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { Autocomplete } from "@material-ui/lab";
const skills_data = [
  {
    title: "node",
  },
  {
    title: "react",
  },
  {
    title: "php",
  },
  {
    title: "laravel",
  },
];
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

  // handleClickOtherSkill
  // const [otherSkill, setOtherSkill] = useState(false);

  // const handleClickOtherSkill = () => {
  //   setOtherSkill(true)
  // };
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

          <Box mt={2}>
            <Grid container alignItems="center">
              <Grid item sm={2}>
                <Typography
                  style={{ fontFamily: "Gordita", fontWeight: "bold" }}
                >
                  Begineer
                </Typography>
              </Grid>
              <Grid item sm={6}>
                <Chip label="Larvel" />
              </Grid>
            </Grid>
          </Box>
          <Box mt={2}>
            <Grid container alignItems="center">
              <Grid item sm={2}>
                <Typography
                  style={{ fontFamily: "Gordita", fontWeight: "bold" }}
                >
                  Expert
                </Typography>
              </Grid>
              <Grid item sm={6}>
                <Chip label="Larvel" />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* user input data in dialog box */}
      <Dialog
        open={dialogBox}
        onClose={handleClickDialogClose}
        fullWidth
        // style={{maxWidth: '90%', margin: 'auto'}}
        maxWidth="sm"
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
              <Typography
                variant="caption"
                color="textPrimary"
                style={{ fontFamily: "Gordita" }}
              >
                Select All That Apply
              </Typography>
              <Box className={classes.showChipBox} mt={2} mb={3}>
                <Box mr={2}>
                  <Chip
                    size="medium"
                    label="React"
                    clickable
                    className={classes.showChip}
                  />
                </Box>
                <Box mr={2}>
                  <Chip label="Larvel" clickable className={classes.showChip} />
                </Box>
                <Box mr={2}>
                  <Chip
                    label="Node JS"
                    clickable
                    className={classes.showChip}
                  />
                </Box>
                <Box mr={2}>
                  <Chip label="React" clickable className={classes.showChip} />
                </Box>
                <Box mr={2}>
                  <Chip label="React" clickable className={classes.showChip} />
                </Box>
              </Box>
            </Box>
            <Box my={2}>
              <Button
                style={{
                  textTransform: "capitalize",
                  borderRadius: 20,
                  background: "#F5F5F5",
                }}
                // onClick={handleClickOtherSkill}
              >
                other (please specify)
              </Button>
            </Box>
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
                      }}
                    >
                      Skills
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        fontFamily: "Gordita",
                      }}
                    >
                      Years of Professional <br /> Experience
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        fontFamily: "Gordita",
                      }}
                    >
                      Competency
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Autocomplete
                        size="small"
                        fullWidth
                        // onChange={(e, newValue) => {
                        //   onChangeMatialStatus(newValue);
                        // }}
                        options={skills_data}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        type="number"
                        size="small"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>
                      <Autocomplete
                        size="small"
                        fullWidth
                        // onChange={(e, newValue) => {
                        //   onChangeMatialStatus(newValue);
                        // }}
                        options={skills_lavel}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </TableCell>
                    <TableCell className={classes.tblLastRow}>
                      <Box className={classes.tblLastRowData}>
                        <Typography>Required</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Autocomplete
                        size="small"
                        fullWidth
                        // onChange={(e, newValue) => {
                        //   onChangeMatialStatus(newValue);
                        // }}
                        options={skills_data}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        type="number"
                        size="small"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>
                      <Autocomplete
                        size="small"
                        fullWidth
                        // onChange={(e, newValue) => {
                        //   onChangeMatialStatus(newValue);
                        // }}
                        options={skills_lavel}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </TableCell>
                    <TableCell className={classes.tblLastRow}>
                      <Box className={classes.tblLastRowData}>
                        <Typography>Required</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogClose} variant="outlined">
            Cancle
          </Button>
          <Button variant="outlined">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Skills;
