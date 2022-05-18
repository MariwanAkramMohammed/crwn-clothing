import React from "react";
import {connect} from "react-redux";
import "./cart_items.style.scss";
import cartActionToggle from "../../redux/reducer/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ TOGGLEHIDDEN }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={TOGGLEHIDDEN} />
    <span className="item-count">0</span>
  </div>
);
const mapDispatchToProps = (dipatch) => ({
  TOGGLEHIDDEN:()=> {
    dipatch(cartActionToggle());
  },
});
export default connect(null, mapDispatchToProps)(CartIcon);
