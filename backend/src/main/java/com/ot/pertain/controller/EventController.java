package com.ot.pertain.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ot.pertain.dto.Event;
import com.ot.pertain.dto.ResponseStructure;
import com.ot.pertain.service.EventService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/event")
@CrossOrigin(origins = "*")
public class EventController {

	@Autowired
	private EventService eventService;

	@ApiOperation(value = "Save Event", notes = "Input is Event Object and return Event object")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "CREATED") })
	@PostMapping(value = "/save/{hostId}", consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<ResponseStructure<Event>> saveCustomer(@PathVariable int hostId, @RequestBody Event event) {
		return eventService.saveEvent(hostId, event);
	}
	
	@ApiOperation(value = "Fetch Event by id", notes = "Input Is Id Of The Event Object and return Event Object With Id")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successfully found"),
			@ApiResponse(code = 404, message = "Not Found") })
	@GetMapping(value = "/id/{id}", produces = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<ResponseStructure<Event>> findEventById(@PathVariable int id) {
		return eventService.getEventById(id);
	}
	
	@ApiOperation(value = "Fetch All Event", notes = "Return The List Of Events")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Fetched All The Events Object") })
	@GetMapping(value = "/getallevent", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<ResponseStructure<List<Event>>> getAllEvents() {
		return eventService.getAllEvent();
	}

	@ApiOperation(value = "Save Event-Image", notes = "Input is Event-Image file")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "CREATED") })
	@PostMapping(value = "/uploadEventImage", consumes = { MediaType.ALL_VALUE }, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<ResponseStructure<String>> uploadProductImage(@RequestParam int eventId,
			@RequestParam("image") MultipartFile file) {
		return eventService.uploadEventImage(eventId, file);
	}

	@ApiOperation(value = "Download Event-Image", notes = "Input is Event-Id")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successfully Dowloaded") })
	@GetMapping(value = "/downloadEventImage", produces = { MediaType.ALL_VALUE })
	public ResponseEntity<?> downloadEventImage(@RequestParam int eventId) {
		return eventService.downloadEventImageByEventId(eventId);
	}
}
