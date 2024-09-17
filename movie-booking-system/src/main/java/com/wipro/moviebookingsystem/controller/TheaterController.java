package com.wipro.moviebookingsystem.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.moviebookingsystem.dto.TheaterDTO;
import com.wipro.moviebookingsystem.entity.Theater;
import com.wipro.moviebookingsystem.service.TheaterService;

@RestController
@RequestMapping("/api/theaters")
public class TheaterController {
	private TheaterService theaterService;
	public TheaterController(TheaterService theaterService) {
		this.theaterService = theaterService;
	}
	
	@PostMapping("/add")
    public ResponseEntity<Theater> addTheater(@RequestBody TheaterDTO theaterDTO) {
        Theater newTheater = theaterService.addTheater(theaterDTO);
        return ResponseEntity.ok(newTheater);
    }
	
	@PutMapping("/update/{theaterId}")
    public ResponseEntity<Theater> updateTheater(@PathVariable Long theaterId, @RequestBody TheaterDTO theaterDTO) {
        Theater updatedTheater = theaterService.updateTheater(theaterId, theaterDTO);
        return ResponseEntity.ok(updatedTheater);
    }
	
	@DeleteMapping("/delete/{theaterId}")
    public ResponseEntity<Void> deleteTheater(@PathVariable Long theaterId) {
        theaterService.deleteTheater(theaterId);
        return ResponseEntity.noContent().build();
    }
	
	@GetMapping("/{theaterId}")
    public ResponseEntity<Theater> getTheaterById(@PathVariable Long theaterId) {
        Theater theater = theaterService.getTheaterById(theaterId);
        return ResponseEntity.ok(theater);
    }
	
	@GetMapping("/all")
    public ResponseEntity<List<Theater>> getAllTheaters() {
        List<Theater> theaters = theaterService.getAllTheaters();
        return ResponseEntity.ok(theaters);
    }
}
