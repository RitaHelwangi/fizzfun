import React from 'react';
import useCartStore from '../data/cartStore';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, clearCart, handleCheckout } = useCartStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty </p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3>Total: {total} kr</h3>
          <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
		  <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
