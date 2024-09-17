package com.wipro.moviebookingsystem.service;

import java.util.List;

import com.wipro.moviebookingsystem.dto.ShowtimeDTO;
import com.wipro.moviebookingsystem.entity.Showtime;

public interface ShowtimeService {
	Showtime addShowtime(ShowtimeDTO showtimeDTO);
    Showtime updateShowtime(Long showtimeId, ShowtimeDTO showtimeDTO);
    void deleteShowtime(Long showtimeId);
    Showtime getShowtimeById(Long showtimeId);
    List<Showtime> getAllShowtimes();
    List<Showtime> getShowtimesByMovie(Long movieId);
    List<Showtime> getShowtimesByTheater(Long theaterId);
}
