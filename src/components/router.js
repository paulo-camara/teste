import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "../components/Shared/Layout/Layout";
import { Home } from "../components/Home/Home";

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
    </Switch>
  </Router>
);

export default WithRouter;
