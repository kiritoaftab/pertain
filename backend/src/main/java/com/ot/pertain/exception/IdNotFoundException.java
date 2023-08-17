package com.ot.pertain.exception;

public class IdNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 281976126048156298L;
	
	private String message = "Id Not Found";

	public IdNotFoundException(String message) {
		this.message = message;
	}

	public IdNotFoundException() {
	}

	@Override
	public String getMessage() {
		return message;
	}
}
