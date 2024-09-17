import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
      });
      const [error, setError] = useState("");
      const navigate = useNavigate();
      const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!credentials.username || !credentials.password) {
          setError("All fields are required");
          return;
        }
        //login operations
        try {
          const response = await axios.post(
            "http://localhost:8080/api/users/login",
            credentials
          );
          localStorage.setItem("admin", JSON.stringify(response.data));
          navigate("/admin/dashboard");
        } catch (error) {
          setError("Invalid Credentials");
        }
      };
      return (
        <div className="container mt-5">
          <h2>User Login</h2>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={handleChange}
              />
            </div>
            {/* Password */}
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
              />
            </div>
            {error && <small className="text-danger">{error}</small>}
            <button type="submit" className="btn btn-primary">
              Login as Admin
            </button>
          </form>
        </div>
      );
};

export default AdminLogin;
