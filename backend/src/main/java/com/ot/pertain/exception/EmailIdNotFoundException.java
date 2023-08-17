package com.ot.pertain.exception;

public class EmailIdNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -7214761556852844349L;
	
	private String message = "Invalid Email Id";

	public EmailIdNotFoundException(String message) {
		this.message = message;
	}

	public EmailIdNotFoundException() {

	}

	@Override
	public String getMessage() {
		return message;
	}
}
