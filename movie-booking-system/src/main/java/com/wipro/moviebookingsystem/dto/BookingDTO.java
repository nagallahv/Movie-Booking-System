package com.wipro.moviebookingsystem.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingDTO {
    private Long userId;
    private Long showtimeId;
    private LocalDate bookingDate;
    private int numberOfTickets;
//    private double totalPrice;
}
