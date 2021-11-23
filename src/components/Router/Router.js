import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import Contact from "../Contact/Contact";
import CardProd from "../CardProd/CardProd";
import NavBar from "../NavBar/NavBar";
import ListProd from "../ListProd/ListProd";

export default function AppRouter() {
    return (
        <Router>
            <NavBar />

            <Switch>
                <Route exact path={["/", "/contact"]} component={Contact} />
                <Route exact path={["/login"]} component={Login} />
                <Route exact path={["/contact"]} component={Contact} />
                <Route exact path={["/", "cardProductos"]} component={CardProd} />
                <Route exact path={["/", "/productos"]} component={ListProd} />
                {/*<Route exact path={["*"]} component={Error}/>*/}

            </Switch>
        </Router>
    )
}


function Home() {
    return <h2>Home</h2>;
}