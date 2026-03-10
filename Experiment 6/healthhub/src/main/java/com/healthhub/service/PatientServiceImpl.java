package com.healthhub.service;

import com.healthhub.dto.PatientDTO;
import com.healthhub.model.Patient;
import com.healthhub.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository repository;

    private PatientDTO convertToDTO(Patient patient) {
        PatientDTO dto = new PatientDTO();
        dto.setId(patient.getId());
        dto.setName(patient.getName());
        dto.setEmail(patient.getEmail());
        dto.setDisease(patient.getDisease());
        return dto;
    }

    private Patient convertToEntity(PatientDTO dto) {
        Patient patient = new Patient();
        patient.setId(dto.getId());
        patient.setName(dto.getName());
        patient.setEmail(dto.getEmail());
        patient.setDisease(dto.getDisease());
        return patient;
    }

    @Override
    public PatientDTO createPatient(PatientDTO dto) {
        Patient patient = convertToEntity(dto);
        return convertToDTO(repository.save(patient));
    }

    @Override
    public List<PatientDTO> getAllPatients() {
        return repository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PatientDTO getPatientById(Long id) {
        Patient patient = repository.findById(id).orElseThrow();
        return convertToDTO(patient);
    }

    @Override
    public PatientDTO updatePatient(Long id, PatientDTO dto) {
        Patient patient = repository.findById(id).orElseThrow();

        patient.setName(dto.getName());
        patient.setEmail(dto.getEmail());
        patient.setDisease(dto.getDisease());

        return convertToDTO(repository.save(patient));
    }

    @Override
    public void deletePatient(Long id) {
        repository.deleteById(id);
    }
}