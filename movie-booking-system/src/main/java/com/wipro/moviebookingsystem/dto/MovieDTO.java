package com.wipro.moviebookingsystem.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MovieDTO {
	@NotBlank(message = "Title is mandatory")
	private String title;
	
	@NotBlank(message = "Description should not be Blank")
	private String description;
	
	@NotBlank(message = "Genere is not Empty")
	private String genre;
	
	@Min(value = 1, message = "Duration should be greater than 1 minute")
	private int duration;
	
	@Min(value = 0, message = "Rating should be between 0 and 10")
	@Max(value = 10, message = "Rating should be between 0 and 10")
	private double rating;
}
