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

import React, { useState } from "react";
import useStyles from "../Styled";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CloseIcon from "@material-ui/icons/Close";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const Role = () => {
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
  return (
    <Box px={1} py={3}>
      {/* Showing information in Card Component */}
      <Container maxWidth="md">
        <Grid container justifyContent="space-between">
          <Grid item sm={6}>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <AssignmentIndIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText >
                <Typography className={classes.availability}>Role and current salary</Typography>
              </ListItemText>
            </ListItem>
          </Grid>

          <Grid item sm={5}>
            <Box textAlign="right">
              <ListItem>
                <ListItemText
                 
                >
                  <Typography className={classes.availability}>Web Front-End</Typography>
                  <Typography style={{fontSize: 14}}>1000000/month</Typography>
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
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Current Salary"
                  required
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
            Cancle
          </Button>
          <Button variant="outlined">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Role;
