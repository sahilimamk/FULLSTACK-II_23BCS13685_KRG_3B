package com.healthhub.service;

import com.healthhub.dto.HealthRecordDTO;
import com.healthhub.model.HealthRecord;
import com.healthhub.repository.HealthRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HealthRecordServiceImpl implements HealthRecordService {

    @Autowired
    private HealthRecordRepository repository;

    private HealthRecordDTO convertToDTO(HealthRecord record){
        HealthRecordDTO dto = new HealthRecordDTO();
        dto.setId(record.getId());
        dto.setDiagnosis(record.getDiagnosis());
        dto.setTreatment(record.getTreatment());
        dto.setDoctorName(record.getDoctorName());
        dto.setPatientId(record.getPatientId());
        return dto;
    }

    private HealthRecord convertToEntity(HealthRecordDTO dto){
        HealthRecord record = new HealthRecord();
        record.setId(dto.getId());
        record.setDiagnosis(dto.getDiagnosis());
        record.setTreatment(dto.getTreatment());
        record.setDoctorName(dto.getDoctorName());
        record.setPatientId(dto.getPatientId());
        return record;
    }

    @Override
    public HealthRecordDTO createRecord(HealthRecordDTO dto){
        HealthRecord record = convertToEntity(dto);
        return convertToDTO(repository.save(record));
    }

    @Override
    public List<HealthRecordDTO> getAllRecords(){
        return repository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public HealthRecordDTO getRecordById(Long id){
        return convertToDTO(repository.findById(id).orElseThrow());
    }

    @Override
    public void deleteRecord(Long id){
        repository.deleteById(id);
    }
}