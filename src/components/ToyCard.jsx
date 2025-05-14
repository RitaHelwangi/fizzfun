
const ToyCard = ({ toy }) => {
	return (
	  <div className="toy-card">
		<img
		  src={toy.image || 'https://via.placeholder.com/150'} // Fallback for missing image
		  alt={toy.name || 'No name available'} 
		/>
		<h2>{toy.name || 'No name available'}</h2>
		<p>{toy.description || 'No description available'}</p>
		<p className="price">{toy.price || '0.00'} SEK</p>
	  </div>
	);
  };
  
  export default ToyCard;