package com.icodian.careervia.user.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestTemplate;

import com.icodian.careervia.user.dto.UserCreateRequestDTO;
import com.icodian.careervia.user.dto.UserResponseDTO;
import com.icodian.careervia.user.entity.User;
import com.icodian.careervia.user.entity.UserProfile;
import com.icodian.careervia.user.repository.UserProfileRepository;
import com.icodian.careervia.user.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
public class UserServiceImplTest {

	@Mock
	private UserRepository userRepository;

	@Mock
	private UserProfileRepository userProfileRepository;

	@Mock
	private RestTemplate restTempltate;

	@InjectMocks
	private UserServiceImpl userService;

	@Test
	void testCreateUser_Success() {

		UserCreateRequestDTO request = new UserCreateRequestDTO();
		request.setEmail("test@gmail.com");
		request.setPhone("1234567890");
		request.setPassword("pass");

		when(userRepository.findByEmail("test@gmail.com")).thenReturn(Optional.empty());

		User savedUser = new User();
		savedUser.setUserId(1L);
		savedUser.setEmail("test@gmail.com");

		when(userRepository.save(any(User.class))).thenReturn(savedUser);

		when(userProfileRepository.save(any(UserProfile.class))).thenReturn(new UserProfile());

		UserResponseDTO response = userService.createUser(request);

		assertNotNull(response);
		assertEquals("test@gmail.com", response.getEmail());

		verify(userRepository).save(any(User.class));
		verify(userProfileRepository).save(any(UserProfile.class));

	}
}
