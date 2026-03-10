package com.healthhub.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class HealthRecordDTO {

    private Long id;

    @NotNull
    private String diagnosis;

    private String treatment;

    private String doctorName;

    private Long patientId;
}