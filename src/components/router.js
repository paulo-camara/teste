import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Shared/Layout/Layout";

import Home from "../components/Home/Home";
import ListCars from "../components/ListCars/ListCars";
import CarDetail from "../components/CarDetail/CarDetail";

/** Componente de rotas, cada <Route> representa a rota 
 * de sua respectiva tela */
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

      <Route
        path="/detail-car"
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