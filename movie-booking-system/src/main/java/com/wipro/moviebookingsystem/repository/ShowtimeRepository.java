package com.wipro.moviebookingsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.moviebookingsystem.entity.Showtime;

public interface ShowtimeRepository extends JpaRepository<Showtime, Long> {

	List<Showtime> findByMovieMovieId(Long movieId);

	List<Showtime> findByTheaterTheaterId(Long theaterId);

}
