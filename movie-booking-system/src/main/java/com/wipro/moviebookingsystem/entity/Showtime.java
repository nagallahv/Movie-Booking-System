package com.wipro.moviebookingsystem.entity;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "showtime")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Showtime {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long showtimeId;

	 private String showDate;

	 private String showTime;
//	 @JsonBackReference
	 @ManyToOne
	 @JoinColumn(name = "movieId", nullable = false)
	 private Movie movie;
//	 @JsonBackReference
	 @ManyToOne
	 @JoinColumn(name = "theaterId", nullable = false)
	 private Theater theater;
//	 @JsonManagedReference
//	 @OneToMany(mappedBy = "showtime")
//	 private List<Booking> bookings;
}
