import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Actividades from "./components/Activity/Actividades"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/Country" component={Home}/>
      <Route path="/Activity" component={Actividades}/>
    </div>
  );
}

export default App;
