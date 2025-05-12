package com.impactorsacademy.ems.service.impl;

import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;

import com.impactorsacademy.ems.dto.EmployeeDto;
import com.impactorsacademy.ems.entity.Employee;
import com.impactorsacademy.ems.exception.ResourceNotFoundException;
import com.impactorsacademy.ems.mapper.EmployeeMapper;
import com.impactorsacademy.ems.repository.EmployeeRepository;
import com.impactorsacademy.ems.service.EmployeeService;


@Service
@AllArgsConstructor 

public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override  
    //Build add Employee REST API
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId)
            .orElseThrow(() -> new ResourceNotFoundException("ID does not match any employee name in our database: " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    } 

}



