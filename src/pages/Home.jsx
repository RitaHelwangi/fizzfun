import React, { useEffect } from 'react';
import useToyStore from '../data/toyStore';
import ToyCard from '../components/ToyCard';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const { toys, fetchToys, loading, error } = useToyStore();

  useEffect(() => {
    fetchToys();
  }, [fetchToys]);

  return (
    <div className="home-container">
		
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Play More This Summer!</h2>
          <Link to="/shop">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </section>

      <section className="bestsellers">
        <h2 className="section-title">Bestsellers</h2>
        {loading && <p>Loading toys...</p>}
        {error && <p className="error">{error}</p>}

        <div className="toy-grid">
          {toys.slice(0, 3).map((toy) => (
            <ToyCard key={toy.id} toy={toy} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
