package com.impactorsacademy.ems.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.impactorsacademy.ems.dto.EmployeeDto;
import com.impactorsacademy.ems.service.EmployeeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor //helps us avoid writing the consturctor manually
@RestController
@RequestMapping("/api/employees/")
public class EmployeeController {

    private EmployeeService employeeService;

    //Build "ADD" Employee REST API
    @PostMapping 
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto createdEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }

    //Build "GET" Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId); 
        return ResponseEntity.ok(employeeDto);
    }



}
