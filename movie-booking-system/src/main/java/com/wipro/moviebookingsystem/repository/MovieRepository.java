package com.wipro.moviebookingsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.moviebookingsystem.entity.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
