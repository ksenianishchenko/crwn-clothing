import React from 'react';
import {Switch, Route} from "react-router";

import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import SignIn from "./components/sign-in/sign-in";

import './App.css';

const App = () => {
  return <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={Shop}/>
      <Route exact path='/signin' component={SignIn}/>
    </Switch>
  </div>;
}

export default App;
