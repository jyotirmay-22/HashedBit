// components/MovieList.jsx
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-container">
      <h1>Now Showing</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img 
                src={`/assets/${movie.image}`} 
                alt={movie.title} 
                className="movie-poster"
              />
              <h3 className="movie-title">{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;