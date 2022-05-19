import { ADD_ITME_TYPE, cartActiontype } from "./cart.type";

export const cartActionToggle = () => ({
  type: cartActiontype.TOGGLE_CART_HIDDEN,
});
export const Add_item = (item) => ({
  type: ADD_ITME_TYPE.ADD_ITME,
  payload: item,
});
