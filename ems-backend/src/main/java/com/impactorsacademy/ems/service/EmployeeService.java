package com.impactorsacademy.ems.service;
import com.impactorsacademy.ems.dto.EmployeeDto;
import java.util.List;



public interface EmployeeService {
  EmployeeDto createEmployee(EmployeeDto employeeDto);
  EmployeeDto getEmployeeById(Long employeeId);
  List<EmployeeDto> getAllEmployees();
  EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee);
  void deleteEmployee(Long employeeId);
}


