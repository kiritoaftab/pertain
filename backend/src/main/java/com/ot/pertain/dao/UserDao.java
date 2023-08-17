package com.ot.pertain.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ot.pertain.dto.Host;
import com.ot.pertain.dto.User;
import com.ot.pertain.repository.UserRepository;

@Repository
public class UserDao {
	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}

	// Host Behaviors

	public Host saveHost(Host host) {
		return userRepository.save(host);
	}

	public Host getHostById(int id) {
		Host host = userRepository.getHostById(id);
		if (host != null) {
			return host;
		} else {
			return null;
		}
	}

	public List<Host> getAllHost() {
		return userRepository.getAllHost();
	}

	public void deleteHost(Host host) {
		userRepository.delete(host);
	}

	public List<Host> getHostByName(String userName) {
		Optional<List<Host>> optional = userRepository.getByHostName(userName);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

	public User getUserByPhone(String phone) {
		Optional<User> optional = userRepository.findByPhone(phone);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

	public User getUserByEmail(String email) {
		Optional<User> optional = userRepository.findByEmail(email);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

	public User findUserByOtp(int otp) {
		Optional<User> optional = userRepository.findByOtp(otp);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

	public User findUserByUuid(String uuid) {
		Optional<User> optional = userRepository.findByUuid(uuid);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

}
