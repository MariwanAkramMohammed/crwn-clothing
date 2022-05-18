import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.style.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase";
import CartIcon from "../carticon/cart_items.component";
import CartDropdwon from "../cart/cart-deopdown.component";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        // console.log(currentUser,'==================')
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdwon />}
  </div>
);
// this state is a root_Reducer or the main state obj which is a root_Reducer  >>>>>>   (state=root_Reducer)
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
