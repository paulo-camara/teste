import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "../components/Shared/Layout/Layout";

import Home from "../components/Home/Home";
import ListCars from "../components/ListCars/ListCars";

const WithRouter = () => (
  <Router>
    <Switch>
      <Route
        path="/home"
        exact
        component={() => (
          <Layout>
            <Home />
          </Layout>
        )}
      />

      <Route
        path="/list"
        exact
        component={() => (
          <Layout>
            <ListCars />
          </Layout>
        )}
      />
    </Switch>
  </Router>
);

export default WithRouter;
