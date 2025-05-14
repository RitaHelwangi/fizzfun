import React, { useEffect } from 'react';
import useToyStore from '../data/toyStore';
import ToyCard from '../components/ToyCard';

const Home = () => {
	const { toys, fetchToys, loading, error } = useToyStore();
  
	useEffect(() => {
	  fetchToys();
	}, [fetchToys]);
  
	console.log('Fetched toys:', toys);
  
	return (
	  <div className="home-container">
		<h1 className="home-title">Our Summer Toys</h1>
		{loading && <p>Loading toys...</p>}
		{error && <p className="error">{error}</p>}
		<div className="toy-grid">
		  {toys.map(toy => (
			<ToyCard key={toy.id} toy={toy} />
		  ))}
		</div>
	  </div>
	);
  };
  
  export default Home;