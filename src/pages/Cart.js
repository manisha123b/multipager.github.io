import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../App.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      {/* Title Section */}
      <div className="cart-header">
        <h2 className="cart-title">Your Cart</h2>
        <hr className="cart-divider" />
      </div>

      {/* Check if cart is empty */}
      {cart.length === 0 ? (
        <p className="empty-cart">🛒 Your cart is empty!</p>
      ) : (
        <div className="cart-container">
          <div className="cart-list">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
