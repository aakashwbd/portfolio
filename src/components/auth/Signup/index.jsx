import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const history= useHistory()
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const hanldeInput = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    // const data = {
    //   name: register.name,
    //   email: register.email,
    //   password: register.password,
    //   password_comfirmaiton: register.password_comfirmaiton,
    // };

    axios.post(`http://127.0.0.1:8000/api/auth/register`, register).then((res) => {
      
    if (res.data.status === "done") {
        // localStorage.setItem("authToken", res.data.data.token);
        history.push("/login");
      }
   
    });
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
                placeholder="Name"
                name="username"
                value={register.username}
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
                value={register.email}
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
                value={register.password}
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
                value={register.password_confirmation}
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
            {/* <Box my={3} textAlign='center'>
              <Link>Forget Password</Link>
            </Box> */}
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