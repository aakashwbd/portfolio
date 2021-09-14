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
import axios from "axios";

const Login = () => {
  const history = useHistory()
  
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    // e.preventDefault();

    const data = {
      email: login.email,
      password: login.password,
    };

    axios.post(`http://127.0.0.1:8000/api/auth/login`, data).then((res) => {
      console.log(res);

      if (res.data.status === "done") {
        localStorage.setItem("authToken", res.data.data.token);
        history.push("/dashboard");
      }
    });
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
                type='email'
                size="small"
                variant="outlined"
                placeholder="Email"
                name="email"
                onChange={handleInput}
                value={login.email}
              />
            </Box>
            <Box my={3}>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Password"
                name="password"
                type='password'
                onChange={handleInput}
                value={login.password}
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
