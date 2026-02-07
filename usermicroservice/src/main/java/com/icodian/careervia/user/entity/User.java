package com.icodian.careervia.user.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Data
@Table(name = "User")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id", updatable = false, nullable = false)
	private Long user_id;
	
	@Column(name = "full_name")
	private String full_name;
	
	@Column(name = "email", unique = true)
	private String email;
	
	@Column(name = "phone", unique = true)
	private String phone;
	
	@Column(name = "role")
	private String role;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "created_at")
	private Date created_at;
	
	@OneToOne(mappedBy = "user")
	private UserProfile userProfile;
	
	@OneToMany(mappedBy = "user")
	private List<UserSkill> userSkill; 
	
	@OneToMany(mappedBy = "user")
	private List<UserCourse> userCourse;
	
	@OneToMany(mappedBy = "user")
	private List<Resume> resumes;
	
}
