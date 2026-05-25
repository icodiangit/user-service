package com.icodian.careervia.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icodian.careervia.user.entity.UserSkill;

public interface UserSkillRepository extends JpaRepository<UserSkill, String>{
	
	//Fetching skills of user by the ID
	List<UserSkill> findByUserUserId(Long userId);

}
