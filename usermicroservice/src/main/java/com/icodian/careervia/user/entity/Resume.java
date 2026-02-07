package com.icodian.careervia.user.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Resume")
public class Resume {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "resume_id", updatable = false, nullable = false)
	private Long resume_id;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(name = "resume_type")
	private String resume_type;
	
	@Column(name = "drive_file_id", unique = true)
	private String drive_file_id;
	
	@Column(name = "derive_file_path")
	private String derive_file_path;
	
	@Column(name = "template_name")
	private String template_name;
	
	@Column(name = "version_number")
	private Integer version_number;
	
	@Column(name = "uploaded_by")
	private String uploaded_by;
	
	@Column(name = "created_at")
	private Date created_at;
	
	@Column(name = "updated_at")
	private Date updated_at;
	
}
