import React from "react";
import { connect } from "react-redux";
import "./cart_items.style.scss";
import { cartActionToggle } from "../../redux/reducer/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ TOGGLEHIDDEN, CartItems }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={TOGGLEHIDDEN} />
    <span className="item-count">{CartItems}</span>
  </div>
);
const mapDispatchToProps = (dipatch) => ({
  TOGGLEHIDDEN: () => {
    dipatch(cartActionToggle());
  },
});
const matStateToProps = ({ cart: { CartItems } }) => ({
  CartItems: CartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  ),
});
export default connect(matStateToProps, mapDispatchToProps)(CartIcon);
