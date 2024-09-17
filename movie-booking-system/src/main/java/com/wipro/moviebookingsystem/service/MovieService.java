package com.wipro.moviebookingsystem.service;

import java.util.List;

import com.wipro.moviebookingsystem.dto.MovieDTO;
import com.wipro.moviebookingsystem.entity.Movie;

public interface MovieService {
	Movie addMovie(MovieDTO movieDTO);
    Movie updateMovie(Long movieId, MovieDTO movieDTO);
    void deleteMovie(Long movieId);
    Movie getMovieById(Long movieId);
    List<Movie> getAllMovies();
}
