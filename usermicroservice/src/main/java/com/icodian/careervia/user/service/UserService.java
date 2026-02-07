package com.icodian.careervia.user.service;

import com.icodian.careervia.user.entity.Course;
import com.icodian.careervia.user.entity.Resume;
import com.icodian.careervia.user.entity.Skill;
import com.icodian.careervia.user.entity.User;
import com.netflix.discovery.shared.Application;

public interface UserService {
	
	User saveUser(User user);
	
	User updateUser(Long id);
	
	User getUserByid(Long id);
	
	User getUserByEmail(String email);
	
	User deleteUserById(Long id);
	
	Skill saveSkill(Skill skill);
	
	Skill updateSkill(Long id);
	
	Skill getSkillByUserId(Long id);
	
	Course saveCourse(Course course);
	
	Course updateCourse(Long id);
	
	Course getCourseById(Long id);
	
	Application getApplicationById(Long id);
	
	Resume saveResume(Resume resume);
	
	Resume updateResumeById(Long id);
	
	Resume deleteResumeById(Long id);
	
	Application getApplicationByUserId(Long id);
	
	
	
	

}
