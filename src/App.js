import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import CardProd from './components/CardProd/CardProd'

import AppRouter from './components/Router/Router';

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
