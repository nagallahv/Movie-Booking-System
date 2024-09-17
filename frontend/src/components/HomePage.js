import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "../styles/homepage.css";
import Footer from "./Footer";
import Header from "./Header";
const HomePage = () => {
  localStorage.clear();
  useEffect(() => {
    // Function to prevent back navigation
    const preventBackNavigation = () => {
      window.history.pushState(null, "", window.location.href);
    };

    // Push the current state when the page is loaded
    window.history.pushState(null, "", window.location.href);

    // Add event listener to override back button behavior
    window.addEventListener("popstate", preventBackNavigation);

    // Cleanup event listener when the component is unmounted
    return () => {
      window.removeEventListener("popstate", preventBackNavigation);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center homepage vh-100 p-4">
        <div className="text-center mb-5">
          <h1 className="display-4 text-danger">Movie Booking System</h1>
          <p className="fs-5 text-muted">
            Login or Register to continue your journey with us!
          </p>
        </div>
        <div className="card mb-4 p-3 login-card w-100">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h2 className="text-success">Welcome Back!</h2>
              <p>Please login to access your account.</p>
              <Link to="/user/login" className="btn btn-success btn-lg">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-md-6 mb-3">
            <div className="card register-card text-center p-4">
              <h3 className="text-primary">New User?</h3>
              <p className="text-info">
                Join us today by creating a new account.
              </p>
              <Link to="/user/register" className="btn btn-primary btn-lg">
                User Register
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card register-card text-center p-4">
              <h3 className="text-warning">New Admin?</h3>
              <p className="text-success">
                Create an admin account to start managing the portal.
              </p>
              <Link to="/admin/register" className="btn btn-warning btn-lg">
                Admin Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
