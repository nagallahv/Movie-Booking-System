package com.wipro.moviebookingsystem.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wipro.moviebookingsystem.dto.BookingDTO;
import com.wipro.moviebookingsystem.entity.Booking;
import com.wipro.moviebookingsystem.entity.Showtime;
import com.wipro.moviebookingsystem.entity.User;
import com.wipro.moviebookingsystem.repository.BookingRepository;
import com.wipro.moviebookingsystem.repository.ShowtimeRepository;
import com.wipro.moviebookingsystem.repository.UserRepository;
import com.wipro.moviebookingsystem.service.BookingService;
@Service
public class BookingServiceImpl implements BookingService {
	private BookingRepository bookingRepository;
	private UserRepository userRepository;
	private ShowtimeRepository showtimeRepository;
	public BookingServiceImpl(BookingRepository bookingRepository, UserRepository userRepository, ShowtimeRepository showtimeRepository) {
		this.bookingRepository = bookingRepository;
		this.userRepository = userRepository;
		this.showtimeRepository = showtimeRepository;
	}
	@Override
	public Booking createBooking(BookingDTO bookingDTO) {
		User user = userRepository.findById(bookingDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with id: " + bookingDTO.getUserId()));
        Showtime showtime = showtimeRepository.findById(bookingDTO.getShowtimeId())
                .orElseThrow(() -> new RuntimeException("Showtime not found with id: " + bookingDTO.getShowtimeId()));

        Booking booking = new Booking();
        booking.setUser(user);
        booking.setShowtime(showtime);
        booking.setBookingDate(bookingDTO.getBookingDate());
        booking.setNumberOfTickets(bookingDTO.getNumberOfTickets());
        booking.setTotalPrice(bookingDTO.getNumberOfTickets() * 100);

        return bookingRepository.save(booking);
	}

	@Override
	public Booking updateBooking(Long bookingId, BookingDTO bookingDTO) {
		Optional<Booking> optionalBooking = bookingRepository.findById(bookingId);
        if (optionalBooking.isPresent()) {
            Booking booking = optionalBooking.get();
            User user = userRepository.findById(bookingDTO.getUserId())
                    .orElseThrow(() -> new RuntimeException("User not found with id: " + bookingDTO.getUserId()));
            Showtime showtime = showtimeRepository.findById(bookingDTO.getShowtimeId())
                    .orElseThrow(() -> new RuntimeException("Showtime not found with id: " + bookingDTO.getShowtimeId()));

            booking.setUser(user);
            booking.setShowtime(showtime);
            booking.setBookingDate(bookingDTO.getBookingDate());
            booking.setNumberOfTickets(bookingDTO.getNumberOfTickets());
            booking.setTotalPrice(bookingDTO.getNumberOfTickets() * 100);

            return bookingRepository.save(booking);
        } else {
            throw new RuntimeException("Booking not found with id: " + bookingId);
        }
	}

	@Override
	public void cancelBooking(Long bookingId) {
		bookingRepository.deleteById(bookingId);
		
	}

	@Override
	public Booking getBookingById(Long bookingId) {
		return bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found with id: " + bookingId));
    
	}

	@Override
	public List<Booking> getBookingsForUser(Long userId) {
		return bookingRepository.findByUserUserId(userId);
	}

}
