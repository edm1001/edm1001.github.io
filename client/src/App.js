import React, { useState, useEffect } from "react";
import Header from "./Components/Header.js";
import Home from "./Pages/Home.jsx";
import ProductsPage from "./Pages/ProductsPage.jsx";
import Footer from "./Components/Footer.js";
import FreshPage from "./Pages/FreshwaterPage.jsx";
import SaltPage from "./Pages/SaltwaterPage.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SpeciesDetail from "./Pages/SpeciesDetail.jsx";
import About from "./Pages/About.jsx"; 
import CartPage from "./Pages/CartPage.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart");
      const data = await response.json();
      setCartItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log("Trouble fetching cart items", err);
      setCartItems([]);
    }
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <>
      <Router>
        <Header cartItemsCount={totalQuantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freshpage" element={<FreshPage />} />
          <Route path="/saltpage" element={<SaltPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/species/:name" element={<SpeciesDetail />} />
          <Route path="/cartpage" element ={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
