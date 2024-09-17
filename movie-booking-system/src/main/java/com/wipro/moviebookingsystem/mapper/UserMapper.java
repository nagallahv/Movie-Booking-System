package com.wipro.moviebookingsystem.mapper;

import com.wipro.moviebookingsystem.dto.UserDTO;
import com.wipro.moviebookingsystem.entity.User;

public class UserMapper {
	public UserDTO mapUserToUserDTO(User user) {
		UserDTO userDTO = new UserDTO();
		userDTO.setUsername(user.getUsername());
		userDTO.setEmail(user.getEmail());
		userDTO.setPassword(user.getPassword());
		userDTO.setFirstName(user.getFirstName());
		userDTO.setLastName(user.getLastName());
		userDTO.setRole(user.getRole());
		return userDTO;
	}
	public User mapUserDTOToUser(UserDTO userDTO) {
		User user = new User();
		user.setUsername(userDTO.getUsername());
		user.setEmail(userDTO.getEmail());
		user.setPassword(userDTO.getPassword());
		user.setRole(userDTO.getRole());
		user.setFirstName(user.getFirstName());
		user.setLastName(userDTO.getLastName());
		return user;
	}
}
