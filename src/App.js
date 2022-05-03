import React from "react";
import HomePage from "./pages/homepage.component";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shopPage.component";
import Header from "./Components/header/header.component";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
