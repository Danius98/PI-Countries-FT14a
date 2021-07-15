import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import CountryInfo from "./components/CountryInfo";
import Actividades from "./components/Activity/Actividades"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/Country" component={Home}/>
      <Route path="/Country/:idCountry" component={CountryInfo}/>
      <Route path="/Activity" component={Actividades}/>
    </div>
  );
}

export default App;
