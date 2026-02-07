package com.icodian.careervia.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icodian.careervia.user.entity.Course;

public interface CourseRepository extends JpaRepository<Course, String> {
	
	List<Course> findByUser(String userId); //fetching list of courses taken by the user via their id

}
