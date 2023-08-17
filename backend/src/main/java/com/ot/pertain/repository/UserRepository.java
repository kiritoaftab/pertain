package com.ot.pertain.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ot.pertain.dto.Host;
import com.ot.pertain.dto.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	public Optional<User> findByEmail(String email);

	public Optional<User> findByPhone(String phone);

	public Optional<List<User>> findByUserName(String username);

	@Query(nativeQuery = true, value = ("select *,0 as clazz from user u where u.user_name = ?"))
	public Optional<List<Host>> getByHostName(String username);

	public Optional<User> findByOtp(int otp);

	public Optional<User> findByUuid(String uuid);

	public Host getHostById(int id);

	@Query(nativeQuery = true, value = ("select *,0 as clazz from user u"))
	public List<Host> getAllHost();

	public Optional<User> findById(int id);

	@Query(value = "SELECT u FROM User u WHERE role = 'ROLE_ADMIN'")
	public List<User> getAllAdmin();

}
