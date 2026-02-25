package com.icodian.careervia.user.service;

import java.util.List;

import com.icodian.careervia.user.dto.ApplicationDto;
import com.icodian.careervia.user.dto.CourseDto;
import com.icodian.careervia.user.dto.LoginRequestDto;
import com.icodian.careervia.user.dto.LoginResponseDto;
import com.icodian.careervia.user.dto.ResumeDto;
import com.icodian.careervia.user.dto.ResumeRequestDto;
import com.icodian.careervia.user.dto.SkillDto;
import com.icodian.careervia.user.dto.UserCourseRequestDto;
import com.icodian.careervia.user.dto.UserCreateRequestDto;
import com.icodian.careervia.user.dto.UserProfileDto;
import com.icodian.careervia.user.dto.UserProfileRequestDto;
import com.icodian.careervia.user.dto.UserResponseDto;
import com.icodian.careervia.user.dto.UserSkillRequestDto;
import com.icodian.careervia.user.dto.UserUpdateRequestDto;

public interface UserService {
	//Authentication
	LoginResponseDto login(LoginRequestDto request);
	
	//CRUD Opp.
	UserResponseDto createUser(UserCreateRequestDto request);
	UserResponseDto updateUser(Long userId, UserUpdateRequestDto request);
	UserResponseDto getUserById(Long userId);
	UserResponseDto getUserByEmail(String email);
	void deleteUser(Long userId);
	
	//Profile
	UserProfileDto createOrUpdateProfile(Long userId, UserProfileRequestDto request);
	
	//Skills
	void addSkillToUser(Long userId, UserSkillRequestDto request);
	List<SkillDto> getUserSkills(Long userId);
	void removeSkillFromUser(Long userId, Long skillId);
	
	//Courses
	void addCourseToUser(Long userId, UserCourseRequestDto request);
	List<CourseDto> getUserCourses(Long userId);
	void removeCourseFromUser(Long userId, Long courseId);
	
	//Resume
	ResumeDto addResume(Long userId, ResumeRequestDto reuqest);
	ResumeDto updateResume(Long userId, Long resumeId, ResumeRequestDto request);
	void deleteResume(Long userId, Long resumeId);
	
	//Application
	List<ApplicationDto> getUserApplication(Long userId);
	
	
}
