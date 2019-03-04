import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Produtos from "./pages/produtos";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/produtos/:id" component={Produtos} />
        </Switch>
    </BrowserRouter>
);

export default Routes;