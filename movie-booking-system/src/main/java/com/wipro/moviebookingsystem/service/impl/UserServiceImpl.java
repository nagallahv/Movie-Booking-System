package com.wipro.moviebookingsystem.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wipro.moviebookingsystem.dto.UserDTO;
import com.wipro.moviebookingsystem.entity.User;
import com.wipro.moviebookingsystem.repository.UserRepository;
import com.wipro.moviebookingsystem.service.UserService;
@Service
public class UserServiceImpl implements UserService{
	private final UserRepository userRepository;
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
	@Override
	public User registerUser(UserDTO userDTO) {
		User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setEmail(userDTO.getEmail());
//        user.setRole("USER");//Default
        user.setRole(userDTO.getRole());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        return userRepository.save(user);
	}

	@Override
	public User loginUser(String username, String password) {
		Optional<User> user = userRepository.findByUsernameLike(username);
		if (user.isPresent() && user.get().getPassword().matches(password)) {
			return user.get();
		}
		else {
			throw new RuntimeException("Invalid credentials");
		}
	}

	@Override
	public User getUserByUsername(String username) {
		return userRepository.findByUsernameLike(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
   }

	@Override
	public User updateUserProfile(String username, UserDTO userDTO) {
		User user = userRepository.findByUsernameLike(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
		user.setPassword(userDTO.getPassword());
        user.setEmail(userDTO.getEmail());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        return userRepository.save(user);
	}

	@Override
	public void deleteUserAccount(String username) {
		User user = userRepository.findByUsernameLike(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        userRepository.delete(user);
	}
	@Override
	public List<User> getAllUsers() {
		List<User> users = userRepository.findAll();
		return users;
	}
	

}
