package com.wipro.moviebookingsystem.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wipro.moviebookingsystem.dto.ShowtimeDTO;
import com.wipro.moviebookingsystem.entity.Movie;
import com.wipro.moviebookingsystem.entity.Showtime;
import com.wipro.moviebookingsystem.entity.Theater;
import com.wipro.moviebookingsystem.repository.MovieRepository;
import com.wipro.moviebookingsystem.repository.ShowtimeRepository;
import com.wipro.moviebookingsystem.repository.TheaterRepository;
import com.wipro.moviebookingsystem.service.ShowtimeService;
@Service
public class ShowtimeServiceImpl implements ShowtimeService {
	private ShowtimeRepository showtimeRepository;
	private MovieRepository movieRepository;
	private TheaterRepository theaterRepository;
	public ShowtimeServiceImpl(ShowtimeRepository showtimeRepository, MovieRepository movieRepository, TheaterRepository theaterRepository) {
		this.showtimeRepository = showtimeRepository;
		this.movieRepository = movieRepository;
		this.theaterRepository = theaterRepository;
	}
	@Override
	public Showtime addShowtime(ShowtimeDTO showtimeDTO) {
		Movie movie = movieRepository.findById(showtimeDTO.getMovieId())
                .orElseThrow(() -> new RuntimeException("Movie not found with id: " + showtimeDTO.getMovieId()));
        Theater theater = theaterRepository.findById(showtimeDTO.getTheaterId())
                .orElseThrow(() -> new RuntimeException("Theater not found with id: " + showtimeDTO.getTheaterId()));

        Showtime showtime = new Showtime();
        showtime.setMovie(movie);
        showtime.setTheater(theater);
        showtime.setShowDate(showtimeDTO.getShowDate());
        showtime.setShowTime(showtimeDTO.getShowTime());

        return showtimeRepository.save(showtime);
	}

	@Override
	public Showtime updateShowtime(Long showtimeId, ShowtimeDTO showtimeDTO) {
		Optional<Showtime> optionalShowtime = showtimeRepository.findById(showtimeId);
        if (optionalShowtime.isPresent()) {
            Showtime showtime = optionalShowtime.get();
            Movie movie = movieRepository.findById(showtimeDTO.getMovieId())
                    .orElseThrow(() -> new RuntimeException("Movie not found with id: " + showtimeDTO.getMovieId()));
            Theater theater = theaterRepository.findById(showtimeDTO.getTheaterId())
                    .orElseThrow(() -> new RuntimeException("Theater not found with id: " + showtimeDTO.getTheaterId()));

            showtime.setMovie(movie);
            showtime.setTheater(theater);
            showtime.setShowDate(showtimeDTO.getShowDate());
            showtime.setShowTime(showtimeDTO.getShowTime());

            return showtimeRepository.save(showtime);
        } else {
            throw new RuntimeException("Showtime not found with id: " + showtimeId);
        }
	}

	@Override
	public void deleteShowtime(Long showtimeId) {
		showtimeRepository.deleteById(showtimeId);

	}

	@Override
	public Showtime getShowtimeById(Long showtimeId) {
		return showtimeRepository.findById(showtimeId)
                .orElseThrow(() -> new RuntimeException("Showtime not found with id: " + showtimeId));
    
	}

	@Override
	public List<Showtime> getAllShowtimes() {
		return showtimeRepository.findAll();
	}

	@Override
	public List<Showtime> getShowtimesByMovie(Long movieId) {
		return showtimeRepository.findByMovieMovieId(movieId);
	}

	@Override
	public List<Showtime> getShowtimesByTheater(Long theaterId) {
		return showtimeRepository.findByTheaterTheaterId(theaterId);
	}

}
