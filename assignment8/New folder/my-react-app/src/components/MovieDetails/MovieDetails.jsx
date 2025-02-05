// components/MovieDetails.jsx
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details-container">
      <img 
        src={`/assets/${movie.image}`} 
        alt={movie.title} 
        className="details-poster"
      />
      <div className="details-content">
        <h1>{movie.title}</h1>
        <p className="movie-description">{movie.description}</p>
        <Link to="/book">
          <button className="book-button">Book Seat</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;