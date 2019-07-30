import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Shared/Layout/Layout";

import Home from "../components/Home/Home";
import ListCars from "../components/ListCars/ListCars";
import CarDetail from "../components/CarDetail/CarDetail";
import { HOME, LIST, DETAIL_CAR } from "../contants";

/** Componente de rotas, cada <Route> representa a rota 
 * de sua respectiva tela */
const WithRouter = () => (
  <Router>
    <Switch>
      <Route
        path={HOME.path}
        exact
        component={() => (
          <Layout>
            <Home />
          </Layout>
        )}
      />

      <Route
        path={LIST.path}
        exact
        component={() => (
          <Layout>
            <ListCars />
          </Layout>
        )}
      />

      <Route
        path={DETAIL_CAR.path}
        exact
        component={() => (
          <Layout>
            <CarDetail />
          </Layout>
        )}
      />
    </Switch>
  </Router>
);

export default WithRouter;
