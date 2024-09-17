import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/viewMovies.css'
const ViewMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/movies/all")
      .then((response) => setMovies(response.data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(movies);
  return (
    <div className="movie-container mt-5">
      <h2 className="text-center text-white mb-4">Movies</h2>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.movieId} className="col-md-4 mb-4">
            <div className="card movie-card">
              {/* Optional background image (movie poster) */}
              <img
                src={`https://via.placeholder.com/300x400?text=${movie.title}`}
                className="card-img-top movie-image"
                alt={`${movie.title} poster`}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">{movie.title}</h5>
                <p className="movie-card-text text-muted">{movie.description}</p>
                <p className="movie-card-text"><strong>Genre:</strong> {movie.genre}</p>
                <p className="movie-card-text"><strong>Duration:</strong> {movie.duration} mins</p>
                <p className="movie-card-text"><strong>Rating:</strong> {movie.rating}</p>
                <Link
                  to={`/movies/${movie.movieId}/showtimes`}
                  className="btn btn-info btn-block"
                >
                  View Showtimes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMovies;
