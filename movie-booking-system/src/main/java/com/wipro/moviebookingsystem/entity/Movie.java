package com.wipro.moviebookingsystem.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "movie")
public class Movie {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movieId;

    private String title;

    private String description;

    private String genre;

    private int duration; // Duration in minutes

    private double rating; // Rating out of 10
//    @JsonManagedReference
//    @OneToMany(mappedBy = "movie")
//    private List<Showtime> showtimes;  // One movie can have multiple showtimes
}
