package com.icodian.careervia.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.icodian.careervia.user.dto.LoginRequestDto;
import com.icodian.careervia.user.dto.LoginResponseDto;
import com.icodian.careervia.user.dto.UserCreateRequestDto;
import com.icodian.careervia.user.dto.UserResponseDto;
import com.icodian.careervia.user.dto.UserUpdateRequestDto;
import com.icodian.careervia.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

	private final UserService userService;

	// CREATE USER
	@PostMapping
	public ResponseEntity<UserResponseDto> createUser(@RequestBody UserCreateRequestDto request) {
		return ResponseEntity.ok(userService.createUser(request));
	}

	// LOGIN
	@PostMapping("/login")
	public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto request) {
		return ResponseEntity.ok(userService.login(request));
	}

	// GET USER BY ID
	@GetMapping("/{userId}")
	public ResponseEntity<UserResponseDto> getUserById(@PathVariable Long userId) {
		return ResponseEntity.ok(userService.getUserById(userId));
	}

	// GET USER BY EMAIL
	@GetMapping
	public ResponseEntity<UserResponseDto> getUserByEmail(@RequestParam String email) {
		return ResponseEntity.ok(userService.getUserByEmail(email));
	}

	// UPDATE USER
	@PutMapping("/{userId}")
	public ResponseEntity<UserResponseDto> updateUser(@PathVariable Long userId,
			@RequestBody UserUpdateRequestDto request) {
		return ResponseEntity.ok(userService.updateUser(userId, request));
	}

	// DELETE USER
	@DeleteMapping("/{userId}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
		userService.deleteUser(userId);
		return ResponseEntity.noContent().build();
	}

}
