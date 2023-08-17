package com.ot.pertain.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ot.pertain.dto.Host;
import com.ot.pertain.dto.ResponseStructure;
import com.ot.pertain.dto.User;
import com.ot.pertain.service.UserService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/host")
@CrossOrigin(origins = "*")
public class HostController {

	@Autowired
	private UserService userService;

	@ApiOperation(value = "Save Host", notes = "Input is Host Object and return Host object")
	@ApiResponses(value = { @ApiResponse(code = 201, message = "CREATED"),
			@ApiResponse(code = 409, message = "User Already Exist's") })
	@PostMapping(value = "/save", consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<ResponseStructure<Host>> saveCustomer(@RequestBody @Validated Host host) {
		return userService.saveHost(host);
	}
	
	@ApiOperation(value = "Fetch Host by id", notes = "Input Is Id Of The Host Object and return Host Object With Id")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successfully found"),
			@ApiResponse(code = 404, message = "Not Found") })
	@GetMapping(value = "/id/{id}", produces = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<ResponseStructure<Host>> findHostById(@PathVariable int id) {
		return userService.getHostById(id);
	}

	@ApiOperation(value = "Fetch All Host", notes = "Return The List Of Hosts")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Fetched All The Hosts Object") })
	@GetMapping(value = "/getallhost", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<ResponseStructure<List<Host>>> getAllHosts() {
		return userService.getAllHost();
	}

	@ApiOperation(value = "Delete Host Object", notes = "Input Is Id Of The Host Object And Output Is String")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successfully Deleted"),
			@ApiResponse(code = 404, message = "Not Found") })
	@DeleteMapping(value = "/deletehost/{id}", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<ResponseStructure<String>> deleteHostById(@PathVariable int id) {
		return userService.deleteHostById(id);
	}

	@ApiOperation(value = "Update Host Object", notes = "Input Is Host Object And Return Updated Host Object With Id")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
			@ApiResponse(code = 404, message = "Not Found") })
	@PutMapping(value = "/updatehost", consumes = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE }, produces = { MediaType.APPLICATION_XML_VALUE,
					MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<ResponseStructure<Host>> updateHost(@RequestBody Host host) {
		return userService.updateHost(host);
	}

	@ApiOperation(value = "Fetch Host By Name", notes = "Input Is Name Of The Host Object And Return Host Object With Id")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Found"),
			@ApiResponse(code = 404, message = "Not Found") })
	@GetMapping(value = "/gethostbyname/{userName}", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<ResponseStructure<List<Host>>> findHostByName(@PathVariable String userName) {
		return userService.getHostByName(userName);
	}

	@ApiOperation(value = "Fetch Host By Email-Id", notes = "Input Is Email-Id Of The Host Object And Return Host Object With Id")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Found"),
			@ApiResponse(code = 404, message = "Not Found") })
	@GetMapping(value = "/email/{email}", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<ResponseStructure<User>> findHostByEmail(@PathVariable String email) {
		return userService.getHostByEmail(email);
	}

	@ApiOperation(value = "Fetch Host By PhoneNumber", notes = "Input Is PhoneNumber Of The Host Object And Return Host Object With Id")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
			@ApiResponse(code = 404, message = "Not Found") })
	@GetMapping(value = "/phone/{phone}", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<ResponseStructure<User>> findCustomerByPhone(@PathVariable String phone) {
		return userService.getHostByPhone(phone);
	}

	@ApiOperation(value = "Validate Customer By Email", notes = "Inputs are Customer's email id and password and return customer object")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
			@ApiResponse(code = 404, message = "Not Found") })
	@GetMapping(value = "/validate/email/{email}/{password}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<ResponseStructure<Object>> validateCustomerByEmail(@PathVariable String email,
			@PathVariable String password) {
		return userService.validateUserByEmail(email, password);
	}

	@GetMapping(value = "/otp", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<ResponseStructure<User>> validateOtp(@RequestParam int otp) {
		return userService.validateOtp(otp);
	}

	@ApiOperation(value = "Validate Customer By Phone", notes = "Inputs are Customers phone number and password and return customer obj")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
			@ApiResponse(code = 404, message = "Not Fond") })
	@PutMapping(value = "/validate/phone/{phone}/{password}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<ResponseStructure<Object>> validateCustomerByPhone(@PathVariable String phone,
			@PathVariable String password) {
		return userService.validateUserByPhone(phone, password);
	}

}