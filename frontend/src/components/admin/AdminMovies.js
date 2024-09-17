import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/adminMovies.css'
const AdminMovies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    genre: "",
    duration: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});
  function validate() {
    const errors = {};
    if(!newMovie.title.trim()) errors.title = "*Title is required";
    if(!newMovie.description.trim()) errors.description = "*Description is required";
    if(!newMovie.genre.trim()) errors.genre = "*Genre is required";
    if(!newMovie.duration) errors.duration = "*Duration is required";
    if(!newMovie.rating) errors.rating = "*Rating is required";
    return errors;
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/movies/all");
      setMovies(response.data);
    } catch (error) {
      console.log("Error fetching movies", error);
    }
  };
  const handleAddMovie = async () => {
    const validateErrors = validate();
    if (Object.keys(validateErrors).length !== 0) {
      setErrors(validateErrors);
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/movies/add", newMovie);
      fetchMovies();
    } catch (error) {
      console.log("Error adding movie", error);
    }
  };
  const handleAdminUpdateMovie = (movie) => {
    localStorage.setItem("movieToUpdate", JSON.stringify(movie));
  };
  const handleDeleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/movies/delete/${id}`);
      fetchMovies();
    } catch (error) {
      console.error("Error deleting movie", error);
    }
  };
  return (
    <div className="container mt-5 manage-movies-container">
      <h2 className="text-center mb-4">Manage Movies</h2>
      <div className="row">
        {/* Add New Movie Form */}
        <div className="col-md-6 add-movie-section">
          <h3 className="mb-3">Add New Movie</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={newMovie.title}
              onChange={(e) =>
                setNewMovie({ ...newMovie, title: e.target.value })
              }
            />
            {errors.title && (
              <small className="text-danger">{errors.title}</small>
            )}
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Description"
              value={newMovie.description}
              onChange={(e) =>
                setNewMovie({ ...newMovie, description: e.target.value })
              }
            />
            {errors.description && (
              <small className="text-danger">{errors.description}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Genre"
              value={newMovie.genre}
              onChange={(e) =>
                setNewMovie({ ...newMovie, genre: e.target.value })
              }
            />
            {errors.genre && (
              <small className="text-danger">{errors.genre}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Duration (in mins)"
              value={newMovie.duration}
              onChange={(e) =>
                setNewMovie({ ...newMovie, duration: e.target.value })
              }
            />
            {errors.duration && (
              <small className="text-danger">{errors.duration}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Rating"
              value={newMovie.rating}
              onChange={(e) =>
                setNewMovie({ ...newMovie, rating: e.target.value })
              }
            />
            {errors.rating && (
              <small className="text-danger">{errors.rating}</small>
            )}
          </div>
          <button className="btn btn-success btn-block mt-3" onClick={handleAddMovie}>
            Add Movie
          </button>
        </div>

        {/* Movie List Section */}
        <div className="col-md-6 movie-list-section">
          <h3 className="mb-3">Movie List</h3>
          <ul className="list-group">
            {movies.map((movie) => (
              <li className="movie-list-group-item mb-3" key={movie.movieId}>
                <h5>{movie.title}</h5>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Description:</strong> {movie.description}</p>
                <p><strong>Duration:</strong> {movie.duration} mins</p>
                <p><strong>Rating:</strong> {movie.rating}/10</p>
                <div className="movie-actions">
                  <Link
                    to={`/admin/updateMovie/${movie.movieId}`}
                    className="btn btn-dark mr-2"
                    onClick={() => handleAdminUpdateMovie(movie)}
                  >
                    Update Movie
                  </Link>
                  <Link
                    to={`/admin/movies/${movie.movieId}/showtimes`}
                    className="btn btn-info mr-2"
                  >
                    View Showtimes
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteMovie(movie.movieId)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminMovies;
