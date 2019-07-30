import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import "./header.styles.scss";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({currentUser, hidden}) => {
  return <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/shop">CONTACTS</Link>
      {currentUser ?
      <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
      <Link to="/signin">SIGN IN</Link>}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
})

export default connect(mapStateToProps, null)(Header);
