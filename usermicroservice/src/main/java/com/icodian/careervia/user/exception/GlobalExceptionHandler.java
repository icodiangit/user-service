package com.icodian.careervia.user.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.icodian.careervia.user.payload.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(AccountDisabledException.class)
	public ResponseEntity<ApiResponse> handleResourceDisabledException(AccountDisabledException ex){
		
		String message = ex.getMessage();
		
		ApiResponse apiResponse = ApiResponse.builder().message(message).success(false).status(HttpStatus.NOT_FOUND).build();
		return new ResponseEntity<>(apiResponse, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(DuplicateskillException.class)
	public ResponseEntity<ApiResponse> handleDuplicateResourseException(DuplicateskillException ex){
		
		String message = ex.getMessage();
		
		ApiResponse apiResponse = ApiResponse.builder().message(message).success(false).status(HttpStatus.NOT_ACCEPTABLE).build();
		return new ResponseEntity<>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler(InvalidCredentialsException.class)
	public ResponseEntity<ApiResponse> handleInvalidCredentialsException(InvalidCredentialsException ex){
		
		String message = ex.getMessage();
		
		ApiResponse apiResponse = ApiResponse.builder().message(message).success(false).status(HttpStatus.NOT_ACCEPTABLE).build();
		return new ResponseEntity<>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler(InvalidEmailFormatException.class)
	public ResponseEntity<ApiResponse> handleInvalidEmailFormatException(InvalidEmailFormatException ex){
		
		String message = ex.getMessage();
		
		ApiResponse apiResponse = ApiResponse.builder().message(message).success(false).status(HttpStatus.NOT_ACCEPTABLE).build();
		return new ResponseEntity<>(apiResponse,HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler(InvalidUserDataException.class)
	public ResponseEntity<ApiResponse> handleInvalidUserDataException(InvalidUserDataException ex){
		
		String message = ex.getMessage();
		
		ApiResponse apiResponse = ApiResponse.builder().message(message).success(false).status(HttpStatus.NOT_ACCEPTABLE).build();
		return new ResponseEntity<>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler(ResumeNotUploadedException.class)
	public ResponseEntity<ApiResponse> handleResumeNotUploadedException(ResumeNotUploadedException ex){
		
		String message = ex.getMessage();
		
		ApiResponse apiResponse = ApiResponse.builder().message(message).success(false).status(HttpStatus.NOT_ACCEPTABLE).build();
		return new ResponseEntity<>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}
		
	@ExceptionHandler(UnauthorizedAccessException.class)
	public ResponseEntity<ApiResponse> handleUserAlredayExistException(UnauthorizedAccessException ex){
		
		String message = ex.getMessage();
		
		ApiResponse apiResponse = ApiResponse.builder().message(message).success(false).status(HttpStatus.NOT_ACCEPTABLE).build();
		return new ResponseEntity<>(apiResponse,HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler(UserAlreadyExistException.class)
	public ResponseEntity<ApiResponse> handleUserAlreadyExistException(UserAlreadyExistException ex){
		
		String message = ex.getMessage();
		
		ApiResponse apiResponse = ApiResponse.builder().message(message).success(false).status(HttpStatus.NOT_ACCEPTABLE).build();
		return new ResponseEntity<>(apiResponse,HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<ApiResponse> handleUserNotFoundException(UserNotFoundException ex){
		
		String message = ex.getMessage();
		
		ApiResponse apiResponse = ApiResponse.builder().message(message).success(false).status(HttpStatus.NOT_FOUND).build();
		return new ResponseEntity<>(apiResponse,HttpStatus.NOT_FOUND);
	}
	
	

}
