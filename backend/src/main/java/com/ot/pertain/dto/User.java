package com.ot.pertain.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

import io.swagger.annotations.ApiModelProperty;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@ApiModelProperty(value = "AutoGenerated")
	private int id;

	@NotBlank(message = "Please Enter The User-Name")
	@ApiModelProperty(required = true)
	private String userName;

	@Column(unique = true)
	@NotBlank(message = "Please Enter The User-Email")
	@Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", message = "Enter a Valid User-Email")
	@ApiModelProperty(required = true)
	private String email;

	@Column(unique = true)
	@NotBlank(message = "Please Enter The User-PhoneNumber")
	@ApiModelProperty(required = true)
	@Pattern(regexp = "^[6-9]{1}[0-9]{9}+$", message = "Enter Proper User-PhoneNumber")
	private String phone;

	@NotBlank(message = "Please Enter the User-Password")
	@ApiModelProperty(required = true)
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,15})", message = "Enter Proper User-Password "
			+ "\n" + " The User-Password Should Have Atleast " + "\n" + " 1 Upper Case " + "\n" + " 1 Lower Case "
			+ "\n" + " 1 Special Character " + "\n" + " And 1 Numric Character " + "\n"
			+ " The Length OF The Password Must Be Minimum OF 6 Character And Maximum OF 15 Character ")
	private String password;

	@ApiModelProperty(required = true)
	private String role;

	@ApiModelProperty(required = false)
	private int otp;

	@ApiModelProperty(required = false)
	private String uuid;

	public User(int id,
			@NotBlank(message = "Please Enter The User-Email") @Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", message = "Enter a Valid User-Email") String email,
			@NotBlank(message = "Please Enter The User-Password") @Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,15})", message = "Enter Proper User-Password") String password,
			@NotBlank(message = "Please Enter The User-PhoneNumber") @Pattern(regexp = "^[6-9]{1}[0-9]{9}+$", message = "Enter Proper User-Password "
					+ "\n" + " The User-Password Should Have Atleast " + "\n" + " 1 Upper Case " + "\n"
					+ " 1 Lower Case " + "\n" + " 1 Special Character " + "\n" + " And 1 Numric Character " + "\n"
					+ " The Length OF The Password Must Be Minimum OF 6 Character And Maximum OF 15 Character ") String phone,
			@NotBlank(message = "Please Enter the User-Role") String role,
			@NotBlank(message = "Please Enter the User-Name") String userName, int otp, String uuid) {
		super();
		this.id = id;
		this.userName = userName;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.role = role;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@JsonIgnore
	public String getPassword() {
		return password;
	}

	@JsonSetter
	public void setPassword(String password) {
		this.password = password;
	}

	@JsonGetter
	public String getRole() {
		return role;
	}

	@JsonIgnore
	public void setRole(String role) {
		this.role = role;
	}

	@JsonIgnore
	public int getOtp() {
		return otp;
	}

	@JsonIgnore
	public void setOtp(int otp) {
		this.otp = otp;
	}
	
	@JsonIgnore
	public String getUuid() {
		return uuid;
	}

	@JsonIgnore
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public User() {
		super();
	}

}
