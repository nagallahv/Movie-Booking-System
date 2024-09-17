package com.wipro.moviebookingsystem.service;

import java.util.List;

import com.wipro.moviebookingsystem.dto.UserDTO;
import com.wipro.moviebookingsystem.entity.User;

public interface UserService {
	User registerUser(UserDTO userDTO);
	User loginUser(String username, String password);
	User getUserByUsername(String username);
	User updateUserProfile(String username, UserDTO userDTO);
	void deleteUserAccount(String username);
	List<User> getAllUsers();
}
