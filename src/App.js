import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import SugarsPDP from './components/SugarsPDP';
import AirbnbPDP from './components/AirbnbPDP';
import MajorsPDP from './components/MajorsPDP';
import Play from './components/Play';

function App() {
  console.log("changing the switch")
  return (
    <Router>
      <NavBar/>
      <div className="App">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work" render={About}>
            <About />
          </Route>
          <Route path="/play" render={Play}>
            <Play />
          </Route>
          <Route path="/sugars" render={SugarsPDP}>
            <SugarsPDP />
          </Route>
          <Route path="/airbnb" render={AirbnbPDP}>
            <AirbnbPDP />
          </Route>
          <Route path="/majors" render={MajorsPDP}>
            <MajorsPDP />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  </Router>
  );
}

export default App;
