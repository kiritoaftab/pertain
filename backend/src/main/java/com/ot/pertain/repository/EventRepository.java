package com.ot.pertain.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ot.pertain.dto.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {
	
	public Optional<Event> findById(int id);

}
