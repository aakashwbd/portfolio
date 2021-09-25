import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../../stores/actions/authActions";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const hanldeInput = (e) => {
    setRegisterForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // validate();
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    console.log(registerForm);
    validate();
    setOpenAlert(true);
    dispatch(
      register(registerForm, () => {
        history.push("/login");
      })
    );
  };
  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const validate = () => {
    // let err = {};
    // setOpenAlert(true);
    if (!registerForm.username || registerForm.username.length < 6) {
      // err.username = "please fill user name & username min 6 character";
      setOpenAlert(true);
    }
  };
  console.log(openAlert);
  return (
    <Box mt={5}>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Box my={2} textAlign="center">
              <Typography variant="h4">Sign up</Typography>
            </Box>

            <Box my={3}>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="User Name"
                name="username"
                value={registerForm.username}
                onChange={hanldeInput}
              />
              <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleCloseAlert}
                severity="error"
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
              >
                <Alert>please fill user name username min 6 character</Alert>;
              </Snackbar>
            </Box>
            <Box my={3}>
              <TextField
                fullWidth
                type="email"
                size="small"
                variant="outlined"
                placeholder="Email"
                name="email"
                value={registerForm.email}
                onChange={hanldeInput}
              />
            </Box>
            <Box my={3}>
              <TextField
                type="password"
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Password"
                name="password"
                value={registerForm.password}
                onChange={hanldeInput}
              />
            </Box>
            <Box my={3}>
              <TextField
                fullWidth
                type="password"
                size="small"
                variant="outlined"
                placeholder="Confirm Password"
                name="password_confirmation"
                value={registerForm.password_confirmation}
                onChange={hanldeInput}
              />
            </Box>
            <Box my={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="small"
                onClick={registerSubmit}
              >
                sign up
              </Button>
            </Box>

            <Box my={3} textAlign="center">
              <Typography variant="button">
                have an already account? <Link to="/login">Login</Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Signup;
