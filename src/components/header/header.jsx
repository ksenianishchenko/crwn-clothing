import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from './header.styles';

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUsers} from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) => {
  return <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACTS</OptionLink>
      {currentUser ?
      <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> :
      <OptionLink to="/signin">SIGN IN</OptionLink>}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUsers,
  hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header);
