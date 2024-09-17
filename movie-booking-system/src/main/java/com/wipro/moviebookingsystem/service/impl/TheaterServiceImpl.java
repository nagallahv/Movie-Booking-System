package com.wipro.moviebookingsystem.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wipro.moviebookingsystem.dto.TheaterDTO;
import com.wipro.moviebookingsystem.entity.Theater;
import com.wipro.moviebookingsystem.repository.TheaterRepository;
import com.wipro.moviebookingsystem.service.TheaterService;
@Service
public class TheaterServiceImpl implements TheaterService {
	private TheaterRepository theaterRepository;
	public TheaterServiceImpl(TheaterRepository theaterRepository) {
		this.theaterRepository = theaterRepository;
	}
	@Override
	public Theater addTheater(TheaterDTO theaterDTO) {
		Theater theater = new Theater();
        theater.setName(theaterDTO.getName());
        theater.setLocation(theaterDTO.getLocation());
        theater.setCapacity(theaterDTO.getCapacity());
        return theaterRepository.save(theater);
	}

	@Override
	public Theater updateTheater(Long theaterId, TheaterDTO theaterDTO) {
		Optional<Theater> optionalTheater = theaterRepository.findById(theaterId);
        if (optionalTheater.isPresent()) {
            Theater theater = optionalTheater.get();
            theater.setName(theaterDTO.getName());
            theater.setLocation(theaterDTO.getLocation());
            theater.setCapacity(theaterDTO.getCapacity());
            return theaterRepository.save(theater);
        } else {
            throw new RuntimeException("Theater not found with id: " + theaterId);
        }
	}

	@Override
	public void deleteTheater(Long theaterId) {
		theaterRepository.deleteById(theaterId);
	}

	@Override
	public Theater getTheaterById(Long theaterId) {
		 return theaterRepository.findById(theaterId)
	                .orElseThrow(() -> new RuntimeException("Theater not found with id: " + theaterId));
	}

	@Override
	public List<Theater> getAllTheaters() {
		return theaterRepository.findAll();
	}

}
