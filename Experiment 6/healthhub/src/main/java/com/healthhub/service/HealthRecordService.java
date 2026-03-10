package com.healthhub.service;

import com.healthhub.dto.HealthRecordDTO;
import java.util.List;

public interface HealthRecordService {

    HealthRecordDTO createRecord(HealthRecordDTO dto);

    List<HealthRecordDTO> getAllRecords();

    HealthRecordDTO getRecordById(Long id);

    void deleteRecord(Long id);
}