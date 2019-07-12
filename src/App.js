import React from 'react';
import {Switch, Route} from "react-router";

import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";

import './App.css';

const App = () => {
  return <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/shop' component={Shop}/>
  </Switch>;
}

export default App;
