import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../styles/login.css'

const UserLogin = () => {
  localStorage.clear();
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
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
      // console.log(response.data.role);

      if (response.data.role === "USER") {
        console.log("logging as USER ..... ", JSON.stringify(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/user/dashboard");
      } else if (response.data.role === "ADMIN") {
        console.log("logging as admin.....", JSON.stringify(response.data));
        localStorage.setItem("admin", JSON.stringify(response.data));
        navigate("/admin/dashboard");
      }
    } catch (error) {
      setError("Invalid Credentials");
    }
  };
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
      <div className="card login p-5">
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>
          {/* Password */}
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          {error && <small className="text-danger mb-3">{error}</small>}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
