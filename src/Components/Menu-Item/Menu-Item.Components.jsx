import React from "react";
import "./Menu-Item.style.scss";
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div 
    className='backgroundImg'
      style={{
        backgroundImage: `URL(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem;