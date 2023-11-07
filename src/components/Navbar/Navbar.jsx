import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
const Navbar = ({ cartItems }) => {
  return (
    <div className="navbar">
      <Link to="/" className="home" data-test="home">
        Home
      </Link>
      <div>
        <Link to="/cart" className="cart" data-test="cart">
          <ShoppingCart size={32} />
          <span className="cart-count">
            {cartItems.length === 0 ? "" : `(${cartItems.length})`}
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
