// import Navbar from "../Navbar/Navbar";

import { Link } from "react-router-dom";

const Cart = ({ cartItems, handleCart, handleRemoveProduct }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <>
      {/* <Navbar /> */}
      <div className="mainCart">
        {cartItems.length === 0 && (
          <div className="cartEmpty" data-test="emptyCart">
            <h3>Cart is empty!!</h3>
          </div>
        )}
        <div className="item-container-cart">
          {cartItems.map((item) => (
            <div key={item.id} className="card-cart">
              <img src={item.images} alt={item.title} />
              <br></br>
              <br></br>
              <div className="price-count">
                <h1 className="text">{item.title}</h1>
                <br></br>
                <h3 className="price">{item.price * item.quantity}/-</h3>
                <br></br>
                {/* <h4>₹{item.price * item.quantity}</h4> */}
                <div className="buttonCart">
                  <button
                    className="count-button"
                    data-test="minus"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                  <span> {item.quantity} </span>
                  <button
                    className="count-button"
                    data-test="plus"
                    onClick={() => handleCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* <button className='moveremove-btn' onClick={() => handleMoveWish(item)}>Move to Wishlist</button> */}
              {/* <button className='moveremove-btn' onClick={()=>handleRemovefromCart(item)}>Remove from Cart</button> */}
            </div>
          ))}
        </div>
        <div className="totalPrice">
          {cartItems.length >= 1 && (
            <div className="Payment">
              <div className="priceCart" data-test="total">
                <h3>Total price: </h3>
                <div className="total" data-test="totalPrice">
                  ₹{totalPrice}/-
                </div>
              </div>
              {/* <button className='checkout-btn'>Checkout</button> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
