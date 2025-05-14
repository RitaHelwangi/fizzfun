// data/cartStore.js
import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (item) => {
    const cart = get().cart;
    const exists = cart.find((i) => i.id === item.id);
    if (exists) {
      set({
        cart: cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ cart: [...cart, { ...item, quantity: 1 }] });
    }
  },
  updateQuantity: (id, quantity) => {
    set({
      cart: get().cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    });
  },
  removeFromCart: (id) => {
    set({ cart: get().cart.filter((item) => item.id !== id) });
  },
  clearCart: () => set({ cart: [] }),
}));
export default useCartStore;
