import React, { useEffect, useState } from 'react';
import useToyStore from '../data/toyStore';
import useCartStore from '../data/cartStore';
import '../styles/Shop.css';

const Shop = () => {
  const { toys, fetchToys } = useToyStore();
  const { addToCart } = useCartStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchToys().then(() => setLoading(false));
  }, [fetchToys]);

  if (loading) return <p>Loading toys...</p>;

  return (
    <div className="shop">
      <h2>Shop</h2>
      <div className="toy-grid">
        {toys.map((toy) => (
          <div key={toy.id} className="toy-card">
            <img src={toy.image} alt={toy.name} className="toy-img" />
            <h3>{toy.name}</h3>
			<p className="toy-description">{toy.description}</p>
			<p className="toy-category">{toy.category}</p>
            <p>{toy.price} SEK </p>
            <button onClick={() => addToCart(toy)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
