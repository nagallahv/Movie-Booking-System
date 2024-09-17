import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/manageMovie.css'
const AdminUpdateMovie = () => {
  const movie = JSON.parse(localStorage.getItem("movieToUpdate"));
  const navigate = useNavigate();
  // console.log(movie.title);
  // const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: movie.title,
    description: movie.description,
    genre: movie.genre,
    duration: movie.duration,
    rating: movie.rating,
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

  const handleUpdateMovie = async () => {
    const validateError = validate();
    if (Object.keys(validateError).length !== 0) {
      setErrors(validateError);
      return;
    }
    try {
      await axios.put(
        `http://localhost:8080/api/movies/update/${movie.movieId}`,
        newMovie
      );
      alert("Movie updated");
      navigate("/admin/manageMovies");
    } catch (error) {
      console.log("Error adding movie", error);
    }
  };
  return (
    <div className="container mt-5 manage-movies-container">
      <h2 className="text-center mb-4">Manage Movies</h2>
      <div className="row">
        {/* Add New Movie Form */}
        <div className="add-movie-section">
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
            <input
              type="text"
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
              placeholder="Rating (out of 10)"
              value={newMovie.rating}
              onChange={(e) =>
                setNewMovie({ ...newMovie, rating: e.target.value })
              }
            />
            {errors.rating && (
              <small className="text-danger">{errors.rating}</small>
            )}
          </div>
          <button className="btn btn-success btn-block" onClick={handleUpdateMovie}>
            Update Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateMovie;
