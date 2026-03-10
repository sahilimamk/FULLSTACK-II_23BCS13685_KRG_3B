package com.healthhub.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class PatientDTO {

    private Long id;

    @NotNull(message = "Name cannot be null")
    private String name;

    @Email(message = "Invalid Email")
    private String email;

    private String disease;
}