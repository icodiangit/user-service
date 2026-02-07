package com.icodian.careervia.user.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "UserProfile")
public class UserProfile {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "profile_id", updatable = false, nullable = false)
	private Long profile_id;
	
	@OneToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	@Column(name = "education")
	private String education;
	
	@Column(name = "experience")
	private String experience;
	
	@Column(name = "bio")
	private String bio;
	
	@Column(name = "profile_strength")
	private Integer profile_strength;
	
	@Column(name = "updated_at")
	private Date updated_at;

}
