import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import CardProd from './components/CardProd/CardProd'
import ListProd from './components/ListProd/ListProd';
import CrudProd from './components/crudProd/index'


import AppRouter from './components/Router/Router';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <div className="nav">
          <NavBar />
        </div>
        <div className="content">
          <AppRouter />
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>
  );
}

export default App;
/***
 *           <Switch>
            <Route exact path={["/contact"]} component={Contact} />
            <Route exact path={["/login"]} component={Login} />
            <Route exact path={["/contacto"]} component={Contact} />
            <Route exact path={["/"]} component={CardProd} />
            <Route exact path={["/listaProductos"]} component={ListProd} />

            <Route exact path={["*"]} component={Error}/>

<Route exact path={["/crudProd"]} component={CrudProd} />

          </Switch >

 */