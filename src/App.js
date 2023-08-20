import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Hero from "./pages/hero/Hero";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import React from "react";

function App() {
  return (
    <div className="bg-[#020617] px-4 pb-8">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
