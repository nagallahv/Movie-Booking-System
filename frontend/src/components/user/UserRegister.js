import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/register.css'
const UserRegister = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function validate() {
    const errors = {};
    if (!user.username.trim()) errors.username = "*Username is required";
    let message = validatePassword(user.password);
    if (message)
      errors.password = message;
    if (!user.email.trim()) errors.email = "*Email is required";
    if (!user.firstName.trim()) errors.firstName = "*First name is required";
    if (!user.lastName.trim()) errors.lastName = "*Last name is required";

    return errors;
  }
  //To validate password in input field
  function validatePassword(password) {
    if(!password.trim()) {
      return "*Password is required";
    }
    else if (password.trim().length < 8) {
      return "*Minimum length of password is 8";
    }
  }
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    console.log(validationErrors);
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/users/register", {
        ...user,
        role: "USER",
      });
      alert("Registration is successful");
      navigate("/user/login");
    } catch (error) {
      alert("Registration failed!");
    }
  };
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
      <div className="card register p-5">
        <h2 className="text-center mb-4 text-success">User Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            {errors.username && (
              <small className="text-danger">{errors.username}</small>
            )}
          </div>
          {/* Password */}
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>
          {/* Email */}
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>
          {/* First Name */}
          <div className="form-group mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <small className="text-danger">{errors.firstName}</small>
            )}
          </div>
          {/* Last Name */}
          <div className="form-group mb-4">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <small className="text-danger">{errors.lastName}</small>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register as User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
