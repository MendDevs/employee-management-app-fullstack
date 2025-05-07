package com.impactorsacademy.ems.service.impl;

import org.springframework.stereotype.Service;

import com.impactorsacademy.ems.dto.EmployeeDto;
import com.impactorsacademy.ems.entity.Employee;
import com.impactorsacademy.ems.mapper.EmployeeMapper;
import com.impactorsacademy.ems.repository.EmployeeRepository;
import com.impactorsacademy.ems.service.EmployeeService;

import lombok.AllArgsConstructor; 
im

@Service
@AllArgsConstructor 
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto  employeeDto){
            Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
            Employee savedEmployee = employeeRepository.save(employee);

            return null;
    }
}


