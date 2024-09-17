import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../styles/viewBooking.css'
const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { userId } = useParams();
  const handleDelete = (e) => {
    let id = e.target.id;
    axios
      .delete(`http://localhost:8080/api/bookings/cancel/${id}`)
      .then((response) => {
        // console.log("Response Code: ", response.status);
        if (response.status === 204) {
          setBookings(bookings.filter((booking) => {
            return booking.bookingId !== id;
          }))
        }
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/bookings/user/${userId}`)
      .then((response) => {
        setBookings(response.data);
        console.log("View Bookings response Data: ", response.data);
      })
      .catch((error) => console.error(error));
  }, [userId, bookings]);
  console.log(bookings);
  return (
    <div className="container mt-5 viewbookings-container">
    <h2 className="text-center text-white mb-4">Your Bookings</h2>
    <ul className="list-group">
      {bookings.map((booking) => (
        <li
          key={booking.bookingId}
          className="viewbooking-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h5 className="movie-title">{booking.showtime.movie.title}</h5>
            <p>
              <span className="text-muted">Date:</span> {booking.showtime.showDate}
            </p>
            <p>
              <span className="text-muted">Time:</span> {booking.showtime.showTime}
            </p>
            <p>
              <span className="text-muted">Tickets:</span> {booking.numberOfTickets}
            </p>
          </div>
          <button
            className="btn btn-danger delete-button"
            onClick={handleDelete}
            id={booking.bookingId}
          >
            Delete Now
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ViewBookings;
