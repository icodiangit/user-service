package com.icodian.careervia.user.service;

import java.util.Date;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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
import com.icodian.careervia.user.entity.User;
import com.icodian.careervia.user.enums.Role;
import com.icodian.careervia.user.enums.UserStatus;
import com.icodian.careervia.user.exception.InvalidCredentialsException;
import com.icodian.careervia.user.exception.UserAlreadyExistException;
import com.icodian.careervia.user.exception.UserNotFoundException;
import com.icodian.careervia.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	
	private final UserRepository userRepository;
	//private final PasswordEncoder passwordEncoder;
	private final RestTemplate restTemplate;
	
	//CREATE USER
	@Override
	public UserResponseDto createUser(UserCreateRequestDto request) {
		
		if(userRepository.findByEmail(request.getEmail()).isPresent()) {
			throw new UserAlreadyExistException("Email already registered");
		}
		
		User user = new User();
		user.setFullName(request.getFullName());
		user.setEmail(request.getEmail());
		user.setPhone(request.getPhone());
		user.setRole(Role.JOB_SEEKER);
		user.setStatus(UserStatus.ACTIVE);
		user.setCreatedAt(new Date());
		
		user.setPassword(request.getPassword());
		
		User savedUser = userRepository.save(user);
		
		return mapToUserResponseDto(savedUser);
		
	}
	
	//LOGIN
	@Override
	public LoginResponseDto login(LoginRequestDto request) {
		
		User user = userRepository.findByEmail(request.getEmail())
				.orElseThrow(()-> new UserNotFoundException("Invalid Email"));
		
		if(!request.getPassword().equals(user.getPassword())) {
			throw new InvalidCredentialsException("Invalid Password");
		}
		
		LoginResponseDto response = new LoginResponseDto();
		response.setUserId(user.getUserId());
		response.setFullName(user.getFullName());
		response.setEmail(user.getEmail());
		response.setRole(Role.JOB_SEEKER);
		response.setToken("JWT TOKEN PLACEHOLDER");
		
		return response;
	}
	
	//GET USER BY ID
	@Override
	public UserResponseDto getUserById(Long userId) {
		
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new UserNotFoundException("User not found"));
		
		return mapToUserResponseDto(user);
	}
	
	//GET USER BY EMAIL
	@Override
	public UserResponseDto getUserByEmail(String email) {
		
		User user = userRepository.findByEmail(email)
				.orElseThrow(() -> new UserNotFoundException("User Not Found"));
		
		return mapToUserResponseDto(user);
	}
	
	//UPDATE USER
	@Override
	public UserResponseDto updateUser(Long userId, UserUpdateRequestDto request) {
		
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new UserNotFoundException("User Not Found"));
		
		user.setFullName(request.getFullName());
		user.setPhone(request.getPhone());
		user.setStatus(UserStatus.valueOf(request.getStatus().toUpperCase()));
		
		User updatedUser = userRepository.save(user);
		
		return mapToUserResponseDto(updatedUser);
	}
	
	//DELETE USER
	@Override
	public void deleteUser(Long userId) {
		
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new UserNotFoundException("User not found"));
		
		userRepository.delete(user);
	}
	
	private UserResponseDto mapToUserResponseDto(User user) {
		
		UserResponseDto dto = new UserResponseDto();
		dto.setUserId(user.getUserId());
		dto.setFullName(user.getFullName());
		dto.setEmail(user.getEmail());
		dto.setPhone(user.getPhone());
		dto.setRole(user.getRole());
		dto.setStatus(user.getStatus());
		dto.setCreatedAt(user.getCreatedAt());
		
		return dto;
		
		
	}

	@Override
	public UserProfileDto createOrUpdateProfile(Long userId, UserProfileRequestDto request) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addSkillToUser(Long userId, UserSkillRequestDto request) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<SkillDto> getUserSkills(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removeSkillFromUser(Long userId, Long skillId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addCourseToUser(Long userId, UserCourseRequestDto request) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<CourseDto> getUserCourses(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removeCourseFromUser(Long userId, Long courseId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public ResumeDto addResume(Long userId, ResumeRequestDto reuqest) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResumeDto updateResume(Long userId, Long resumeId, ResumeRequestDto request) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteResume(Long userId, Long resumeId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<ApplicationDto> getUserApplication(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
