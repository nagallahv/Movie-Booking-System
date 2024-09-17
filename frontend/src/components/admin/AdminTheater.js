import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/adminTheater.css";
import { useNavigate } from "react-router-dom";
const AdminTheater = () => {

  const [theaters, setTheaters] = useState([]);
  const [newTheater, setNewTheater] = useState({
    name: "",
    location: "",
    capacity: "",
  });
  //validate input
  const [errors, setErrors] = useState({});
  function validate() {
    const errors = {};
    if (!newTheater.name.trim()) errors.name = "*Theater Name is required";
    if (!newTheater.location.trim())
      errors.location = "*Theater Location is required";
    if (!newTheater.capacity) errors.capacity = "*Theater Capacity is required";
    return errors;
  }
  useEffect(() => {
    fetchTheaters();
  }, []);
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

  const handleAddTheater = async () => {
    const validateErrors = validate();
    if (Object.keys(validateErrors).length !== 0) {
      setErrors(validateErrors);
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/theaters/add", newTheater);
      fetchTheaters();
    } catch (error) {
      console.error("Error adding theater", error);
    }
  };
  const navigate = useNavigate();
  const handleUpdateTheater = async (theater) => {
    const id = theater.theaterId;
    localStorage.setItem("theaterToUpdate", JSON.stringify(theater));
    navigate(`/admin/update/theater/${id}`);
  }
  const handleDeleteTheater = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/theaters/delete/${id}`);
      fetchTheaters();
    } catch (error) {
      console.error("Error deleting theater", error);
    }
  };
  return (
    <div className="container mt-5 manage-theaters-container">
      <h2 className="text-center mb-4">Manage Theaters</h2>
      <div className="row">
        {/* Add New Theater Form */}
        <div className="col-md-6 add-theater-section">
          <h3 className="mb-3">Add New Theater</h3>
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
            onClick={handleAddTheater}
          >
            Add Theater
          </button>
        </div>

        {/* Theater List Section */}
        <div className="col-md-6 theater-list-section">
          <h3 className="mb-3">Theater List</h3>
          <ul className="list-group">
            {theaters.map((theater) => (
              <li
                className="theater-list-group-item mb-3"
                key={theater.theaterId}
              >
                <p>
                  <strong>{theater.name}</strong> - {theater.location}
                </p>
                <p>
                  <strong>Capacity:</strong> {theater.capacity}
                </p>
                <div className="theater-actions">
                  <button className="btn btn-primary me-2" onClick={() => handleUpdateTheater(theater)}>Update</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteTheater(theater.theaterId)}
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
export default AdminTheater;
