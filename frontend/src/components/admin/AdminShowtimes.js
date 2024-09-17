import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/manageShowtimes.css";
import { useNavigate } from "react-router-dom";
const AdminShowtimes = () => {
  const [showtimes, setShowtimes] = useState([]);
  const [newShowtime, setNewShowtime] = useState({
    movieId: "",
    theaterId: "",
    showDate: "",
    showTime: "",
  });

  //Validations
  const [errors, setErrors] = useState({});
  function validate() {
    const errors = {};
    if(!newShowtime.movieId) errors.movieId = "*Movie ID is required";
    if(!newShowtime.theaterId) errors.theaterId = "*Theater ID is required";
    if(!newShowtime.showDate) errors.showDate = "*Show Date is required";
    if(!newShowtime.showTime) errors.showTime = "*ShowTime is required";
    return errors;
  }
  //To add available movies
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/movies/all");
      setMovies(response.data);
    } catch (error) {
      console.log("Error fetching movies", error);
    }
  };

  //To add available theaters
  const [theaters, setTheaters] = useState([]);
  const fetchTheaters = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/theaters/all"
      );
      setTheaters(response.data);
    } catch (error) {
      console.error("Error fetching theaters", error);
    }
  };
  useEffect(() => {
    fetchShowtimes();
    fetchMovies();
    fetchTheaters();
  }, []);

  const fetchShowtimes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/showtimes/all"
      );
      setShowtimes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching showtimes", error);
    }
  };

  const handleAddShowtime = async () => {
    const validateErrors = validate();
    if (Object.keys(validateErrors).length !== 0) {
      setErrors(validateErrors);
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/showtimes/add", newShowtime);
      fetchShowtimes();
    } catch (error) {
      console.error("Error adding showtime", error);
    }
  };
  const navigate = useNavigate();
  const handleUpdateShowtime = async (showtime) => {
    const id = showtime.showtimeId;
    navigate(`/admin/update/showtime/${id}`)
    localStorage.setItem("showtimeToUpdate", JSON.stringify(showtime));
  }
  const handleDeleteShowtime = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/showtimes/delete/${id}`);
      fetchShowtimes();
    } catch (error) {
      console.error("Error deleting showtime", error);
    }
  };

  return (
    <div className="container mt-5 manage-showtimes-container">
      <h2 className="text-center mb-4">Manage Showtimes</h2>
      <div className="row">
        {/* Add New Showtime Section */}
        <div className="col-md-6 add-showtime-section">
          <h3 className="mb-3">Add New Showtime</h3>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Movie ID"
              value={newShowtime.movieId}
              onChange={(e) =>
                setNewShowtime({ ...newShowtime, movieId: e.target.value })
              }
            />
            {errors.movieId && (
              <small className="text-danger">{errors.movieId}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Theater ID"
              value={newShowtime.theaterId}
              onChange={(e) =>
                setNewShowtime({ ...newShowtime, theaterId: e.target.value })
              }
            />
            {errors.theaterId && (
              <small className="text-danger">{errors.theaterId}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              value={newShowtime.showDate}
              onChange={(e) =>
                setNewShowtime({ ...newShowtime, showDate: e.target.value })
              }
            />
            {errors.showDate && (
              <small className="text-danger">{errors.showDate}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="time"
              className="form-control"
              value={newShowtime.showTime}
              onChange={(e) =>
                setNewShowtime({ ...newShowtime, showTime: e.target.value })
              }
            />
            {errors.showTime && (
              <small className="text-danger">{errors.showTime}</small>
            )}
          </div>
          <button
            className="btn btn-success btn-block"
            onClick={handleAddShowtime}
          >
            Add Showtime
          </button>
        </div>

        {/* Showtime List Section */}
        <div className="col-md-6 showtime-list-section">
          <h3 className="mb-3">Showtime List</h3>
          <ul className="list-group">
            {showtimes.map((showtime) => (
              <li
                key={showtime.showtimeId}
                className="showtime-list-group-item"
              >
                <div>
                  <strong>Movie:</strong> {showtime.movie.title},
                  <strong> Theater:</strong> {showtime.theater.name},
                  <strong> Location:</strong> {showtime.theater.location},
                  <strong> Date:</strong> {showtime.showDate},
                  <strong> Time:</strong> {showtime.showTime}
                </div>
                <button className="btn btn-secondary btn-sm mt-2 me-2" onClick={() => handleUpdateShowtime(showtime)} >Update</button>
                <button
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() => handleDeleteShowtime(showtime.showtimeId)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h2>Available Movies</h2>
          <ul className="list-group">
            {movies.map((movie) => (
              <li className="movie-list-group-item mb-3" key={movie.movieId}>
                <h5>
                  {movie.title}(ID: {movie.movieId})
                </h5>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Available Theaters</h2>
          <ul className="list-group">
            {theaters.map((theater) => (
              <li className="theater-list-group-item mb-3" key={theater.theaterId}>
                <h5>
                  {theater.name}(ID: {theater.theaterId})
                </h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminShowtimes;
