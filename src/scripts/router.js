import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../components/Home/Home';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path={"/home"} component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Router;