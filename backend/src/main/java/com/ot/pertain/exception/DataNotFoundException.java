package com.ot.pertain.exception;

public class DataNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -7420131185021998824L;
	
	private String message = "Data Not Present";

	public DataNotFoundException(String message) {
		this.message = message;
	}

	public DataNotFoundException() {

	}

	@Override
	public String toString() {
		return message;
	}
}
