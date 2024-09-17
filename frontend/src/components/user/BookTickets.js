import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../styles/booktickets.css'
const BookTickets = () => {
  const user = JSON.parse(localStorage.getItem("user"));
    const {showtimeId} = useParams();
    const [numberOfTickets, setNumberOfTickets] = useState(1);
    const navigate = useNavigate();
    const currentDate = new Date();
    const handleBooking = () => {
        axios.post("http://localhost:8080/api/bookings/create", {
          userId: user.userId,
          showtimeId: showtimeId,
          bookingDate: currentDate,
          numberOfTickets: numberOfTickets
        })
        .then(response => {
          alert('Booking Successful');
          console.log("Booking Successful: ", response.data);
          navigate(`/bookings/${user.userId}`); //Redirects to booking page
        })
        .catch(error => console.log("Error during bookings: ", error));
    }
    const handleChange = (e) => {
      setNumberOfTickets(e.target.value);
    }
  return (
    <div className="container mt-5 booking-container">
      <h2 className="text-center text-white mb-4">Book Your Tickets</h2>
      <div className="card booking-card">
        <div className="card-body">
          <form>
            {/* Number of Tickets */}
            <div className="form-group">
              <label htmlFor="tickets" className="text-white">
                Number of Tickets
              </label>
              <input
                type="number"
                id="tickets"
                className="form-control"
                min="1"
                value={numberOfTickets}
                onChange={handleChange}
              />
            </div>
            {/* Book Now Button */}
            <button
              type="button"
              className="btn btn-success btn-block mt-4"
              onClick={handleBooking}
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookTickets
