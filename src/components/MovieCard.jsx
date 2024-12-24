// src/components/MovieCard.jsx
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  // Fallback image URL
  const placeholderImage = 'https://via.placeholder.com/200x300?text=No+Image';

  // If movie.image is missing, use a placeholder or generate an image based on title
  const imageUrl = movie.image ? movie.image : placeholderImage;

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.movie} />
      <h3>{movie.movie}</h3>
      <p>Rating: {movie.rating}</p>
      <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
        View on IMDb
      </a>
    </div>
  );
};

// Prop validation for the "movie" prop
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    movie: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string, // Optional image
    imdb_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
