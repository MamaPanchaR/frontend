import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Contact from "../Contact/Contact";
import CardProd from "../CardProd/CardProd";
import NavBar from "../NavBar/NavBar";
import ListProd from "../ListProd/ListProd";
import CrudProd from '../crudProd';
import Us from '../Us/Us';

import PrivateRoute from "../Auth/PrivateRoute";


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/contact"]} component={Contact} />
                <Route exact path={["/login"]} component={Login} />
                <PrivateRoute exact path="/crudProd" component={CrudProd} />
                <Route exact path={["/contacto"]} component={Contact} />
                <Route exact path={["/us"]} component={Us} />
                <Route exact path={["/"]} component={CardProd} />
                {/*<Route exact path={["*"]} component={Error}/>*/}
            </Switch>
        </Router>
    )
}
