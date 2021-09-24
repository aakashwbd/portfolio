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
    dispatch(
      register(registerForm, () => {
        history.push("/login");
      })
    );
  };
  const validate = () => {
    // let err = {};
    if (!registerForm.username) {
      alert("please fill user name");
    }
    if (!registerForm.email) {
      alert("please fill email");
    }

    if (!registerForm.password) {
      alert("please fill password");
    }
    if (registerForm.password === registerForm.password_confirmation) {
      alert("please fill dose not match");
    }
  };

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
