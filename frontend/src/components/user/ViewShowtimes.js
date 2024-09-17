import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../../styles/viewShowtimes.css'

const ViewShowtimes = () => {
    const {movieId} = useParams();
    const [showtimes, setShowtimes] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/showtimes/movie/${movieId}`)
            .then(response => setShowtimes(response.data))
            .catch(error => console.log(error));
    }, [movieId]);
    // console.log(showtimes)
  return (
    <div className="showtime-container mt-5">
      <h2 className="text-center text-white mb-4">Available Showtimes</h2>
      <div className="row">
        {showtimes.map((showtime) => (
          <div key={showtime.showtimeId} className="col-md-6 mb-4">
            <div className="card showtime-card">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  {showtime.theater.name} - {showtime.theater.location}
                </h5>
                <p className="card-text">
                  <strong>Date:</strong> {showtime.showDate}
                </p>
                <p className="card-text">
                  <strong>Time:</strong> {showtime.showTime}
                </p>
                <Link
                  to={`/showtimes/${showtime.showtimeId}/book`}
                  className="btn btn-info btn-block"
                >
                  Book Tickets
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewShowtimes
