import React from "react";
import "./check.style.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../Components/checkout-item/checkout-item.componenet";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/reducer/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const ChechPage = ({ totalPrice, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-block">
        <span>product</span>
      </div>
      <div className="checkout-block">
        <span>discription</span>
      </div>
      <div className="checkout-block">
        <span>Quantity</span>
      </div>
      <div className="checkout-block">
        <span>price</span>
      </div>
      <div className="checkout-block">
        <span>remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">${totalPrice}</div>
  </div>
);
// ceateStructuredSelector will automaticly gives state to our selectors
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice,
});
export default connect(mapStateToProps)(ChechPage);
