package com.wipro.moviebookingsystem.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.moviebookingsystem.dto.MovieDTO;
import com.wipro.moviebookingsystem.entity.Movie;
import com.wipro.moviebookingsystem.service.MovieService;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
	private MovieService movieService;
	public MovieController(MovieService movieService) {
		this.movieService = movieService;
	}
	
	@PostMapping("/add")
    public ResponseEntity<Movie> addMovie(@RequestBody MovieDTO movieDTO) {
        Movie newMovie = movieService.addMovie(movieDTO);
        return ResponseEntity.ok(newMovie);
    }
	
	@PutMapping("/update/{movieId}")
    public ResponseEntity<Movie> updateMovie(@PathVariable Long movieId, @RequestBody MovieDTO movieDTO) {
        Movie updatedMovie = movieService.updateMovie(movieId, movieDTO);
        return ResponseEntity.ok(updatedMovie);
    }
	
	@DeleteMapping("/delete/{movieId}")
    public ResponseEntity<Void> deleteMovie(@PathVariable Long movieId) {
        movieService.deleteMovie(movieId);
        return ResponseEntity.noContent().build();
    }
	
	@GetMapping("/{movieId}")
    public ResponseEntity<Movie> getMovieById(@PathVariable Long movieId) {
        Movie movie = movieService.getMovieById(movieId);
        return ResponseEntity.ok(movie);
    }
	
	@GetMapping("/all")
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieService.getAllMovies();
        return ResponseEntity.ok(movies);
    }
}
