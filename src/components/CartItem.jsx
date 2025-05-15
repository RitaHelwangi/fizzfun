// components/CartItem.jsx
import React from 'react';
import useCartStore from '../data/cartStore';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCartStore();

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) updateQuantity(item.id, value);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-img" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="toy-description">{item.description}</p>
        <p className="toy-category">{item.category}</p>
        <p>{item.price} SEK </p>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleChange}
          className="cart-item-qty"
        />
        <button onClick={() => removeFromCart(item.id)} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
