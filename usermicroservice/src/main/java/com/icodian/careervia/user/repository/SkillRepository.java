package com.icodian.careervia.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icodian.careervia.user.entity.Skill;

public interface SkillRepository extends JpaRepository<Skill, String>{
	
	List<Skill> findByUserId(String userId); //fetching list of skills of user via their id

}
