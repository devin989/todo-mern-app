import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Main from "./components/Main";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Logout from "./components/User/Logout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Toasts from "./components/Notifications/Toasts";

import { isAuthenticatedSelector } from "./app/user-slice";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.scss";

const App = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            {isAuthenticated ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="">
            <PageNotFound />
          </Route>
        </Switch>
        <Toasts />
      </Layout>
    </Router>
  );
};

export default App;
