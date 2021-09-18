import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./layouts/Landing";

import Information from "./components/Dashborad/Information";
import TemplateOne from "./components/Dashborad/Templates/TemplateOne";
import Dashboard from "./layouts/Dashboard";
import TemplateTwo from "./components/Dashborad/Templates/TemplateTwo";
import TemplateThree from "./components/Dashborad/Templates/TemplateThree";
import Profile from "./components/Dashborad/Profile";
import DashboardHome from "./components/Dashborad/DashboardHome";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

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

          <Route path="/dashboard/information" exact component={Information} />
          <Route path="/dashboardhome" exact component={DashboardHome} />
          {/* <Route path="/information" exact component={Information} /> */}
          {/* <Route path="/profile" exact component={Profile} /> */}

          <Route path="/template1" exact component={TemplateOne} />
          <Route path="/template2" exact component={TemplateTwo} />
          <Route path="/template3" exact component={TemplateThree} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
