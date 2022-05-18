import { combineReducers } from "redux";
import userReducer from "./reducer/user/userReducer";
import cartReducer from "./reducer/cart/cart.reduce";
export default combineReducers({
  user: userReducer,
  cart:cartReducer,
});






// this is our state obj this will generete our big state
