import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Layout from "../components/Shared/Layout/Layout";

import Home from "../components/Home/Home";
import ListCars from "../components/ListCars/ListCars";
import CarDetail from "../components/CarDetail/CarDetail";
import NotFound from "../components/Shared/NotFound/NotFound";
import { HOME, LIST_CAR, DETAIL_CAR, SAVE_CAR } from "../contants";
import CreateCar from "./CreateCar/CreateCar";

/** Componente de rotas, cada <Route> representa a rota
 * de sua respectiva tela */
const WithRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to={HOME.path} />
      </Route>
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
        path={LIST_CAR.path}
        exact
        component={() => (
          <Layout>
            <ListCars />
          </Layout>
        )}
      />
      <Route
        path={SAVE_CAR.path}
        exact
        component={() => (
          <Layout>
            <CreateCar/>
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
      <Route component={() => <NotFound />} />
    </Switch>
  </Router>
);

export default WithRouter;
