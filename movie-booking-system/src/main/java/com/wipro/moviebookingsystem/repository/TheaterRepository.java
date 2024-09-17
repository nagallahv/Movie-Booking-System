package com.wipro.moviebookingsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.moviebookingsystem.entity.Theater;

public interface TheaterRepository extends JpaRepository<Theater, Long> {
	
}
