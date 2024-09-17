package com.wipro.moviebookingsystem.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TheaterDTO {
	@NotBlank(message = "Theater name is required")
	private String name;
	@NotBlank(message = "Location is required")
	private String location;
	@Positive(message = "Capacity should be a positive number")
	private int capacity;
}
