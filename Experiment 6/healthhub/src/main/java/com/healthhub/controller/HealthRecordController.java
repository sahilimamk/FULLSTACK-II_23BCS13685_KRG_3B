package com.healthhub.controller;

import com.healthhub.dto.HealthRecordDTO;
import com.healthhub.service.HealthRecordService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/records")
public class HealthRecordController {

    @Autowired
    private HealthRecordService service;

    @PostMapping
    public HealthRecordDTO create(@Valid @RequestBody HealthRecordDTO dto){
        return service.createRecord(dto);
    }

    @GetMapping
    public List<HealthRecordDTO> getAll(){
        return service.getAllRecords();
    }

    @GetMapping("/{id}")
    public HealthRecordDTO getById(@PathVariable Long id){
        return service.getRecordById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.deleteRecord(id);
    }
}