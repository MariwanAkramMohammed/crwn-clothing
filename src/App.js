import React from "react";
import HomePage from "./pages/homepage.component";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shopPage.component";
import Header from "./Components/header/header.component";
import { auth, db } from "./firebase/firebase";
import { createUserAcount } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-and-sign-up-page.component";
import "./App.css";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current_User: null,
    };
  }
  discription = null;
  componentDidMount() {
    this.discription = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserAcount(userAuth);
        onSnapshot(userRef, (snapObj) => {
          this.setState(
            {
              current_User: {
                id: snapObj.id,
                ...snapObj.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
      else{
        this.setState({current_User:userAuth})
      }
    });
  }
  componentWillUnmount() {
    this.discription = null;
  }
  // docc() {
  //   const col = collection(db, "user");
  //   let man = {
  //     date: null,
  //   };
  //   const dooc = getDocs(col).then((Response) => {
  //     man = Response.docs.map((doc) => ({ date: doc.data() }));
  //     console.log(man);
  //   });
  //   await setDoc(doc(col, "SF"), {
  //     name: "San Francisco", state: "CA", country: "USA",
  //     capital: false, population: 860000,
  //     regions: ["west_coast", "norcal"] });
  // }
  // doc=async ()=>{
  //   const docRef = doc(db, "cities", "SF");
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }

  // }
  render() {
    return (
      <div>
        <Header currentUser={this.state.current_User} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
