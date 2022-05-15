import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase";

const Header = ({ currentUser }) => (
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
        (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
// this state is a root_Reducer or the main state obj which is a root_Reducer  >>>>>>   (state=root_Reducer)

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
