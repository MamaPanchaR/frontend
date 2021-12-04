import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/navbar/navbar";

import AppRouter from "./components/router/router";

import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Menu />
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
