package com.icodian.careervia.user.dto;

import java.util.Date;
import java.util.List;

import com.icodian.careervia.user.enums.Role;
import com.icodian.careervia.user.enums.UserStatus;

import lombok.Data;

@Data
public class UserResponseDto {
	
	private Long userId;
	private String fullName;
	private String email;
	private String phone;
	private Role role;
	private UserStatus status;
	private Date createdAt;
	
	private UserProfileDto profile;
	private List<SkillDto> skills;
	private List<CourseDto> courses;
	private List<ResumeDto> resumes;

}
