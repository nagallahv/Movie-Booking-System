package com.wipro.moviebookingsystem.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wipro.moviebookingsystem.dto.MovieDTO;
import com.wipro.moviebookingsystem.entity.Movie;
import com.wipro.moviebookingsystem.repository.MovieRepository;
import com.wipro.moviebookingsystem.service.MovieService;
@Service
public class MovieServiceImpl implements MovieService {
	private MovieRepository movieRepository;
	public MovieServiceImpl(MovieRepository movieRepository) {
		this.movieRepository = movieRepository;
	}
	@Override
	public Movie addMovie(MovieDTO movieDTO) {
		Movie movie = new Movie();
        movie.setTitle(movieDTO.getTitle());
        movie.setDescription(movieDTO.getDescription());
        movie.setGenre(movieDTO.getGenre());
        movie.setDuration(movieDTO.getDuration());
        movie.setRating(movieDTO.getRating());
        return movieRepository.save(movie);
	}

	@Override
	public Movie updateMovie(Long movieId, MovieDTO movieDTO) {
		Optional<Movie> optionalMovie = movieRepository.findById(movieId);
        if (optionalMovie.isPresent()) {
            Movie movie = optionalMovie.get();
            movie.setTitle(movieDTO.getTitle());
            movie.setDescription(movieDTO.getDescription());
            movie.setGenre(movieDTO.getGenre());
            movie.setDuration(movieDTO.getDuration());
            movie.setRating(movieDTO.getRating());
            return movieRepository.save(movie);
        } else {
            throw new RuntimeException("Movie not found with id: " + movieId);
        }
	}

	@Override
	public void deleteMovie(Long movieId) {
		movieRepository.deleteById(movieId);

	}

	@Override
	public Movie getMovieById(Long movieId) {
		return movieRepository.findById(movieId)
                .orElseThrow(() -> new RuntimeException("Movie not found with id: " + movieId));
    
	}

	@Override
	public List<Movie> getAllMovies() {
		return movieRepository.findAll();
	}

}
