import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage";
import {Switch, Route} from "react-router";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

const App = () => {
  return <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/hats' component={HatsPage}/>
  </Switch>;
}

export default App;
