package com.ot.pertain.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ot.pertain.dao.UserDao;
import com.ot.pertain.dto.Host;
import com.ot.pertain.dto.ResponseStructure;
import com.ot.pertain.dto.User;
import com.ot.pertain.exception.DataNotFoundException;
import com.ot.pertain.exception.DuplicateDataEntryException;
import com.ot.pertain.exception.EmailIdNotFoundException;
import com.ot.pertain.exception.IdNotFoundException;
import com.ot.pertain.exception.InvalidCredentialException;
import com.ot.pertain.exception.PhoneNumberNotFoundException;
import com.ot.pertain.util.EmailSender;

@Service
public class UserService {
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private EmailSender emailSender;

	public ResponseEntity<ResponseStructure<Host>> saveHost(Host host) {
		ResponseStructure<Host> responseStructure = new ResponseStructure<>();
		if (userDao.getUserByEmail(host.getEmail()) != null || userDao.getUserByPhone(host.getPhone()) != null) {
			throw new DuplicateDataEntryException("Host Already Exist's");
		} else {
			host.setPassword(encoder.encode(host.getPassword()));
			emailSender.sendSimpleEmail(host.getEmail(),
					"Greetings \nYour Profile in Pertain Has Been Created.\nYou Can Now Host Your Events",
					"Hello " + host.getUserName());
			responseStructure.setStatus(HttpStatus.CREATED.value());
			responseStructure.setMessage("User Saved Successfully");
			responseStructure.setData(userDao.saveHost(host));
			return new ResponseEntity<>(responseStructure, HttpStatus.CREATED);
		}
	}

	public ResponseEntity<ResponseStructure<Host>> getHostById(int id) {
		ResponseStructure<Host> responseStructure = new ResponseStructure<>();
		Host host = userDao.getHostById(id);
		if (host != null) {
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("Fetched Host Details By Id");
			responseStructure.setData(host);
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		} else {
			throw new IdNotFoundException("HOST ID " + id + ", NOT FOUND");
		}
	}

	public ResponseEntity<ResponseStructure<List<Host>>> getAllHost() {
		ResponseStructure<List<Host>> responseStructure = new ResponseStructure<>();
		List<Host> list = userDao.getAllHost();
		if (list.size() > 0) {
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("All Details of HOST Fetched");
			responseStructure.setData(list);
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		} else {
			throw new DataNotFoundException("HOST Data Not Present");
		}
	}

	public ResponseEntity<ResponseStructure<String>> deleteHostById(int id) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		Host host = userDao.getHostById(id);
		if (host != null) {
			userDao.deleteHost(host);
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("HOST Of Id " + id + " Data Deleted");
			responseStructure.setData("HOST Data Deleted Successfully");
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		} else {
			throw new IdNotFoundException("HOST Id " + id + " Not Found");
		}
	}
	
	public ResponseEntity<ResponseStructure<Host>> updateHost(Host host) {
		ResponseStructure<Host> responseStructure = new ResponseStructure<>();
		Host host1 = userDao.getHostById(host.getId());
		if (host1 != null) {
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("Customer Updated Successfully");
			host.setPassword(encoder.encode(host.getPassword()));
			host.setRole("ROLE_HOST");
			responseStructure.setData(userDao.saveHost(host));
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		} else {
			throw new IdNotFoundException("HOST Id " + host.getId() + ", Not Found");
		}
	}
	
	public ResponseEntity<ResponseStructure<List<Host>>> getHostByName(String userName) {
		ResponseStructure<List<Host>> responseStructure = new ResponseStructure<>();
		List<Host> hosts = userDao.getHostByName(userName);
		for (Host host : hosts) {
			if (host.getUserName().equalsIgnoreCase(userName) && hosts.size() > 0) {
				responseStructure.setStatus(HttpStatus.OK.value());
				responseStructure.setMessage("Fetched HOST By Name");
				responseStructure.setData(hosts);
				return new ResponseEntity<>(responseStructure, HttpStatus.OK);
			} else {
				throw new DataNotFoundException("HOST Data Not Present");
			}
		}
		throw new DataNotFoundException("HOST Data Not Present");
	}
	
	public ResponseEntity<ResponseStructure<User>> getHostByEmail(String email) {
		User user = userDao.getUserByEmail(email);
		if (user != null) {
			ResponseStructure<User> responseStructure = new ResponseStructure<>();
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("Fetched HOST By Email-Id");
			responseStructure.setData(user);
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		} else {
			throw new EmailIdNotFoundException("HOST-Email : " + email + ", NOT Found");
		}
	}

	public ResponseEntity<ResponseStructure<User>> getHostByPhone(String phone) {
		User user = userDao.getUserByPhone(phone);
		if (user != null) {
			ResponseStructure<User> responseStructure = new ResponseStructure<>();
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("Fetched HOST By Email-Id");
			responseStructure.setData(user);
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		} else {
			throw new PhoneNumberNotFoundException("HOST-PhoneNumber : " + phone + ", NOT Found");
		}
	}
	
	public ResponseEntity<ResponseStructure<Object>> validateUserByEmail(String email, String password) {
		User user = userDao.getUserByEmail(email);
		if (user != null) {
			if (encoder.matches(password, user.getPassword())) {
				ResponseStructure<Object> responseStructure = new ResponseStructure<Object>();
				int otp = (int) (Math.random() * (9999 - 1000) + 1000);
				user.setOtp(otp);
				userDao.saveUser(user);
				emailSender.sendSimpleEmail(user.getEmail(),
						"Enter the Otp to Validate Your Self \n The Generated Otp " + otp, "Verify Your Otp");
				responseStructure.setStatus(HttpStatus.OK.value());
				responseStructure.setMessage("Successfully");
				responseStructure.setData("Otp Sent Successfully");
				return new ResponseEntity<>(responseStructure, HttpStatus.OK);
			} else {
				throw new InvalidCredentialException("Invalid Password");
			}
		} else {
			throw new EmailIdNotFoundException("User-Email : " + email + ", NOT Found");
		}
	}

	public ResponseEntity<ResponseStructure<User>> validateOtp(int otp) {
		User user = userDao.findUserByOtp(otp);
		if (user != null) {
			ResponseStructure<User> responseStructure = new ResponseStructure<User>();
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("Success");
			responseStructure.setData(user);
			return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.OK);
		} else {
			throw new InvalidCredentialException("Invalid OTP");
		}
	}

	public ResponseEntity<ResponseStructure<Object>> validateUserByPhone(String phone, String password) {
		User user = userDao.getUserByPhone(phone);
		if (user != null) {
			if (encoder.matches(password, user.getPassword())) {
				ResponseStructure<Object> responseStructure = new ResponseStructure<Object>();
				int otp = (int) (Math.random() * (9999 - 1000) + 1000);
				user.setOtp(otp);
				userDao.saveUser(user);
				emailSender.sendSimpleEmail(user.getEmail(),
						"Enter the Otp to Validate Your Self \n The Generated Otp " + otp, "Verify Your Otp");
				responseStructure.setStatus(HttpStatus.OK.value());
				responseStructure.setMessage("Successfully");
				responseStructure.setData("Otp Sent Successfully");
				return new ResponseEntity<>(responseStructure, HttpStatus.OK);
			} else {
				throw new InvalidCredentialException("Invalid Credential");
			}
		} else {
			throw new PhoneNumberNotFoundException("User-PhoneNumber : " + phone + ", NOT Found");
		}
	}

	public ResponseEntity<ResponseStructure<Object>> verifyEmailBeforeUpdate(String email) {
		User user = userDao.getUserByEmail(email);
		if (user != null) {
			ResponseStructure<Object> responseStructure = new ResponseStructure<>();
			String uuid = UUID.randomUUID().toString();
			String partOfUuid = uuid.substring(0, 11);
			if (partOfUuid.contains("-")) {
				String replace = partOfUuid.replace("-", "");
				user.setUuid(replace);
				userDao.saveUser(user);
				emailSender.sendSimpleEmail(user.getEmail(),
						"Enter the Unique to Validate Your Account \n The Generated Unique ID " + replace,
						"Verify Your Unique Id Before You Change YOur Password");
			} else {
				user.setUuid(partOfUuid);
				userDao.saveUser(user);
				emailSender.sendSimpleEmail(user.getEmail(),
						"Enter the Unique to Validate Your Account \n The Generated Unique ID " + partOfUuid,
						"Verify Your Unique Id Before You Change YOur Password");
			}
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("Fetched Customer By Email-Id");
			responseStructure.setData("Uuid Send To User Email-Id Successfully");
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		} else {
			throw new EmailIdNotFoundException("User-Email : " + email + ", NOT Found");
		}
	}

	public ResponseEntity<ResponseStructure<Object>> updatePasswordByUuid(String uuid, String newPassword) {
		ResponseStructure<Object> responseStructure = new ResponseStructure<>();
		User user = userDao.findUserByUuid(uuid);
		if (user != null) {
			user.setPassword(encoder.encode(newPassword));
			userDao.saveUser(user);
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("Password Reset");
			responseStructure.setData("Successfully Password Updated");
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		} else {
			throw new InvalidCredentialException("User-Uuid : " + uuid + ", Not Match");
		}
	}
	
	
}
