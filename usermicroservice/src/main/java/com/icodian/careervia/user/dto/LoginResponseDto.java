package com.icodian.careervia.user.dto;

import com.icodian.careervia.user.enums.Role;

import lombok.Data;

@Data
public class LoginResponseDto {
	
	private Long userId;
	private String fullName;
	private String email;
	private Role role;
	private String token;
	private String status;

}
