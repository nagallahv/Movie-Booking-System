import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminManageUser = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users/all");
      setUsers(response.data);
    } catch (error) {
      alert("Error fetching users", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (user) => {
    const username = user.username;
    try {
      await axios.delete(`http://localhost:8080/api/users/${username}`);
      fetchUsers();
    } catch (error) {
      alert("Error deleting user", user);
    }
  };
  return (
    <div className="container mt-5 manage-showtimes-container">
      <h2 className="text-center mb-4">Manage Users</h2>
    <div className="showtime-list-section">
      <h2 className="mb-3">Available Users</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li className="movie-list-group-item mb-3" key={user.userId}>
            <div>
              <strong>Username: </strong> {user.username},
              <strong>User Role: </strong> {user.role}
            </div>
            <button
              className="btn btn-danger btn-sm mt-2"
              onClick={() => handleDeleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div></div>
  );
};

export default AdminManageUser;
