import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/userDashboard.css'
const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleViewMovies = () => {
    navigate("/movies"); //Navigate to movies page
  };

  // const handleViewBookings = () => {
  //   console.log(user.userId);
  //   navigate("/bookings/user.userId");
  // };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleUpdateUser = () => {
    // console.log("Moving to user update")
    navigate("/user/update")
  }
  return (
    <div className="dashboard-container">
      <div className="container mt-5 text-center">
        <h2 className="text-white mb-4">Welcome, {user.firstName}!</h2>
        <p className="text-light">
          Explore your dashboard, view movie listings, check your bookings, and more.
        </p>
        <div className="row mt-4">
          <div className="col-md-3">
            <button
              className="btn btn-primary btn-block btn-lg"
              onClick={handleViewMovies}
            >
              View Movies
            </button>
          </div>
          <div className="col-md-3">
            <Link
              to={`/bookings/${user.userId}`}
              className="btn btn-success btn-block btn-lg"
            >
              View My Bookings
            </Link>
          </div>
          <div className="col-md-3">
            <button className="btn btn-secondary btn-block btn-lg" onClick={handleUpdateUser}>
              Update
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-danger btn-block btn-lg" onClick={handleLogout}>
              Logout
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
