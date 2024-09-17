package com.wipro.moviebookingsystem.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
	@NotBlank(message = "Username is required")
	private String username;
	
	@NotBlank(message = "Password is required")
	@Size(min = 8, message = "Minimum length of password is 8")
	private String password;
	
	@Email(message = "Enter valid email")
	@NotBlank(message = "Email is required")
	private String email;
	
	@NotBlank(message = "Role is required")
	private String role;
	
	@NotBlank(message = "First Name is required")
	private String firstName;
	
	@NotBlank(message = "Last Name is required")
	private String lastName;
}
