package com.ot.pertain.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ot.pertain.dao.EventDao;
import com.ot.pertain.dao.UserDao;
import com.ot.pertain.dto.Event;
import com.ot.pertain.dto.EventImage;
import com.ot.pertain.dto.Host;
import com.ot.pertain.dto.ResponseStructure;
import com.ot.pertain.exception.DataNotFoundException;
import com.ot.pertain.exception.IdNotFoundException;
import com.ot.pertain.util.ImageUtils;

@Service
public class EventService {

	@Autowired
	private EventDao eventDao;

	@Autowired
	private UserDao userDao;

	public ResponseEntity<ResponseStructure<Event>> saveEvent(int hostId, Event event) {
		ResponseStructure<Event> responseStructure = new ResponseStructure<>();
		Host host = userDao.getHostById(hostId);
		if (host != null) {
			event.setHost(host);
			responseStructure.setStatus(HttpStatus.CREATED.value());
			responseStructure.setMessage("Event Saved Successfully By Host " + host.getUserName());
			responseStructure.setData(eventDao.saveEvent(event));
			return new ResponseEntity<>(responseStructure, HttpStatus.CREATED);
		} else {
			throw new IdNotFoundException("Host Id Not Found -> " + hostId);
		}
	}

	public ResponseEntity<ResponseStructure<Event>> getEventById(int id) {
		ResponseStructure<Event> responseStructure = new ResponseStructure<>();
		Event event = eventDao.getEventById(id);
		if (event != null) {
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("Fetched Event Details By Id");
			responseStructure.setData(event);
			return new ResponseEntity<ResponseStructure<Event>>(responseStructure, HttpStatus.OK);
		} else {
			throw new IdNotFoundException("Event Id is Not Present" + id);
		}
	}

	public ResponseEntity<ResponseStructure<List<Event>>> getAllEvent() {
		ResponseStructure<List<Event>> responseStructure = new ResponseStructure<>();
		List<Event> list = eventDao.getAllEvent();
		if (list.size() > 0) {
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("All Details of Event Fetched");
			responseStructure.setData(list);
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		} else {
			throw new DataNotFoundException("Event Data Not Present");
		}
	}

	public ResponseEntity<ResponseStructure<String>> uploadEventImage(int eventId, MultipartFile file) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		Event event = eventDao.getEventById(eventId);
		if (event != null) {
			if (event.getEventImage() != null) {
				try {
					event.setEventImage(EventImage.builder().name(file.getOriginalFilename())
							.type(file.getContentType()).imageData(ImageUtils.compressImage(file.getBytes()))
							.id(event.getEventImage().getId()).build());
				} catch (IOException e) {
					e.printStackTrace();
				}
			} else {
				try {
					event.setEventImage(EventImage.builder().name(file.getOriginalFilename())
							.type(file.getContentType()).imageData(ImageUtils.compressImage(file.getBytes())).build());
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			eventDao.saveEvent(event);
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("ProductImage Saved Successfully");
			responseStructure.setData("Image Saved Successfully For Product of Id -> " + eventId);
			return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.OK);
		} else {
			throw new IdNotFoundException("Event ID " + eventId + " Not Found");
		}
	}

	@SuppressWarnings("null")
	public ResponseEntity<?> downloadEventImageByEventId(int eventId) {
		Event event = eventDao.getEventById(eventId);
		if (event != null) {
			EventImage eventImage = event.getEventImage();
			if (eventImage != null) {
				eventImage.setImageData(ImageUtils.decompressImage(eventImage.getImageData()));
				byte[] img = eventImage.getImageData();
				return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(img);
			} else {
				throw new IdNotFoundException("Event Image is Not Present" + eventImage.getId());
			}
		} else {
			throw new IdNotFoundException("Event Id is Not Present" + eventId);
		}
	}

}
