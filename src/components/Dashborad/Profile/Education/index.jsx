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
// educcation label
const education_label = [
  {
    title: "Bachelor (or equivalent)",
  },
  {
    title: "Doctorate (or equivalent)",
  },
];
const Education = () => {
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
  // education delete
  const handleClickDelete = () => {};
  return (
    <Box px={1} py={3}>
      {/* Showing information in Card Component */}
      <Container maxWidth="md">
        <Box m={2}>
          <Typography className={classes.portionTitle}>Education</Typography>
        </Box>

        <Box m={2}>
          <Grid container justifyContent="space-between">
            <Grid item sm={8}>
              <Box>
                <Typography style={{fontFamily: 'Gordita', fontSize: 12}}>February 2015 - November 2019</Typography>
                <Typography style={{fontFamily: 'Gordita', fontSize: 16, fontWeight: 'bold'}}>
                  Bangladesh Institute of Science and Technology
                </Typography>
                <Typography style={{fontFamily: 'Gordita', fontSize: 14}}>Computer Science and Engineering</Typography>
              </Box>
              <Box mt={2}>
                <Button variant="outlined">Add Education</Button>
              </Box>
            </Grid>
            <Grid item sm={2}>
              <Box textAlign="right">
                <IconButton onClick={handleClickDialogOpen}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={handleClickDelete}>
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* user input data in dialog box */}
      <Dialog
        open={dialogBox}
        onClose={handleClickDialogClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="dialog-area"
      >
        <DialogTitle id="dialog-area">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sm={8}>
              <Typography className={classes.dialogTitle}>
                Update education experience
              </Typography>
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
          <Box my={2}>
            <Autocomplete
              size="small"
              id="education_label"
              fullWidth
              options={education_label}
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
            />
          </Box>
          <Box my={2}>
            <TextField
              variant="outlined"
              label="College"
              size="small"
              fullWidth
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
                />
              </Grid>
            </Grid>
          </Box>

          {/* <Box mt={2}>
                
          </Box> */}
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

export default Education;
