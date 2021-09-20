import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./layouts/Landing";

import TemplateOne from "./components/Dashborad/Templates/TemplateOne";
import TemplateTwo from "./components/Dashborad/Templates/TemplateTwo";
import TemplateThree from "./components/Dashborad/Templates/TemplateThree";

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

import Profile from "./components/Dashborad/Profile"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMe } from "./stores/actions/authActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />

          <Route path="/dashboard" exact component={Profile} />

          <Route path="/template1" exact component={TemplateOne} />
          <Route path="/template2" exact component={TemplateTwo} />
          <Route path="/template3" exact component={TemplateThree} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
