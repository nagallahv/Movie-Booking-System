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

import com.wipro.moviebookingsystem.dto.ShowtimeDTO;
import com.wipro.moviebookingsystem.entity.Showtime;
import com.wipro.moviebookingsystem.service.ShowtimeService;

@RestController
@RequestMapping("/api/showtimes")
public class ShowtimeController {
	private ShowtimeService showtimeService;
	public ShowtimeController(ShowtimeService showtimeService) {
		this.showtimeService = showtimeService;
	}
	
	@PostMapping("/add")
    public ResponseEntity<Showtime> addShowtime(@RequestBody ShowtimeDTO showtimeDTO) {
        Showtime newShowtime = showtimeService.addShowtime(showtimeDTO);
        return ResponseEntity.ok(newShowtime);
    }
	
	@PutMapping("/update/{showtimeId}")
    public ResponseEntity<Showtime> updateShowtime(@PathVariable Long showtimeId, @RequestBody ShowtimeDTO showtimeDTO) {
        Showtime updatedShowtime = showtimeService.updateShowtime(showtimeId, showtimeDTO);
        return ResponseEntity.ok(updatedShowtime);
    }
	
	@DeleteMapping("/delete/{showtimeId}")
    public ResponseEntity<Void> deleteShowtime(@PathVariable Long showtimeId) {
        showtimeService.deleteShowtime(showtimeId);
        return ResponseEntity.noContent().build();
    }
	
	@GetMapping("/{showtimeId}")
    public ResponseEntity<Showtime> getShowtimeById(@PathVariable Long showtimeId) {
        Showtime showtime = showtimeService.getShowtimeById(showtimeId);
        return ResponseEntity.ok(showtime);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Showtime>> getAllShowtimes() {
        List<Showtime> showtimes = showtimeService.getAllShowtimes();
        return ResponseEntity.ok(showtimes);
    }

    @GetMapping("/movie/{movieId}")
    public ResponseEntity<List<Showtime>> getShowtimesByMovie(@PathVariable Long movieId) {
        List<Showtime> showtimes = showtimeService.getShowtimesByMovie(movieId);
        return ResponseEntity.ok(showtimes);
    }

    @GetMapping("/theater/{theaterId}")
    public ResponseEntity<List<Showtime>> getShowtimesByTheater(@PathVariable Long theaterId) {
        List<Showtime> showtimes = showtimeService.getShowtimesByTheater(theaterId);
        return ResponseEntity.ok(showtimes);
    }
}
