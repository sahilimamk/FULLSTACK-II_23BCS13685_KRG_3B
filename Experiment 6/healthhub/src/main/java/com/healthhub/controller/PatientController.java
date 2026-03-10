package com.healthhub.controller;

import com.healthhub.dto.PatientDTO;
import com.healthhub.service.PatientService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService service;

    @PostMapping
    public PatientDTO create(@Valid @RequestBody PatientDTO dto) {
        return service.createPatient(dto);
    }

    @GetMapping
    public List<PatientDTO> getAll() {
        return service.getAllPatients();
    }

    @GetMapping("/{id}")
    public PatientDTO getById(@PathVariable Long id) {
        return service.getPatientById(id);
    }

    @PutMapping("/{id}")
    public PatientDTO update(@PathVariable Long id,
                             @RequestBody PatientDTO dto) {
        return service.updatePatient(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deletePatient(id);
    }
}