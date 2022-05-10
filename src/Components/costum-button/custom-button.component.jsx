import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children,SignInGoogle, ...otherprop }) => (
  <button className={`custom-button ${SignInGoogle?'sign-in-google':''}`} {...otherprop}>
    {children}
  </button>
);
export default CustomButton;
