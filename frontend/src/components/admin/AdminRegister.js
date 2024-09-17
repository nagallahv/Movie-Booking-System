import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../../styles/adminregister.css'
const AdminRegister = () => {
    const [admin, setAdmin] = useState({
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
        if (!admin.username.trim()) errors.username = "*Username is required";
        if (!admin.password.trim()) errors.password = "**Password is required";
        if (!admin.email.trim()) errors.email = "*Email is required";
        if (!admin.firstName.trim()) errors.firstName = "*First name is required";
        if (!admin.lastName.trim()) errors.lastName = "*Last name is required";
        return errors;
      }
      const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length !== 0) {
          setErrors(validationErrors);
          return;
        }
        try {
          await axios.post("http://localhost:8080/api/users/register", {
            ...admin,
            role: "ADMIN",
          });
          alert("Registration is successful");
          navigate("/admin/login");
        } catch (error) {
          alert("Registration failed!");
        }
      };
      return (
        <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
      <div className="card admin-register p-5">
        <h2 className="text-center mb-4 text-success">Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={admin.username}
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
              value={admin.password}
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
              value={admin.email}
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
              value={admin.firstName}
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
              value={admin.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <small className="text-danger">{errors.lastName}</small>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register as Admin
          </button>
        </form>
      </div>
    </div>
      );
}

export default AdminRegister
