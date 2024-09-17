import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserLogin from "./components/user/UserLogin";
import AdminLogin from "./components/user/AdminLogin";
import UserDashboard from "./components/user/UserDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import UserRegister from "./components/user/UserRegister";
import AdminRegister from "./components/admin/AdminRegister";
import ViewMovies from "./components/user/ViewMovies";
import ViewBookings from "./components/user/ViewBookings";
import ViewShowtimes from "./components/user/ViewShowtimes";
import BookTickets from "./components/user/BookTickets";
import AdminMovies from "./components/admin/AdminMovies";
import AdminUpdateMovie from "./components/admin/AdminUpdateMovie";
import AdminTheater from "./components/admin/AdminTheater";
import AdminShowtimes from "./components/admin/AdminShowtimes";
import AdminUpdateTheater from "./components/admin/AdminUpdateTheater";
import AdminUpdateShowTimes from "./components/admin/AdminUpdateShowTimes";
import UserUpdate from "./components/user/UserUpdate";
import AdminViewShowtimes from "./components/admin/AdminViewShowtimes";
import AdminManageUser from "./components/admin/AdminManageUser";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/update" element={<UserUpdate />} />
        <Route path="/movies" element={<ViewMovies />} />
        <Route path="/bookings/:userId" element={<ViewBookings />} />
        <Route path="/movies/:movieId/showtimes" element={<ViewShowtimes />} />
        <Route path="/showtimes/:showtimeId/book" element={<BookTickets />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manageMovies" element={<AdminMovies />} />
        <Route
          path="/admin/movies/:movieId/showtimes"
          element={<AdminViewShowtimes />}
        />
        <Route
          path="/admin/updateMovie/:movieId"
          element={<AdminUpdateMovie />}
        />
        <Route path="/admin/theaters" element={<AdminTheater />} />
        <Route
          path="/admin/update/theater/:theaterId"
          element={<AdminUpdateTheater />}
        />
        <Route path="/admin/showtimes" element={<AdminShowtimes />} />
        <Route
          path="/admin/update/showtime/:showtimeId"
          element={<AdminUpdateShowTimes />}
        />
        <Route path="/admin/users" element={<AdminManageUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
