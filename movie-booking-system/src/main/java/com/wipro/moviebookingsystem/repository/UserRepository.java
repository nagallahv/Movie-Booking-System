package com.wipro.moviebookingsystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wipro.moviebookingsystem.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	@Query(value = "SELECT * FROM user WHERE username LIKE :username", nativeQuery = true)
	Optional<User> findByUsernameLike(@Param("username") String username);
}
