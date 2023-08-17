package com.ot.pertain.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ot.pertain.dto.Event;
import com.ot.pertain.repository.EventRepository;

@Repository
public class EventDao {

	@Autowired
	private EventRepository eventRepository;

	public Event saveEvent(Event event) {
		return eventRepository.save(event);
	}

	public Event getEventById(int id) {
		Optional<Event> optional = eventRepository.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}
	
	public List<Event> getAllEvent() {
		return eventRepository.findAll();
	}

}