import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminUpdateTheater = () => {
  const theater = JSON.parse(localStorage.getItem("theaterToUpdate"));
  const navigate = useNavigate();
  const [newTheater, setNewTheater] = useState({
    name: theater.name,
    location: theater.location,
    capacity: theater.capacity,
  });

  const [errors, setErrors] = useState({});
  function validate() {
    const errors = {};
    if (!newTheater.name.trim()) errors.name = "*Theater Name is required";
    if (!newTheater.location.trim())
      errors.location = "*Theater Location is required";
    if (!newTheater.capacity) errors.capacity = "*Theater Capacity is required";
    return errors;
  }
  const handleUpdateTheater = async () => {
    const validateError = validate();
    if (Object.keys(validateError).length !== 0) {
      setErrors(validateError);
      return;
    }
    try {
      await axios.put(
        `http://localhost:8080/api/theaters/update/${theater.theaterId}`,
        newTheater
      );
      alert("Theater updated");
      navigate("/admin/theaters");
    } catch (error) {
      console.log("Error Updating movie", error);
    }
  };
  return (
    <div className="container mt-5 manage-theaters-container">
      <h2 className="text-center mb-4">Update Theaters</h2>
      <div className="row">
        {/* Update Theater Form */}
        <div className="col add-theater-section">
          <h3 className="mb-3">Add Updated Theater</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={newTheater.name}
              onChange={(e) =>
                setNewTheater({ ...newTheater, name: e.target.value })
              }
            />
            {errors.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value={newTheater.location}
              onChange={(e) =>
                setNewTheater({ ...newTheater, location: e.target.value })
              }
            />
            {errors.location && (
              <small className="text-danger">{errors.location}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Capacity"
              value={newTheater.capacity}
              onChange={(e) =>
                setNewTheater({ ...newTheater, capacity: e.target.value })
              }
            />
            {errors.capacity && (
              <small className="text-danger">{errors.capacity}</small>
            )}
          </div>
          <button
            className="btn btn-success btn-block mt-3"
            onClick={handleUpdateTheater}
          >
            Update Theater
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateTheater;
