import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../../../stores/actions/authActions";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginSubmit = (e) => {
    const data = {
      email: loginForm.email,
      password: loginForm.password,
    };
    console.log(data);
    dispatch(
      login(data, () => {
        history.push("/dashboard/information");
      })
    );
  };

  return (
    <Box mt={5}>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Box my={2} textAlign="center">
              <Typography variant="h4">Login</Typography>
            </Box>

            <Box my={3}>
              <TextField
                fullWidth
                type="email"
                size="small"
                variant="outlined"
                placeholder="Email"
                name="email"
                onChange={handleInput}
                value={loginForm.email}
              />
            </Box>
            <Box my={3}>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleInput}
                value={loginForm.password}
              />
            </Box>
            <Box my={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="small"
                onClick={loginSubmit}
              >
                login
              </Button>
            </Box>
            <Box my={3} textAlign="center">
              <Link>Forget Password</Link>
            </Box>
            <Box my={3} textAlign="center">
              <Typography variant="button">
                Dont have an account? <Link to="/signup">Singup</Link>{" "}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
