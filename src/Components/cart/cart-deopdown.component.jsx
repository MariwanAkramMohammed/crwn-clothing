import React from "react";
import "./cart-deopdown.style.scss";
import CustomButton from "../costum-button/custom-button.component";

const CardDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  </div>
);
export default CardDropdown;