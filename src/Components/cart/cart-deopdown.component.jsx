import React from "react";
import { connect } from "react-redux";
import "./cart-deopdown.style.scss";

import CartItem from "../cartItem/cartItem.component";
import CustomButton from "../costum-button/custom-button.component";

const CardDropdown = ({ cartItem }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItem.map((eachItem) => (
        <CartItem item={eachItem} />
      ))}
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  </div>
);
const matStateToProps = (state) => ({
  cartItem: state.cart.CartItems,
});
export default connect(matStateToProps)(CardDropdown);
