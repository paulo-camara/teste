import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../components/Shared/Layout/Layout";
import { Home } from "../components/Home/Home";

const Router = () => (
  <Layout>
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/teste"} component={() => <h1>oi</h1>} />
    </Switch>
  </Layout>
);

export default Router;
