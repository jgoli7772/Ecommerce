import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import WomenProduct from "./components/Products/Women";
import MenProduct from "./components/Products/Men";
import Cart from "./components/Cart/Index";
import SmartphonesProduct from "./components/Products/Electronics";
import Navbar from "./components/Navbar/Navbar";
// import Product from "./components/Products/Product";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (!productExist) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    }
  };
  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/electronics"
            element={<SmartphonesProduct handleCart={handleCart} />}
          />
          <Route
            path="/women"
            element={<WomenProduct handleCart={handleCart} />}
          />
          <Route path="/men" element={<MenProduct handleCart={handleCart} />} />

          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleCart={handleCart}
                handleRemoveProduct={handleRemoveProduct}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
