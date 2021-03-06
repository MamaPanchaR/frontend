import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../auth/privateroute';

import login from '../login/login';
import CrudSimple from '../crudSimple';
import Home from '../pages/home/home';

import Us from '../pages/Us/Us';
import Contact from '../pages/Contacto/Contact';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/']} component={Home} />
        <Route exact path={["/contact"]} component={Contact} />
        <Route exact path={["/us"]} component={Us} />
        <Route exact path={['/login']} component={login} />
        <PrivateRoute exact path="/crudSimple" component={CrudSimple} />
        
        <Route
          path={'*'}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Pagina no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
