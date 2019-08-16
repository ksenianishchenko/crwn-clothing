import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignInPage from './pages/sign-in-page/sign-in-page';
import CheckoutPage from './pages/checkout/checkout';
import {selectCurrentUsers} from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.props;
    return <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() => {
          return currentUser ? (<Redirect to='/' />) : (<SignInPage />)
        }}/>
      </Switch>
    </div>;
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUsers
})

export default connect(
  mapStateToProps,
  null
)(App);
