package com.wipro.moviebookingsystem.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShowtimeDTO {
	@NotNull(message = "Movie ID required")
	private Long movieId;
	@NotNull(message = "Theater ID is required")
	private Long theaterId;
	@NotNull(message = "ShowDate is required")
	private String showDate;
	@NotNull(message = "ShowTime is required")
	private String showTime;
}
