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
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../../stores/actions/authActions";

// import axios from "axios";
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
    // setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    setRegisterForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    console.log(registerForm);
    // const data = {
    //   name: registerForm.name,
    //   email: registerForm.email,
    //   password: registerForm.password,
    //   password_comfirmaiton: registerForm.password_comfirmaiton,
    // };
    dispatch(
      register(registerForm, () => {
        history.push("/login");
      })
    );

    // axios.post(`http://127.0.0.1:8000/api/auth/register`, register).then((res) => {

    // if (res.data.status === "done") {
    //     // localStorage.setItem("authToken", res.data.data.token);
    //     history.push("/login");
    //   }

    // });
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
