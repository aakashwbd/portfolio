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
} from "@material-ui/core";

import React, { useEffect, useState } from "react";
import useStyles from "../Styled";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import CloseIcon from "@material-ui/icons/Close";
import { updateProfile } from "../../../../stores/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Role = () => {
  // redux dispatch
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

  // role form data input
  const [roleForm, setRoleForm] = useState({
    role: "",
    salary: "",
  });
  const roleFormValue = (e) => {
    setRoleForm({ ...roleForm, [e.target.name]: e.target.value });
  };

  const roleFormSubmit = () => {
    dispatch(updateProfile(roleForm));
    setDialogBox(false);
  };

  useEffect(() => {
    if (currentUser && currentUser.profile) {
      setRoleForm(currentUser.profile);
    }
  }, [currentUser]);
  return (
    <Box px={1} py={3}>
      {/* Showing information in Card Component */}
      <Container maxWidth="md">
        <Grid container justifyContent="space-between">
          <Grid item sm={6}>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <AssignmentIndIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.availability}>
                  Role and current salary
                </Typography>
              </ListItemText>
            </ListItem>
          </Grid>

          <Grid item sm={5}>
            <Box textAlign="right">
              <ListItem>
                <ListItemText>
                  <Typography
                    className={classes.availability}
                    style={{ textTransform: "capitalize" }}
                  >
                    {/* Web Front-End
                     */}
                    {currentUser?.profile?.role}
                  </Typography>
                  <Typography style={{ fontSize: 14 }}>
                    {/* 1000000/month */}
                    {currentUser?.profile?.salary} BDT/month
                  </Typography>
                </ListItemText>
                <ListItemIcon>
                  <IconButton onClick={handleClickDialogOpen}>
                    <EditIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            </Box>
          </Grid>
        </Grid>
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
                Role and current salary
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
          <Box>
            <Grid
              container
              justifyContent="space-between"
              spacing={2}
              alignItems="center"
            >
              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Preferred role"
                  required
                  name="role"
                  value={roleForm.role}
                  onChange={roleFormValue}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Current Salary"
                  required
                  name="salary"
                  value={roleForm.salary}
                  onChange={roleFormValue}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography>BDT/month</Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialogClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={roleFormSubmit} variant="outlined">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Role;
