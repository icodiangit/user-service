package com.icodian.careervia.user.dto;

import java.util.Date;

import lombok.Data;

@Data
public class ApplicationDto {
	
	private Long applicationId;
	private Long jobId;
	private String status;
	private Date appliedAt;
	
}
