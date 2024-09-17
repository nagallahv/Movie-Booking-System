package com.wipro.moviebookingsystem.service;

import java.util.List;

import com.wipro.moviebookingsystem.dto.BookingDTO;
import com.wipro.moviebookingsystem.entity.Booking;

public interface BookingService {
	Booking createBooking(BookingDTO bookingDTO);
    Booking updateBooking(Long bookingId, BookingDTO bookingDTO);
    void cancelBooking(Long bookingId);
    Booking getBookingById(Long bookingId);
    List<Booking> getBookingsForUser(Long userId);
}
