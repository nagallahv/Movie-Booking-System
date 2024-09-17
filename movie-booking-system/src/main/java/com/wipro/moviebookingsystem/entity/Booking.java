package com.wipro.moviebookingsystem.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "booking")
public class Booking {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    private LocalDate bookingDate;
    private int numberOfTickets;
    private double totalPrice;
//    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private User user;
//    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "showtimeId", nullable = false)
    private Showtime showtime;
}
