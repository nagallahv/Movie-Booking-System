import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminManageShowTimes = () => {
  const showtime = JSON.parse(localStorage.getItem("showtimeToUpdate"));
  const navigate = useNavigate();
  const [newShowtime, setNewShowtime] = useState({
    movieId: showtime.movie.movieId,
    theaterId: showtime.theater.theaterId,
    showDate: showtime.showDate,
    showTime: showtime.showTime,
  });
  const [errors, setErrors] = useState({});
  function validate() {
    const errors = {};
    if (!newShowtime.movieId) errors.movieId = "*Movie ID is required";
    if (!newShowtime.theaterId) errors.theaterId = "*Theater ID is required";
    if (!newShowtime.showDate) errors.showDate = "*Show Date is required";
    if (!newShowtime.showTime) errors.showTime = "*ShowTime is required";
    return errors;
  }
  const handleUpdateShowtime = async () => {
    const validateErrors = validate();
    if (Object.keys(validateErrors).length !== 0) {
      setErrors(validateErrors);
      return;
    }
    try {
      await axios.put(
        `http://localhost:8080/api/showtimes/update/${showtime.showtimeId}`,
        newShowtime
      );
      alert("Showtime Updated");
      navigate("/admin/showtimes");
    } catch (error) {
      console.error("Error updating showtime", error);
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
            onClick={handleUpdateShowtime}
          >
            Add Showtime
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminManageShowTimes;
