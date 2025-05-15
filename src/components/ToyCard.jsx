import '../styles/Home.css';

const ToyCard = ({ toy, addToCart }) => {
	return (
	  <div className="toy-card">
		<img src={toy.image || 'https://via.placeholder.com/150'} // Fallback for missing image
		  alt={toy.name || 'No name available'} className="toy-image"
		/>
      <h3 className="toy-name">{toy.name}</h3>
	  <p className="toy-description">{toy.description}</p>
	  <p className="toy-category">{toy.category}</p>
      <p className="toy-price">{toy.price} SEK</p>
      <button className="add-to-bag-btn" onClick={() => addToCart && addToCart(toy)}>
		Add To Bag</button>
	  </div>
	);
  };
  
  export default ToyCard;