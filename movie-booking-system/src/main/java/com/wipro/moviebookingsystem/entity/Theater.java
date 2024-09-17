package com.wipro.moviebookingsystem.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "theater")
public class Theater {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long theaterId;

    private String name;

    private String location;

    private int capacity;
//    @JsonManagedReference
//    @OneToMany(mappedBy = "theater")
//    private List<Showtime> showtimes;  // One theater can have multiple showtimes

}
