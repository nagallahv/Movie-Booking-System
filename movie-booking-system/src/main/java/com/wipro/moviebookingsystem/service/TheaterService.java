package com.wipro.moviebookingsystem.service;

import java.util.List;

import com.wipro.moviebookingsystem.dto.TheaterDTO;
import com.wipro.moviebookingsystem.entity.Theater;

public interface TheaterService {
	Theater addTheater(TheaterDTO theaterDTO);
    Theater updateTheater(Long theaterId, TheaterDTO theaterDTO);
    void deleteTheater(Long theaterId);
    Theater getTheaterById(Long theaterId);
    List<Theater> getAllTheaters();
}
