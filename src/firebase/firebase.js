import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Config = {
  apiKey: "AIzaSyBXAoYf22tI3_XbvO3wB8BzKIhjc1jABrQ",
  authDomain: "my-project-web-5e179.firebaseapp.com",
  databaseURL: "https://my-project-web-5e179-default-rtdb.firebaseio.com",
  projectId: "my-project-web-5e179",
  storageBucket: "my-project-web-5e179.appspot.com",
  messagingSenderId: "904678550928",
  appId: "1:904678550928:web:3f82c6c1b31b8ae94a1715",
  measurementId: "G-MGC93SP2FM",
};

const App = initializeApp(Config);
const Provider = new GoogleAuthProvider();
export const auth = getAuth();
const HandelSign = () => {
  signInWithPopup(auth, Provider);
};
export const db = getFirestore(App);
// console.log(`this is your error`);
export const createUserAcount = async (userAuth, additionData) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", `${userAuth.uid}`);
  const SnapShot = await getDoc(userRef);
  if (!SnapShot.exists()) {
    const { displayName: name, email } = userAuth;
    const current_Data = new Date();
    try {
      await setDoc(userRef, {
        name,
        email,
        current_Data,
        ...additionData
      });
    } catch (error) {
      console.log(`this is your error`, error.message);
    }
  }
  return userRef;
};



export default HandelSign;
