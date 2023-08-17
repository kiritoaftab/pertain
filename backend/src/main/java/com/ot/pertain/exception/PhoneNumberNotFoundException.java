package com.ot.pertain.exception;

public class PhoneNumberNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -6590975325531603136L;
	
	private String message = "Phone Number Does Not Exist";

	public PhoneNumberNotFoundException(String message) {
		this.message = message;
	}

	public PhoneNumberNotFoundException() {
	}

	@Override
	public String getMessage() {
		return message;
	}
}
