package com.ot.pertain.exception;

public class InvalidCredentialException extends RuntimeException {

	private static final long serialVersionUID = 1969263626421072819L;
	
	private String message = "Invalid Password";

	public InvalidCredentialException(String message) {
		this.message = message;
	}

	public InvalidCredentialException() {

	}

	@Override
	public String toString() {
		return message;
	}
}
