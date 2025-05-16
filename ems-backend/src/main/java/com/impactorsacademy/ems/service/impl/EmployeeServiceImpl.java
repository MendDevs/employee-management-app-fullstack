package com.impactorsacademy.ems.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;
import com.impactorsacademy.ems.dto.EmployeeDto;
import com.impactorsacademy.ems.entity.Employee;
import com.impactorsacademy.ems.exception.ResourceNotFoundException;
import com.impactorsacademy.ems.mapper.EmployeeMapper;
import com.impactorsacademy.ems.repository.EmployeeRepository;
import com.impactorsacademy.ems.service.EmployeeService;


@Service // Marks this class as a Spring service, making it a candidate for dependency injection.
@AllArgsConstructor // Lombok annotation to generate a constructor with all fields as arguments.
public class EmployeeServiceImpl implements EmployeeService { // Implements the EmployeeService interface.

    private EmployeeRepository employeeRepository; // Injects the repository to interact with the database.

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        // Maps the EmployeeDto to an Employee entity.
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        // Saves the Employee entity to the database.
        Employee savedEmployee = employeeRepository.save(employee);
        // Maps the saved Employee entity back to an EmployeeDto and returns it.
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        // Finds an Employee by ID or throws a ResourceNotFoundException if not found.
        Employee employee = employeeRepository.findById(employeeId)
            .orElseThrow(() -> new ResourceNotFoundException("ID does not match any employee name in our database. " + employeeId));
        // Maps the Employee entity to an EmployeeDto and returns it.
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        // Retrieves all Employee entities from the database.
        List<Employee> employees = employeeRepository.findAll();
        // Maps each Employee entity to an EmployeeDto and collects them into a list.
        return employees.stream()
                .map(employee -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee) {
        // Finds an Employee by ID or throws a ResourceNotFoundException if not found.
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
            () -> new ResourceNotFoundException("ID does not match any employee name in our database.")
        );
        // Updates the Employee entity with new values from the EmployeeDto.
        employee.setFirstName(updateEmployee.getFirstName());
        employee.setLastName(updateEmployee.getLastName());
        employee.setEmail(updateEmployee.getEmail());
        // Saves the updated Employee entity to the database.
        Employee updaEmployeeObj = employeeRepository.save(employee);
        // Maps the updated Employee entity to an EmployeeDto and returns it.
        return EmployeeMapper.mapToEmployeeDto(updaEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
       
        employeeRepository.findById(employeeId).orElseThrow(
            () -> new ResourceNotFoundException("Employee does not exist in DataBase")
        );
        employeeRepository.deleteById(employeeId);
    }
}



