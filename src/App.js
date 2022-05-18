import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { connect } from "react-redux";
import "./App.css";

import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import Header from "./Components/header/header.component";
import { auth } from "./firebase/firebase";
import { createUserAcount } from "./firebase/firebase";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-and-sign-up-page.component";
import { SetcurrentUser } from "./redux/reducer/user/user.action";

class App extends React.Component {
  // every component has its props entire object
  discription = null;

  componentDidMount() {
    const { Setcurrent } = this.props;

    this.discription = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserAcount(userAuth);
        onSnapshot(userRef, (snapObj) => {
          // at this point you will call currentUserfunction which is a dispatch action obj an pass it this user info
          Setcurrent({
            // pass this to below fucntion dispatch
            id: snapObj.id,
            ...snapObj.data(),
          });
        });
      } else {
        Setcurrent(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.discription = null;
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path="/signin" element={<SignInAndSignUpPage />} /> */}
          <Route
            path="/signin"
            element={
              currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  Setcurrent: (user) => dispatch(SetcurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect paramiters would be a property or propery and value of App props obj 
