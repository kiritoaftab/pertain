package com.ot.pertain.exception;

public class DuplicateDataEntryException extends RuntimeException {

	private static final long serialVersionUID = 1130095404594762814L;
	
	private String message = "Already Exists";

	public DuplicateDataEntryException(String message) {
		this.message = message;
	}

	public DuplicateDataEntryException() {

	}

	@Override
	public String toString() {
		return message;
	}
	
}
