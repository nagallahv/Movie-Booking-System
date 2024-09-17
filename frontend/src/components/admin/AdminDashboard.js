import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/adminDashboard.css";
const AdminDashboard = () => {
  localStorage.removeItem("movieToUpdate");
  localStorage.removeItem("showtimeToUpdate");
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("admin"));
  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
  const handleAdminMovies = () => {
    navigate("/admin/manageMovies");
  };
  const handleManageTheaters = () => {
    navigate("/admin/theaters");
  };
  const handleManageShowtimes = () => {
    navigate("/admin/showtimes");
  };
  const handleManageUsers = () => {
    navigate("/admin/users");
  };
  return (
    <div className="container mt-5 admin-dashboard-container">
      <h2 className="text-center text-white mb-4">
        Welcome, {admin.firstName}
      </h2>
      <p className="text-center text-muted">
        Welcome to your admin dashboard. Here you can manage movies, theaters,
        and showtimes.
      </p>

      <div className="row mt-4 justify-content-center">
        <div className="col-md-3">
          <button
            className="btn btn-primary btn-lg btn-block admin-button"
            onClick={handleAdminMovies}
          >
            Manage Movies
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-primary btn-lg btn-block admin-button"
            onClick={handleManageTheaters}
          >
            Manage Theaters
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-primary btn-lg btn-block admin-button"
            onClick={handleManageShowtimes}
          >
            Manage Showtimes
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-primary btn-lg btn-block admin-button"
            onClick={handleManageUsers}
          >
            Manage Users
          </button>
        </div>
      </div>

      <div className="row mt-4 justify-content-center">
        <div className="col-md-3">
          <button
            className="btn btn-danger btn-lg btn-block logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
