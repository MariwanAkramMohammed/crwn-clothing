import { cartActiontype, ADD_ITME_TYPE } from "./cart.type";
import { AddItemToCart } from "./cart.utils";
const Initial_State = {
  hidden: true,
  CartItems: [],
};
const cartReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case cartActiontype.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITME_TYPE.ADD_ITME:
      return {
        ...state,
        CartItems: AddItemToCart(state.CartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
