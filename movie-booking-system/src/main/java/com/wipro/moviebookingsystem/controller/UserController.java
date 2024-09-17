package com.wipro.moviebookingsystem.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.moviebookingsystem.dto.UserDTO;
import com.wipro.moviebookingsystem.dto.UserLoginDTO;
import com.wipro.moviebookingsystem.entity.User;
import com.wipro.moviebookingsystem.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	private UserService userService;
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody UserDTO userDTO) {
        User newUser = userService.registerUser(userDTO);
        return ResponseEntity.ok(newUser);
    }
	
	@PostMapping(value = "/login")
	public ResponseEntity<User> loginUser(@RequestBody UserLoginDTO userLoginDTO) {
		System.out.println(userLoginDTO);
		User loggedUser = userService.loginUser(userLoginDTO.getUsername(), userLoginDTO.getPassword());
		return ResponseEntity.ok(loggedUser);
	}
	
	@GetMapping("/{username}")
    public ResponseEntity<User> getUserDetails(@PathVariable String username) {
        User user = userService.getUserByUsername(username);
        return ResponseEntity.ok(user);
    }
	
	@PutMapping("/{username}")
    public ResponseEntity<User> updateUserProfile(@PathVariable String username, @RequestBody UserDTO userDTO) {
        User updatedUser = userService.updateUserProfile(username, userDTO);
        return ResponseEntity.ok(updatedUser);
    }
	
	@DeleteMapping("/{username}")
    public ResponseEntity<Void> deleteUserAccount(@PathVariable String username) {
        userService.deleteUserAccount(username);
        return ResponseEntity.noContent().build();
    }
	@GetMapping("all")
	public ResponseEntity<List<User>> getAllUsers() {
		return ResponseEntity.ok(userService.getAllUsers());
	}
}
